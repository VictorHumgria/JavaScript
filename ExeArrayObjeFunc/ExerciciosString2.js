let varA = 'A'; // b
let varB = 'B'; // c 
let varC = 'C'; // a

let temp;
temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);