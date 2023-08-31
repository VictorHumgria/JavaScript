const num =Number(prompt('Digite o nuemro desejado: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = `<p>Seu número é: ${num}</p>`;

texto.innerHTML = ' ';
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)} </p>`;
texto.innerHTML += `<p>É NaN:${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredonda para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredonda para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;


