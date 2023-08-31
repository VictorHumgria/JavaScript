const form = document.querySelector('#form');
form.addEventListener('submit', function(evento) {
    evento.preventDefault();  // funcao para parar o envio.
    const inputNum1 = evento.target.querySelector('#numero01');
    const inputNum2 = evento.target.querySelector('#numero02');
    const num1 = Number(inputNum1.value);
    const num2 = Number(inputNum2.value);
    maiorNum(num1, num2);
});

function maiorNum(num1 , num2){
    if(num1 > num2)        setResultado(num1, 1);
    else if(num2 > num1)   setResultado(num2, 2);
    else if(num1 === num2) setResultado(num1, 0);
};
function setResultado(num, index){
    const resultado = document.querySelector('#resultado');
    const p = criaP();
    let msg;
    if(index !== 0){
        msg = `O maior número é ${num} o ${index} inserido.`;
       p.innerHTML = msg;
    }else{
        msg = 'Os números são iguais.';
        p.innerHTML = msg;
    }
    resultado.appendChild(p);
};
function criaP (){
    const p = document.createElement('p');
    return p;
};
