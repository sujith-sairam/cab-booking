import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyCS5hCF2nukt5B_VsR9JR9gHVuhvCydqUo",
    authDomain: "cab-booking-a5b47.firebaseapp.com",
    projectId: "cab-booking-a5b47",
    storageBucket: "cab-booking-a5b47.appspot.com",
    messagingSenderId: "882044014532",
    appId: "1:882044014532:web:bdf7e300485f97cc345e91",
    measurementId: "G-RHJ5K5LFDT"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  