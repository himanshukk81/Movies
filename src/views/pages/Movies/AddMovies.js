import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import {collection, getDocs , addDoc , doc , deleteDoc , updateDoc} from "firebase/firestore"
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormLabel,
    CFormFloating,
    CFormSelect,
    CFormTextarea,
    CRow,
    CForm
  } from '@coreui/react';
  import { useNavigate } from 'react-router-dom';
  import {db} from '../../../configuration/firebase';
  import { DocsExample } from 'src/components'
  import { CButton } from '@coreui/react';

const AddMovies = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    
    const [title , setTitle ] = useState('');
    const [star , setStar ] = useState('');
    const [released , setReleased ] = useState('');
    const [description , setDescription ] = useState('');    
    const [background , setBackground ] = useState('');
    const [embed , setEmbed ] = useState('');
    
    const [runtime, setRunTime] = useState('');
    const [categoryId , setCategoryId ] = useState(null);
    const [movieId , setMovieId ] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        console.log(location.state);

        setTitle(location?.state?.title);
        setStar(location?.state?.stars);
        setReleased(location?.state?.released);
        setDescription(location?.state?.description);
        setBackground(location?.state?.background);
        setEmbed(location?.state?.embed);
        setCategoryId(location?.state?.categoryId);
        setMovieId(location?.state?.movieId);
        setRunTime(location?.state?.runtime);

        fetchCategories();
    },[]);

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

   
    const addMovie = async () =>{

        if(!title){
            alert("Please Enter Title");
            return;
        }
        if(!star){
            alert("Please Enter Star/Rating");
            return;
        }
        if(!released){
            alert("Please Enter Released Date");
            return;
        }
        if(!description){
            alert("Please Enter Description");
            return;
        }
        if(!background){
            alert("Please Enter Background Url");
            return;
        }
        if(!embed){
            alert("Please Enter Embed");
            return;
        }
        
        if(!runtime){
            alert("Please Enter RunTime");
            return;
        }

        if(movieId){
            updateMovie(movieId);
            return;
        }
        const docRef = await addDoc(collection(db, "movies"), 
        {
            'embed':embed,
            'title':title,
            'stars':star,
            'released':released,
            'runtime':runtime,
            'description':description,
            'recommendations':[],
            'genres':[],
            'background':background,
            'categoryId':categoryId
        });
        console.log("document Added",docRef);
        navigate('/Movies/MovieList');
    }

    const updateMovie = async (documentId) =>{
        console.log("updating Movie");

        if(documentId){
            const movie = doc(db, "movies", documentId);
            await updateDoc(movie ,{
                'embed':embed,
                'title':title,
                'stars':star,
                'released':released,
                'runtime':runtime,
                'description':description,
                'recommendations':[],
                'genres':[],
                'background':background,
                'categoryId':categoryId
            });
        }
        console.log("movie updated")
        navigate('/Movies/MovieList');

    };

    return(
        <CCard className="mb-4">
            <CCardBody>
            <DocsExample href="forms/form-control">
                <CForm>
                    <div className="mb-3">

                        <CFormLabel htmlFor="exampleFormControlInput1">Movie Url</CFormLabel>
                        <CFormSelect aria-label="Default select example" 
                            
                            value={categoryId}
                            onChange={(value)=>{
                            setCategoryId(value.target.value)}}>
                            <option>Select Category</option>
                            {categories.map((category)=>{
                                return(
                                    <option value={category.id}>{category.title}</option>
                                )
                            })}
                            
                        </CFormSelect>
                        
                        <CFormLabel htmlFor="exampleFormControlInput1">Movie Url</CFormLabel>

                        <CFormInput
                            type="url"
                            placeholder="Movie Url"
                            onChange={(value )=>{
                                setEmbed(value.target.value);
                            }}
                            value={embed}
                        />
                        <br/>

                        <CFormLabel htmlFor="exampleFormControlInput1">Stars</CFormLabel>
                        <CFormInput
                            type="number"
                            placeholder="Stars"
                            onChange={(value )=>{
                                setStar(value.target.value);
                            }}
                            value={star}
                        />
                        <br/>
                        
                        <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Title"
                            onChange={(value )=>{
                                setTitle(value.target.value);
                            }}
                            value={title}
                        />
                        <br/>

                        <CFormLabel htmlFor="exampleFormControlInput1">Released</CFormLabel>
                        <CFormInput
                            type="text"
                            placeholder="Released"
                            onChange={(value )=>{
                                setReleased(value.target.value);
                            }}
                            value={released}
                        />
                        <br/>
                        <CFormLabel htmlFor="exampleFormControlInput1">RunTime</CFormLabel>
                        <CFormInput
                            type="text"
                            placeholder="RunTime"
                            onChange={(value )=>{
                                setRunTime(value.target.value);
                            }}
                            value={runtime}
                        />
                        <br/>

                        <CFormLabel htmlFor="exampleFormControlInput1">Description</CFormLabel>
                        <CFormTextarea
                            type="text"
                            placeholder="Description"
                            onChange={(value )=>{
                                setDescription(value.target.value);
                            }}
                            value={description}
                        />
                        <br/>

                        <CFormLabel htmlFor="exampleFormControlInput1">Background</CFormLabel>
                        <CFormInput
                            type="text"
                            placeholder="Background"
                            onChange={(value )=>{
                                setBackground(value.target.value);
                            }}
                            value={background}
                        />
                        <br/>

                        
                        
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <CButton
                                color="primary"
                                active={true}
                                onClick={()=>{
                                    addMovie();
                                }}>
                            {movieId?'Update Movie':'ADD Movie' }
                            </CButton>
                        </div>
                       
                    </div>
                </CForm>
            </DocsExample>
            </CCardBody>
        </CCard>
    )
}

export default AddMovies;