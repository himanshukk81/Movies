import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBuQMPxnZU4_ndey6z8HcAhmCq8EWTY2mY",
    authDomain: "midnightmovies-172cd.firebaseapp.com",
    projectId: "midnightmovies-172cd",
    storageBucket: "midnightmovies-172cd.appspot.com",
    messagingSenderId: "1029441812049",
    appId: "1:1029441812049:web:567458304e8209f34baa70",
    measurementId: "G-D953DRM6LF"
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
