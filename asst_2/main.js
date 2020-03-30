const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', 'xxx');
thumbBar.appendChild(newImage);

for (let x=1; x < 6; x++) {
toString(x);
const picture = 'pic' + x + '.jpg';
newImage.setAttribute('src', picture);
newImage.onclick = displayed-img.setAttribute('src','picture')
}

/* Wiring up the Darken/Lighten button */


const btntxt = btn.getAttribute('class');
if (btntxt === 'dark') {
    btn.onclick = function(){
        btn.setAttribute('class', 'light');
        btn.textContent ='Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    };
} 
if (btntxt === 'light') {
    btn.onclick = function(){
        btn.setAttribute('class', 'dark');
        btn.textContent ='Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    };
}