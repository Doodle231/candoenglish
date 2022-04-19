
import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs,addDoc } from "firebase/firestore"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth"


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


      const auth = getAuth(app);
      const user = auth.currentUser;
      const db = getFirestore()
      const colRef = collection(db,"Users")

      // get data from database
      async function getCities(db) {
        const citiesCol = collection(db, 'Users');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
       console.log(cityList[1].Age)
      }

    


      
      // add new user at signup

      const signupForm = document.querySelector(".signupp")
       signupForm.addEventListener('submit',(e) =>{
           e.preventDefault()
            const email = signupForm.email.value
            const password = signupForm.password.value

           createUserWithEmailAndPassword(auth,email, password)
           .then((cred)=> {
             const user = cred.user
             console.log(user)
             addDoc(colRef, {

              Name:user.email,
              Trophy1:false, 
              Trophy2:false,
        

              })
             
             signupForm.reset()
           })
           .catch((err) =>{
               
            console.log(err.message)
               alert("password should be at least 6 characters")
           })
       })


    
      function displayLogs (){
          console.log("display running")
        if (user !== null) {
        user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    }

         // signin and out 

         let logOutButton = document.querySelector(".logoutbutton")
       
         logOutButton.addEventListener('click',(e) =>{
             e.preventDefault()
             signOut(auth)
             .then(() =>{

            console.log("the user signed out")

             })
             .catch((err) => {
               console.log(err.message)
             })
         })



        let logIn = document.querySelector(".login")
       
         logIn.addEventListener('click',(e) =>{
             e.preventDefault()

          const email = logIn.email.value
          const password = logIn.password.value

          signInWithEmailAndPassword(auth,email, password)
               .then((cred) =>{
                   console.log("user logged in")
                })
                .catch((err) =>{

               console.log(err.message)

                })
         })

    ///////////////////////////////////////////





