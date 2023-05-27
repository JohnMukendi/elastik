// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
import {getFirestore,collection,getDocs} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIAHDhq5uHaBCf9f3Y0PyKJZLFVto8eyE",
  authDomain: "elastik-2c70a.firebaseapp.com",
  projectId: "elastik-2c70a",
  storageBucket: "elastik-2c70a.appspot.com",
  messagingSenderId: "251854992366",
  appId: "1:251854992366:web:713d18310f7413df2f14ff",
  measurementId: "G-YZSDFF569M"
};

// Initialize Firebase
export const useFireBase = ()=>{
    const [app,setApp] = useState({})
    const [analytics,setAnalytics] = useState({})
    const [db,setDb] = useState({})
    useEffect(()=>{
        const firebaseApp = initializeApp(firebaseConfig);
        const firebaseAnalytics = getAnalytics(firebaseApp);
        const firebaseDb = getFirestore(firebaseApp)

        setApp(firebaseApp)
        setAnalytics(firebaseAnalytics)
        setDb(firebaseDb)
    },[])
return {app,analytics,db}
}
