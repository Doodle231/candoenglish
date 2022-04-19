
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs} from "firebase/firestore"


    const firebaseConfig = {
        apiKey: "AIzaSyC8uZQu7mFSQrTmGS2DH_ayRl9Ga7kEl9E",
        authDomain: "candoenglish-3ee84.firebaseapp.com",
        projectId: "candoenglish-3ee84",
        storageBucket: "candoenglish-3ee84.appspot.com",
        messagingSenderId: "901983334361",
        appId: "1:901983334361:web:c58afc2ebbb658c348b3c8",
        measurementId: "G-T1KVTXP3GZ"
      };



const app = initializeApp(firebaseConfig);

const db = getFirestore()


const colRef = collection(db,"users")


getDocs(colRef)
    .then ((snapshot) =>{
        console.log(snapshot.docs)
    })














    const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
