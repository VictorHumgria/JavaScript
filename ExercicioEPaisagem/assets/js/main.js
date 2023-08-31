const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const altura = document.querySelector('#altura');
    const largura = document.querySelector('#largura');
    const inputLargura = Number(largura.value);
    const inputAltura = Number(altura.value);
    ePaisagem(inputAltura, inputLargura);
});
function ePaisagem(altura, largura){
    largura > altura ? setResultado(true) : setResultado(false);
};
function criaParagrafo (){
    const p = document.createElement('p');
    return p;
};
function setResultado(ff){
    const resultado = document.querySelector('#resultado');
    const p = criaParagrafo();
    p.innerHTML = ff;
    resultado.appendChild(p);
};