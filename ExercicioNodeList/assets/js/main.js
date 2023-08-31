const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor; 
for(p of ps){
    p.style.backgroundColor = backgroundBody;
    p.style.color = 'white';
}