const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

for (x=1; x < 6; x++) {
    loop(x);
}

function loop(src) {
    thumBar = document.querySelector('.thumb-bar').write('pic' + src);
    newImage.onclick() 
}
/* Wiring up the Darken/Lighten button */
function className() {
    const cl = btn.getAttribute('class');
    if (cl === 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerHTML('lighten');
        document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
}