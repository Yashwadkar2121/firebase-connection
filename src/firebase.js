import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9_Q9ZMzB8C5P7MEgsjVWyOGj5g9xtRl0",
  authDomain: "clone-master-4bcc8.firebaseapp.com",
  projectId: "clone-master-4bcc8",
  storageBucket: "clone-master-4bcc8.appspot.com",
  messagingSenderId: "293865299219",
  appId: "1:293865299219:web:21126ebf263bd1f1534ee6",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// firebase -
// ? npm install firebase first install
// ? paste firebase.js file
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD9_Q9ZMzB8C5P7MEgsjVWyOGj5g9xtRl0",
//   authDomain: "clone-master-4bcc8.firebaseapp.com",
//   projectId: "clone-master-4bcc8",
//   storageBucket: "clone-master-4bcc8.appspot.com",
//   messagingSenderId: "293865299219",
//   appId: "1:293865299219:web:21126ebf263bd1f1534ee6"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
