import { initializeApp } from "firebase/app";

import {getAuth,
        createUserWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,
        doc,
        setDoc,
        getDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCS5hCF2nukt5B_VsR9JR9gHVuhvCydqUo",
    authDomain: "cab-booking-a5b47.firebaseapp.com",
    projectId: "cab-booking-a5b47",
    storageBucket: "cab-booking-a5b47.appspot.com",
    messagingSenderId: "882044014532",
    appId: "1:882044014532:web:bdf7e300485f97cc345e91",
    measurementId: "G-RHJ5K5LFDT"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInformation={}) =>{
    if(!userAuth) return ;
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    
    if(!userSnapShot.exists()){
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try{
          await setDoc(userDocRef,{
            displayName,
            email,
            createdAt,
            ...additionalInformation
          });
      }catch(error){
        console.log("error occured during document creation",error.message);
      }

    return userDocRef;
    }
  }

  export const createAuthUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
  }




  