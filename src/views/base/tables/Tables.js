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
} from '@coreui/react'
import { DocsExample } from 'src/components'
import {db} from '../../../configuration/firebase';
import {collection, getDocs , setDoc , doc} from "firebase/firestore"

const Tables = () => {
  const [categories, setCategories] = useState();
  useEffect(()=>{

    fetchCategories();

  },[]);

  const fetchCategories = async () =>{
    console.log("categories");

    try{
      await getDocs(collection(db, 'categories')).then((querySnapshot)=>{
          const categories = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}))
          console.log({categories:categories}); 
      });
    }
    catch(error){
        console.log(error);
    }

  }
  const fetchMovies = async() =>{
    console.log("fetching movies");
    try{
      await getDocs(collection(db, 'popularMovies')).then((querySnapshot)=>{
          const latestPopularMovie = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}))
          console.log({latestPopularMovie:latestPopularMovie}); 
      });
    }
    catch(error){
        console.log(error);
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>
            <DocsExample href="components/table">
              <CTable>
                
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Released</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Runtime</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Stars</CTableHeaderCell>

                  </CTableRow>
                </CTableHead>

                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Markww</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  
                </CTableBody>

              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Tables
