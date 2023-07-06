import { useEffect, useState } from "react";
import Tables from "src/views/base/tables/Tables";
import {db} from '../../../configuration/firebase';
import {collection, getDocs , addDoc , doc , deleteDoc , updateDoc} from "firebase/firestore"
import { useNavigate } from 'react-router-dom';
import {
    CButton
  } from '@coreui/react';
const categories = () =>{
    const navigate = useNavigate();
    // const history = useHistory();
    const [ categories , setCategories ] = useState([]);

    useEffect(()=>{
        fetchCategories();
    });

    

    const fetchCategories = async () =>{
        try{
          await getDocs(collection(db, 'categories')).then((querySnapshot)=>{
              const categoryList = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}));
              setCategories(categoryList);

          });
        }
        catch(error){
            console.log(error);
        }
    };

    const navigateToCategories = () =>{
        navigate('/Category/AddCategory');
        // history.push('/pages/Category/AddCategory');
    };
    const deleteCategories = async (documentId) => {
        try{
            const docRef = doc(db, "categories", documentId);
            deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
            }).catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    };
    return (
        <>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            
                <CButton color="link" active={true}
                    onClick={()=>{
                            navigateToCategories();
                    }}>
                    Add Category
                </CButton>   
            </div>
            <Tables categoryList={categories} />
        </>
       

    )

};

export default categories;