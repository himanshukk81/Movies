import React, { useEffect , useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import {
  CButton
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

import { DocsExample } from 'src/components'
import {db} from '../../../configuration/firebase';
import {collection, getDocs , addDoc , doc , deleteDoc , updateDoc} from "firebase/firestore"

const Tables = (props,{propsD}) => {
  const navigate = useNavigate();
  const [categories , setCategories] = useState([]);
  const [movies , setMovies] = useState([]);

  useEffect(()=>{
    setCategories(props.categoryList);
    setMovies(props.movieList);
  });  

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

  const deleteMovie = async (documentId) => {
    console.log(documentId);
    try{
        const docRef = doc(db, "movies", documentId);
        deleteDoc(docRef)
        .then(() => {
            console.log("Movie Deleted Successfully")
        }).catch((error)=>{
            console.log(error);
        })
    }
    catch(error){
        console.log(error);
    }
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <DocsExample href="components/table">
              {props.isCategory && categories && categories.length &&
              
              <CTable>
                
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                {categories && categories.length &&<CTableBody>
                  
                  {categories.map((category,index)=>{
                    return(
                      <CTableRow>
                      <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                      <CTableDataCell>{category?.title}</CTableDataCell>
                      <CTableDataCell>
                        <CButton 
                          color="primary" 
                          active={true}
                          onClick={()=>{
                                  console.log(category);
                                  navigate('/Category/AddCategory',{
                                    state:category
                                  });
                          }}>
                              Edit
                        </CButton> 
                        <CButton color="link" active={true}
                          onClick={()=>{
                                  console.log(category);
                                  deleteCategories(category.id)
                          }}>
                              Delete
                        </CButton>   
                      </CTableDataCell>
                    </CTableRow>
                    )
                  })}
                  
                </CTableBody>}

              </CTable>}

              {!props.isCategory && movies && movies.length &&<CTable>
                
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Stars</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Released</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Runtime</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>

                {movies && movies.length &&<CTableBody>
                  
                  {movies.map((movie ,index)=>{
                    return(
                      <CTableRow>
                      <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                      <CTableDataCell>{movie?.title}</CTableDataCell>
                      <CTableDataCell>{movie?.stars}</CTableDataCell>
                      <CTableDataCell>{movie?.released}</CTableDataCell>
                      <CTableDataCell>{movie?.runtime}</CTableDataCell>

                      <CTableDataCell>
                        <CButton color="link" active={true}
                          onClick={()=>{
                                  navigate('/Movies/AddMovies',{
                                    state:movie
                                  });
                          }}>
                              Edit
                        </CButton> 

                        <CButton color="link" active={true}
                          onClick={()=>{
                                  deleteMovie(movie.id)
                          }}>
                              Delete
                        </CButton>   

                      </CTableDataCell>

                    </CTableRow>
                    )
                  })}
                  
                </CTableBody>}

              </CTable>}
              
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tables
