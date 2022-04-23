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

// store for quiz 
let QuizDefinitions = []

let numberOfCorrect = 0
let numberofIncorrect = 0 


 function quiz () {

  return {
  randomNumber: Math.floor(Math.random() * 6) ,
  smallRandom:Math.floor(Math.random() * 3) ,
  availableWords: [],



start (){

  this.initDisplays()
this.updateQuestion()
this.answerEventHandlers()

  
},

initialQuestion ()
{



},

updateQuestion ()
{
  this.randomNumber = Math.floor(Math.random() * 6) 
  console.log(this.randomNumber)
  
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
          numberOfCorrect += 1 
          this.updateQuestion()
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


      this.smallRandom = Math.floor(Math.random() * 3)
      console.log(this.smallRandom)
 
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


/// flashcard quiz 


