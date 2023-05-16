// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAODddj654J4e6VeS8lwesH6w1sf-GUoeM",
    authDomain: "lifelog-c92bb.firebaseapp.com",
    projectId: "lifelog-c92bb",
    storageBucket: "lifelog-c92bb.appspot.com",
    messagingSenderId: "708194573940",
    appId: "1:708194573940:web:08f94aba7e91c2b4b6bb21",
    measurementId: "G-VY2J7629N2"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
//
// 꼭 이렇게 해야하는 건 아니니까 편한대로 해당 스크립트에서 import해서 사용해도 된다
export { firebaseAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };