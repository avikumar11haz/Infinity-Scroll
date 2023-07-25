const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = "m9Pw_CbUu-DONcmZ-JjfWIhihNNPeeblZUY3Y42Tv_E";
const apuUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//create elements for links & photos, add to DOM
function displayPhotos() {
  //Runs function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    //create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    //put <img> inside <a> , then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apuUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
