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