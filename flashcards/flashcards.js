const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

let leftArrow = document.querySelector(".leftbutton")
let rightArrow = document.querySelector(".rightbutton")
const largeCards = document.getElementsByClassName("largeCard")
const title = document.getElementsByClassName("title")

// clear out large card displays
for (let i = 0; i < largeCards.length; i++) {
    largeCards[i].id = i
     largeCards[i].style.display = "none"
   
   }

   const courselDisplay = (cardID) => {

    largeCards[cardID].style.display ="grid"
    
  if (cardID === 12){
    launchQuiz()
    return
  }
  
  const audioButton = document.getElementsByClassName("vocabaudio")
  
  audioButton[cardID].addEventListener('click', () => {
  
  word.fetchword(newAudio)
  
  })
  
    let newPic = title[cardID].textContent
    let newAudio = title[cardID].textContent
  
    function play(source) {
      var audio = new Audio(""+ source + "");
      audio.play();
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
       .then((data) => play(data[0].phonetics[0].audio));
    },
    
    }
    
    word.fetchword(newAudio)
  
     async function displayImage () {
      let randomImage = await getNewImage();
      imageToDisplay[cardID].src = randomImage;
  
     }
     const nextImageButton = document.querySelector(".nextimage")
   
  let increment = 0
  nextImageButton.addEventListener('click', () => {
  
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

function displayClickedCard (){
  let startButton = document.getElementsByClassName("startbutton")

  for (let i = 0; i < startButton.length; i++) {
  
  startButton[i].id = i

  // subContainer wraps all of the lesson cards
  let subContainer = document.getElementsByClassName("subcontainer")
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

function launchQuiz(){
  console.log("hey")
}



