import { useEffect, useState } from "react";
import Tables from "src/views/base/tables/Tables";
import { useNavigate } from 'react-router-dom';
import {collection, getDocs , addDoc , doc , deleteDoc , updateDoc} from "firebase/firestore"
import {db} from '../../../configuration/firebase';

import { CButton } from '@coreui/react';
const MovieList = () =>{
    const navigate = useNavigate();

    const [movies , setMovies ] = useState([]);
    useEffect(()=>{
        fetchMovies();
    },);

    const fetchMovies = async () =>{
        console.log("fetch movies");
        try{
            await getDocs(collection(db, 'movies')).then((querySnapshot)=>{
                const movies = querySnapshot.docs.map((doc) => ({...doc.data(),id:doc.id}));
                setMovies(movies);
            });
        }
        catch(error){
            console.log(error);
        }
    };

    const navigateToMovies = () =>{
        console.log("navigation movies");
        navigate('/Movies/AddMovies');
    }
    return (
        <>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            
                <CButton color="primary" active={true}
                    onClick={()=>{
                            navigateToMovies();
                    }}>
                    Add Movies
                </CButton>   
            </div>
            <br/>
            
            <Tables movieList={movies} isCategory={false}  />
        </>
    )
}

export default MovieList;