const elementos = [
    {tag: 'p', texto:'Frase 1'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}, 
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i=0; i<elementos.length; i++){
    let {tag, texto} = elementos[i];
    let elemento =document.createElement(tag);
    // elemento.innerHTML = texto;
 // let textoCriado = document.creatTextNode(text); // assim podemos criar uma NÓ de texto, e deveremos adicionar usando o comando tagCriada.appendChild(textoCriado);
    elemento.innerText = texto; // podemos usar o innerText por conta que ja sabemos que existe apenas texto na variável;
    div.appendChild(elemento);
}
container.appendChild(div);