









/*

const title = document.getElementsByClassName("title")
  

  



export let audioAPI = {
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

// initial 
 export async function displayImage () {
  let randomImage = await getNewImage();
  imageToDisplay[cardID].src = randomImage;

 }


 // cycle through images
 export async function displayNextImage () {
  let randomImage = await getNextPic();
  imageToDisplay[cardID].src = randomImage;

 }



 // to cycle through the different images
export async function getNextPic () {
  
  let newPic = title[cardID].textContent
  const imageURL = "https://api.unsplash.com/search/photos?query="+ newPic +"&client_id=2RxezYczgkbQsXocwm29iQ88Br5M0YGGsEpQke_s3lM"
  return fetch(imageURL)
    .then((response) => response.json())
    .then((data) => {
     return data.results[increment].urls.small
    });
}

// for initial image
export async function getNewImage () {
  let newPic = title[cardID].textContent
  const imageURL = "https://api.unsplash.com/search/photos?query="+ newPic +"&client_id=2RxezYczgkbQsXocwm29iQ88Br5M0YGGsEpQke_s3lM"
  return fetch(imageURL)
    .then((response) => response.json())
    .then((data) => {
     return data.results[0].urls.small
    });
}

*/