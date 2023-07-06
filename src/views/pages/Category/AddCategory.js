import { useEffect, useState } from "react";
import {
    CCard,
    CCardBody,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CButton,
  } from '@coreui/react'
import Colors from "src/views/theme/colors/Colors";
import {db} from '../../../configuration/firebase';
import {useLocation} from 'react-router-dom';

import {collection, getDocs , addDoc , doc , deleteDoc , updateDoc} from "firebase/firestore"
import { DocsExample } from "src/components";
import { useNavigate } from 'react-router-dom';

const AddCategory = (props,state) =>{
    const location = useLocation();
    const navigate = useNavigate();
    const [title , setTitle ] = useState('');
    const [categoryId , setCategoryId ] = useState(null);

    useEffect(()=>{
        console.log(props,state,location.state);
        setTitle(location?.state?.title);
        setCategoryId(location?.state?.id);
    },[]);

    
    const updateCategory = async (documentId) =>{
        console.log("updating category");

        if(categoryId){
            const category = doc(db, "categories", documentId);
            await updateDoc(category ,{
                "title":title
            });
        }
        navigate('/');
        console.log("document updated");
    };
    const addCategory = async () =>{

        if(!title){
            alert("Please Enter Title");
            return;
        }

        if(categoryId){
            updateCategory(categoryId);
            return;
        }
        const docRef = await addDoc(collection(db, "categories"), {
            title: title,
        });
        console.log("document Added",docRef);
        navigate('/');
    }

    return(
        <CCard className="mb-4">
            <CCardBody>
            <DocsExample href="forms/form-control">
                <CForm>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                        <CFormInput
                            type="email"
                            id="exampleFormControlInput1"
                            placeholder="Title"
                            onChange={(value )=>{
                                console.log(value.target.value);
                                setTitle(value.target.value);
                            }}
                            value={title}
                        />
                        <br/>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <CButton
                                color="primary"
                                active={true}
                                onClick={()=>{
                                    addCategory();
                                }}>
                            {categoryId?'Update':'ADD' }
                            </CButton>
                        </div>
                       
                    </div>
                </CForm>
            </DocsExample>
            </CCardBody>
        </CCard>
    )
}

export default AddCategory;