
import { initializeApp } from 'firebase/app';
import { onSnapshot,getFirestore, collection,  getDocs, addDoc, doc, getDoc, updateDoc, setDoc} from "firebase/firestore"
                                             
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword, 
    onAuthStateChanged
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

      initializeApp(firebaseConfig)
      const app = initializeApp(firebaseConfig);

    const databaseButton = document.querySelector(".database")
    
      let welcomeText = document.querySelector(".welcome")


      const auth = getAuth(app);
      const user = auth.currentUser;
      const db = getFirestore()
      const colRef = collection(db,"Users")


      export const sessionUserInfo = []
   

    

     /*
      getDocs(colRef)
      .then ((snapshot) =>{

          snapshot.docs.forEach((doc) => {
          
           sessionUserInfo.push({...doc.data(), id:doc.id})
           console.log(sessionUserInfo)
      })
      
      

    })
*/
    
      databaseButton.addEventListener('click', () => {

      

      })
    


/*
     



   
 

  */



  






  /*

    updateDoc(docRef, {
      Trophy1:true
     })
      .then(() =>{

     
    })

*/
   
/*
    onSnapshot(colRef , (snapshot) =>{
      let users = []
      snapshot.docs.forEach((doc) =>{
      users.push({... doc.data(), id:doc.id})
      })
      console.log(users)
    })
    */
   

///updateDoc()
   
      /*
      async function getCities(db) {
        const citiesCol = collection(db, 'Users');
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList
      }

    getCities()




*/



     

      const signupForm = document.querySelector(".signupp")
      console.log(signupForm)


       signupForm.addEventListener('submit',(e) =>{
           e.preventDefault()
            const email = signupForm.email.value
            const password = signupForm.password.value
           
           createUserWithEmailAndPassword(auth,email, password)
           .then((cred)=> {
         
            const newUser = cred.user
             console.log(newUser)
             setDoc(doc(colRef, email),{

              Name:newUser.email,
              flashcardgrades:{
                chapter1:null, 
                chapter2:null, 
                chaper3:null,
                chapter4:null, 
                chapter5:null, 
                chaper6:null,
                chapter7:null, 
                chapter8:null, 
                chaper9:null,
                chapter10:null, 
                chapter11:null, 
                chaper12:null,
              
              },


              })
             
               
              


             signupForm.reset()
             welcomeText.textContent = "welcome " + newUser.email
             
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


         console.log("running")



        let logIn = document.querySelector(".login")
        
         logIn.addEventListener('click',(e) =>{
             e.preventDefault()

          const email = logIn.email.value
          const password = logIn.password.value
           
          signInWithEmailAndPassword(auth,email, password)
               .then((cred) =>{
                   welcomeText.textContent = "Hello " + email
                   //console.log(auth.currentUser)
                   const docRef = doc(db, "Users", email)
                   

                  
                   getDoc(docRef)
                   .then((doc) => {
                   sessionUserInfo.push(doc.data())
                   console.log(sessionUserInfo[0].flashcardgrades)
                   })

                })
                .catch((err) =>{

               console.log(err.message)

                })
         })

         onAuthStateChanged(auth, (user) => {
          if (user) {
            let thisUser = []
           thisUser.push(user.email)
           console.log(thisUser)
           
          }
          else {
            
          }
        });

     