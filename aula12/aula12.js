let varA = 'A'; // B
let varB = 'B'; // C 
let varC = 'C'; // A 

let tempo = varA;
varA = varB ;
varB = varC;
varC=tempo;

console.log(varA, varB, varC);
