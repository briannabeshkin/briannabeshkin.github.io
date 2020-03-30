const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

for (let x=1; x < 6; x++) {

}

/* Wiring up the Darken/Lighten button */

function brightness() {
    const dark = btn.getAttribute('class');
    if (dark === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent('lighten');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
}
brightness();


