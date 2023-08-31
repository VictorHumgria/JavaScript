// const h1 = document.querySelector('.container #resultado');
// const datta = new Date();
// const aa = datta.getDate();
// // primeira maneira.
// function getNomeMes(data) {
//     switch (data.getMonth()) {
//         case 0:
//             return 'Janeiro';
//         case 1:
//             return 'Fevereiro';
//         case 2:
//             return 'Março';
//         case 3:
//             return 'Abril';
//         case 4:
//             return 'Maio';
//         case 5:
//             return 'Junho';
//         case 6:
//             return 'Julho';
//         case 7:
//             return 'Agosto';
//         case 8:
//             return 'Setembro';
//         case 9:
//             return 'Outubro';
//         case 10:
//             return 'Novembro';
//         case 11:
//             return 'Dezembro';
//     }
// }
// function nomeDiaSemana(data) {
//     switch (data.getDay()) {
//         case 0:
//             return 'Domingo';
//         case 1:
//             return 'Segunda-feira';
//         case 2:
//             return 'Terça-feira';
//         case 3:
//             return 'Quarta-feira';
//         case 4:
//             return 'Quinta-feira';
//         case 5:
//             return 'Sexta-feira';
//         case 6:
//             return 'Sábado';
//     }
// }
// function zeroMinutes(num){
//     return num >= 10 ? num : `0${num}`;
// }
// function criarData(data) {
//     return `${nomeDiaSemana(data)}, ${data.getDate()} de ${getNomeMes(data)} de ${data.getFullYear()} ${data.getHours()}:${zeroMinutes(data.getMinutes())} `;
// }

// h1.innerHTML = criarData(datta);

//*******************************************SEGUNDA MANEIRA************************************************* */
// const h1 = document.querySelector('.container #resultado');
// const datta = new Date();
// const opcioes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = datta.toLocaleDateString('pt-BR', opcioes);

//*******************************************TERCEIRA MANEIRA************************************************* */

const h1 = document.querySelector('.container #resultado');
const datta = new Date();
const aa = datta.getDate();
// primeira maneira.
function getNomeMes(mes) {
    const meses = ['janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro','Novembro', 'Dezembro'];
    return meses[mes];  
}
function nomeDiaSemana(diaSemana) {
    const diasSemana = ['Domingo','Segunda', 'Terça', 'Quarta', "Quinta", "Sexta", "Sabado"];
    return diasSemana[diaSemana];
}
function zeroMinutes(num){
    return num >= 10 ? num : `0${num}`;
}
function criarData(data) {
    return `${nomeDiaSemana(data)}, ${data.getDate()} de ${getNomeMes(data)} de ${data.getFullYear()} ${data.getHours()}:${zeroMinutes(data.getMinutes())} `;
}

h1.innerHTML = criarData(datta);
