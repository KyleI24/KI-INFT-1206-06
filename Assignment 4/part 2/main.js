const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'a human eye',
    'pic2.jpg' : 'a rock shaped in a wave',
    'pic3.jpg' : 'purple and white flowers',
    'pic4.jpg' : 'drawings of a tomb',
    'pic5.jpg' : 'an insect with wings'
  }

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
