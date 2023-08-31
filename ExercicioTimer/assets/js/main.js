
function getTimeFromSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    }); 
}


const relogio = document.querySelector('#relogio');
const buttonIniciar = document.querySelector('#button-iniciar');
const buttonPausar = document.querySelector('#button-pausar');
const buttonZerar = document.querySelector('#button-zerar'); 
let segundos =0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
};

buttonIniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
buttonPausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
buttonZerar.addEventListener('click', function(event){
    segundos = 0;
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
});



