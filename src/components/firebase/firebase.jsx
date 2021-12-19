import { collection, getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";



// Import the functions you need from the SDKs you need

import { addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-CPBZslFLGfLYdf1X4KQz1R_GBY1a0q4",
  authDomain: "halsey-ameghino.firebaseapp.com",
  projectId: "halsey-ameghino",
  storageBucket: "halsey-ameghino.appspot.com",
  messagingSenderId: "842499506682",
  appId: "1:842499506682:web:fd8c517c765b8889e26443"
};



// Initialize Firebase


 


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db