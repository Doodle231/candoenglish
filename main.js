











const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let mainWrapper = document.getElementsByClassName("mainwrapper")[0]
const largeCards = document.getElementsByClassName("largeCard")
const title = document.getElementsByClassName("title")

let leftArrow = document.querySelector(".leftbutton")
let rightArrow = document.querySelector(".rightbutton")
let testButton = document.querySelector(".test")
let levelA1 = document.getElementsByClassName("levelA1")[0]
let levelA2 = document.querySelector(".levelA2")

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
levelA2.style.display = "none"


testButton.addEventListener('click', function(){
mainWrapper.style.display ="none"
levelA1.style.display ="grid"

})



const courselDisplay = (cardID) => {


  largeCards[cardID].style.display ="grid"
  
  let newPic = title[cardID].textContent

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

let startButton = document.getElementsByClassName("startbutton")


// loops through start buttons and displays cards
for (let i = 0; i < startButton.length; i++) {

  startButton[i].id = i

  // subContainer wraps all of the lesson cards
  let subContainer = document.getElementsByClassName("subcontainer")
  let activeCard = 0 

  startButton[i].onclick = function (e) {

  if (e.target.id == 0){

    levelA1.style.display= "block"
    levelA2.style.display = "none"
    
    subContainer[0].style.display ="none"
    subContainer[1].style.display = "none"

 
  
  courselDisplay(activeCard)


  }


  if (e.target.id == 1){
 
    levelA1.style.display= "none"
    levelA2.style.display = "block"
    
    subContainer[0].style.display ="none"
    subContainer[1].style.display = "none"
  
    activeCard = 10
  
  courselDisplay(activeCard)
  }


  subContainer[0].style.display ="none"
   subContainer[1].style.display = "none"
  
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