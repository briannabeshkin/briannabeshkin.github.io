const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


let imgs = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Looping through images */
for (i = 0; i < imgs.length; i++) {
document.querySelector('.thumb-bar').innerHTML += "<img src='" + imgs[i] + "' class='images'></img>";
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