const numero = Number(prompt(`Digite um numero: `));
const titulo = document.getElementById ('numero-titulo');
const texto = document.getElementById ('texto');

titulo.innerHTML = numero;
texto.innerHTML += (`a raiz quadrada é ${numero ** (1/2)} <br>`);
texto.innerHTML += (`${numero} é inteiro : ${Number.isInteger(numero)} <br>`);
texto.innerHTML += (`É NaN : ${isNaN(numero)}<br>`);
texto.innerHTML += (`Arredondando pra baixo: ${Math.floor(numero)}<br>`);
texto.innerHTML += (`Arredondando pra cima: ${Math.ceil(numero)}<br>`);
texto.innerHTML += (`Com Duas casas decimais: ${numero.toFixed(2)}<br>`);
