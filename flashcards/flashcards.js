
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js"
import { onSnapshot,getFirestore, collection,  getDocs, addDoc, doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword, 
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js"


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
const auth = getAuth(app);
const user = auth.currentUser;


initializeApp(firebaseConfig)



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let definition = document.getElementsByClassName("definition")
let leftArrow = document.querySelector(".leftbutton")
let rightArrow = document.querySelector(".rightbutton")
const largeCards = document.getElementsByClassName("largeCard")
const title = document.getElementsByClassName("title")
const imageToDisplay = document.getElementsByClassName('imagebox2');
let subContainer = document.getElementsByClassName("subcontainer")
let question = document.querySelector(".question")
let quizActive = false; 
let quizResult = document.querySelector(".quizresult")
quizResult.style.display = "none"
let returnButton = document.querySelector(".returnbutton")


let badges = document.getElementsByClassName("badges")




// store for quiz 
let QuizDefinitions = []

  
  



/*



 
getDoc(docRef)
.then((doc) => {
sessionID.push(doc.data())
console.log(sessionID[0])
})




*/









 function quiz () {

  return {
  randomNumber: Math.floor(Math.random() * 6) ,
  smallRandom:Math.floor(Math.random() * 3) ,
  availableWords: [],
  correctAnswers:0,
  incorrectAnswers:0, 
  quizGrades: {
   chapter1:null, 
   chapter2:null, 
   chapter3:null, 
   chapter4:null, 
   chatter5:null, 
   chapter6:null, 
   chapter7:null, 
   chapter8:null, 
   chapter9:null, 
   chatter10:null, 
   chapter11:null, 
   chatter12:null, 


  },


start (){

  this.initDisplays()
this.updateQuestion()
this.answerEventHandlers()
this.displayQuizResult()
  
},

updateQuestion ()
{
  this.randomNumber = Math.floor(Math.random() * 6) 

  
  this.availableWords =  QuizDefinitions.filter(function (word){


   return word.available === "yes"
    
    })

    question.textContent = this.availableWords[this.randomNumber].vocab

    this.assignAnswersToButtons()
    
   


},



 initDisplays (){


    for (let i = 0; i < largeCards.length; i++){
  largeCards[i].style.display ="none"
  
    }
  
  
  let quiz = document.querySelector(".quiz")
  quiz.style.display ="block"
  
   leftArrow.style.display = "none"
   rightArrow.style.display = "none"
   
   for (let i = 0; i < imageToDisplay.length; i++){
    imageToDisplay[i].style.display = "none"
   
   }
  
   let answerButtons = document.getElementsByClassName("testbutton")
  for (let i = 0; i < answerButtons.length; i++){
    answerButtons[i].style.display = "block"
  
  
   }
  
     
  },

 
  answerEventHandlers (){

   
    
    const addAnswerClickHandlers = (index) => {
 
      document.getElementsByClassName("testbutton")[index].addEventListener('click', (e) => {
        if (e.target.id === question.textContent){
          
          this.correctAnswers += 1

          this.updateQuestion()
           
          this.displayQuizResult()
          QuizDefinitions[this.randomNumber].available ="no"
         
        
        } else {
          this.incorrectAnswers += 1 
          this.updateQuestion()
         this.displayQuizResult()
        
          QuizDefinitions[this.randomNumber].available ="no"
        }
    
            
      })
    }
    
    addAnswerClickHandlers(0)
    addAnswerClickHandlers(1)
    addAnswerClickHandlers(2)
    addAnswerClickHandlers(3)
    

      
  },

    assignAnswersToButtons (){

    
      let aButton = document.getElementsByClassName("testbutton")[0]
      let bButton = document.getElementsByClassName("testbutton")[1]
      let cButton = document.getElementsByClassName("testbutton")[2]
      let dButton = document.getElementsByClassName("testbutton")[3]


      this.smallRandom = Math.floor(Math.random() * 4)
     
 
    if (this.smallRandom === 4){

      aButton = document.getElementsByClassName("testbutton")[0]
      bButton = document.getElementsByClassName("testbutton")[1]
      cButton = document.getElementsByClassName("testbutton")[2]
      dButton = document.getElementsByClassName("testbutton")[3]
    
    }
    
    if (this.smallRandom === 3){

      aButton = document.getElementsByClassName("testbutton")[2]
      bButton = document.getElementsByClassName("testbutton")[3]
      cButton = document.getElementsByClassName("testbutton")[1]
      dButton = document.getElementsByClassName("testbutton")[0]
    
    }
    
    
    if (this.smallRandom === 2){

      aButton = document.getElementsByClassName("testbutton")[1]
      bButton = document.getElementsByClassName("testbutton")[3]
      cButton = document.getElementsByClassName("testbutton")[2]
      dButton = document.getElementsByClassName("testbutton")[0]
    }
    
    if (this.smallRandom === 1){

      aButton = document.getElementsByClassName("testbutton")[0]
      bButton = document.getElementsByClassName("testbutton")[1]
      cButton = document.getElementsByClassName("testbutton")[3]
      dButton = document.getElementsByClassName("testbutton")[2]
    }
    
    


let correctAnswer = this.availableWords[this.randomNumber].meaning


let randomAnswer = QuizDefinitions[8].meaning
let randomAnswer2 = QuizDefinitions[9].meaning
let randomAnswer3 = QuizDefinitions[10].meaning

aButton.textContent = correctAnswer
bButton.textContent = randomAnswer
cButton.textContent = randomAnswer2
dButton.textContent = randomAnswer3

let correctButton = this.availableWords[this.randomNumber].vocab
aButton.id = correctButton
bButton.id = QuizDefinitions[8].vocab
cButton.id = QuizDefinitions[9].vocab
dButton.id = QuizDefinitions[10].vocab

    },
  

 displayQuizResult (){

  console.log("correct " + this.correctAnswers)
  console.log("incorrect "+ this.incorrectAnswers)
 

   if (this.correctAnswers + this.incorrectAnswers === 5){
    
     quizResult.style.display = "block"
     
     let answerButtons = document.querySelector(".testbuttons")
     let quizHeader = document.querySelector(".quizheader")
     
     let correctText = document.querySelector(".correctnumber")
     let incorrectText = document.querySelector(".incorrectnumber")
     
     answerButtons.style.display = "none"
     question.style.display ="none"
     quizHeader.textContent = "Your quiz result is..."
     let totalAnswers = this.correctAnswers + this.incorrectAnswers
    
     correctText.textContent = this.correctAnswers + " / " + totalAnswers + " correct "
    
     let percent = parseInt(this.correctAnswers / totalAnswers *100)
   

     console.log(percent)
     let grade = document.querySelector(".grade")
     grade.style.display ="block"
     
     
     if (percent >= 90){
      grade.textContent = "A"
     }

     if (percent >= 80 && percent < 90 ){
       grade.textContent = "B"
     }

     if (percent >= 70 && percent < 80 ){
      grade.textContent = "C"
    }

    if (percent >= 60 && percent < 70 ){
      grade.textContent = "D"
    }

    if (percent <60 ){
      grade.textContent = "F"
    }
    
    this.quizGrades.chapter1 = grade.textContent
     console.log(this.quizGrades)
    
     badges[0].textContent = this.quizGrades.chapter1
    
  
     this.updateDisplays()
  }

},


   updateDisplays (){


    onAuthStateChanged(auth, (user) => {
    
    
      let startButton = document.getElementsByClassName("startbutton")[0]
      if (user) {
        console.log("logged in")
         this.sessionID = user.email
         startButton.style.backgroundColor = "green"
         const docRef = doc(db, "Users", user.email)
    
         updateDoc(docRef, {
           chapter1Grade:this.quizGrades.chapter1
           }).then(() =>{
           
           })
      }
      else {
       console.log("no user logged in")
       startButton.style.backgroundColor = "red";
      }
    });

    
   }

}

 }

const quiz1 = quiz()

//////////////////////////////////////////////////////////////



leftArrow.style.display ="none"
rightArrow.style.display ="none"

// clear out large card displays
for (let i = 0; i < largeCards.length; i++) {
    largeCards[i].id = i
     largeCards[i].style.display = "none"
   
   }

   const courselDisplay = (cardID) => {
    
    

  if (cardID > 11){
    quiz1.start()
    return
  }

    
    leftArrow.style.display ="block"
    rightArrow.style.display ="block"
    largeCards[cardID].style.display ="grid"
    
  
  


  
  const audioButton = document.getElementsByClassName("vocabaudio")
  
  
    
    let newPic = title[cardID].textContent
    let wordAndAudio = title[cardID].textContent



    function play(source) {
      
      let newDef = source.meanings[0].definitions[0].definition
      
      title[cardID].textContent

      definition[cardID].textContent = newDef

       let questionFormat = 
         {
         vocab:title[cardID].textContent,
         meaning:newDef,
         available: "yes",
       }
      
 
       QuizDefinitions.push(questionFormat)
     
    
      rightArrow.addEventListener('click', function(){
        definition[cardID].textContent = newDef
      })

      
      audioButton[cardID].addEventListener('click', () => {
  
        var audio = new Audio(""+ source.phonetics[0].audio + "");
      audio.play();
        
        })

    }


    
  
    let word = {
      apiKey: "cf24836904b630625a0cf302dfe09cac", 
       fetchword: function (word) {
         fetch
         ("https://api.dictionaryapi.dev/api/v2/entries/en/"+ word + ""
       )
       .then((response) => {
         if (!response.ok) {
           alert("No word found");
           throw new Error("No word found.");
         }
         return response.json();
       })
       .then((data) => play(data[0]));
    },
    
    }
    
    word.fetchword(wordAndAudio)
  
     async function displayImage () {
      let randomImage = await getNewImage();
      imageToDisplay[cardID].src = randomImage;
  
     }
     
     
   
  let increment = 0



  const nextImageButton = document.getElementsByClassName("nextimage")
  
  for (let i = 0; i < nextImageButton.length; i++) {

    nextImageButton[i].addEventListener('click', () => {
  
      increment ++ 
      
      displayNextImage()
      
        async function displayNextImage () {
          let randomImage = await getNextPic();
          imageToDisplay[cardID].src = randomImage;
          
         }
      
    
        async function getNextPic () {
        
          return fetch(imageURL)
            .then((response) => response.json())
            .then((data) => {
             return data.results[increment].urls.small
            });
        }
        
      });



  }

 
  
    const imageURL = "https://api.unsplash.com/search/photos?query="+ newPic +"&client_id=2RxezYczgkbQsXocwm29iQ88Br5M0YGGsEpQke_s3lM"
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.getElementsByClassName('imagebox2');
  
    rightArrow.addEventListener('click', () => {

      displayImage()
    });
  
    displayImage()
  
  async function getNewImage () {
    
      return fetch(imageURL)
        .then((response) => response.json())
        .then((data) => {
         return data.results[0].urls.small
        });
    }
  
     
  }


    const clearPreviousCard = (previousCard) =>{

  largeCards[previousCard].style.display = "none"

}




// loops through start buttons and displays cards

function displayClickedCard (cardID){
  let startButton = document.getElementsByClassName("startbutton")

  for (let i = 0; i < startButton.length; i++) {
  
  startButton[i].id = i

  // subContainer wraps all of the lesson cards
  
  let activeCard = 0 

  startButton[i].onclick = function (e) {
    
   
   
    subContainer[e.target.id].style.display ="block"
   
    // subContainer[1].style.display = "none"

  
  courselDisplay(activeCard)



  if (e.target.id == 1){
 
    
    subContainer[0].style.display ="none"
    //subContainer[1].style.display = "none"
  
    activeCard = 10
  
  courselDisplay(activeCard)
  }


  subContainer[0].style.display ="none"
   //subContainer[1].style.display = "none"
  
   leftArrow.style.display ="block"
   rightArrow.style.display ="block"
   
   // to update new image
   rightArrow.addEventListener('click', function(){

    activeCard ++;
    let previousCard = activeCard -1 
     

     
  
    
    courselDisplay(activeCard)
    
   

    
     clearPreviousCard(previousCard)

  })

  
  leftArrow.addEventListener('click', function(){

    activeCard --;
    let previousCard = activeCard +1 
     courselDisplay(activeCard)
     clearPreviousCard(previousCard)

  })

  
  }

}

}

displayClickedCard()


returnButton.addEventListener('click', function(){

  quizResult.style.display = "none"
  subContainer[0].style.display ="grid"


})

