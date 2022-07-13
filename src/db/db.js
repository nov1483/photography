import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaumioB7OQwn9fk5JfKjuqb9laGYSPduY",
  authDomain: "photography-85902.firebaseapp.com",
  projectId: "photography-85902",
  storageBucket: "photography-85902.appspot.com",
  messagingSenderId: "854961818780",
  appId: "1:854961818780:web:7c699ccc9f158690347159",
  measurementId: "G-6P96S57ZFK"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;