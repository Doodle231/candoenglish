const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


/*
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
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

let leftArrow = document.querySelector(".leftbutton")
let rightArrow = document.getElementsByClassName("rightbutton")[0]

let mainWrapper = document.getElementsByClassName("mainwrapper")[0]

let levelA1 = document.getElementsByClassName("levelA1")[0]

levelA1.style.display = "none"


console.log(leftArrow)
leftArrow.addEventListener('click', function(){

  mainWrapper.style.display = "none"
  levelA1.style.display ="grid"

})

rightArrow.addEventListener('click', function(){

  mainWrapper.style.display ="block"

})



const generateA1Page = () => {



}