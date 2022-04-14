const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let mainWrapper = document.getElementsByClassName("mainwrapper")[0]
const largeCards = document.getElementsByClassName("largeCard")
let leftArrow = document.querySelector(".leftbutton")
let rightArrow = document.querySelector(".rightbutton")
let testButton = document.querySelector(".test")
let levelA1 = document.getElementsByClassName("levelA1")[0]


// set up default arrows 
leftArrow.style.display ="none"
rightArrow.style.display ='none'


// clear out large card displays
for (let i = 0; i < largeCards.length; i++) {
 largeCards[i].id = i
  largeCards[i].style.display = "none"

}




toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


//  Default main screen settings
levelA1.style.display = "none"


testButton.addEventListener('click', function(){
mainWrapper.style.display ="none"
levelA1.style.display ="grid"

})






const courselDisplay = (cardID) => {


  largeCards[cardID].style.display ="block"
  
  }
  
const clearPreviousCard = (previousCard) =>{

  largeCards[previousCard].style.display = "none"

}

let startButton = document.getElementsByClassName("startbutton")


// loops through start buttons and displays cards
for (let i = 0; i < startButton.length; i++) {

  startButton[i].id = i

startButton[i].onclick = function (e) {
  
  
  // subContainer wraps all of the lesson cards
  let subContainer = document.querySelector(".subcontainer")
  let activeCard = 0 
  
  subContainer.style.display = "none"
  
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



 

















/*


const requestUrl =
      'https://api.unsplash.com/search/photos?query=yard&client_id=2RxezYczgkbQsXocwm29iQ88Br5M0YGGsEpQke_s3lM';
    const getImagesButton = document.querySelector('.getImagesButton');
    const imageToDisplay = document.querySelector('.imageToDisplay');

    getImagesButton.addEventListener('click', async () => {
    
      let randomImage = await getNewImage();
      imageToDisplay.src = randomImage;
    });

    async function getNewImage() {
    
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          let image = data.results[0];
          return image.urls.small;
        });
    }


*/ 


/*
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
   .then((data) => console.log(data));
},

}

word.fetchword("chair")

*/