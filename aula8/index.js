/* Alex Souza tem 25 anos , pesa 77 kg 
tem 1,75 de altura e seu IMC é de  25,5556565 

Alex souza nasceu em 1998
*/

const nome = 'Alex';
const sobrenome = ' de Souza Souza';
const idade = 26 ;
const peso = 77 ;
const altura = 1.72 ;
let imc = peso / (altura * altura) ;
let anoNascimento  = 2024 - idade ; 

console.log(`${nome}${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome}${sobrenome} nasceu em ${anoNascimento}.`);