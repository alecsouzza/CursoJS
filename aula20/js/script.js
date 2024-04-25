const pessoas  = [] ;

function meuEscopo() {
 const form = document.querySelector('.form');
 let contador = 0;
 
 
 
 function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');   
 }

 function  cadastrarPessoa (nome , sobrenome , peso , altura ) {
   
   nome = document.querySelector('.nome');
   sobrenome= document.querySelector('.sobrenome');
   peso = document.querySelector('.peso');
   altura = document.querySelector('.altura');

    const pessoa = {
        nome : nome.value,
        sobrenome: sobrenome.value ,
        peso: peso.value ,
        altura : altura.value
    };

    pessoas.push(pessoa);
    console.log(pessoas);
 }

 function mudarResultado () { 
    const resultado = document.querySelector ('.resultado');
    resultado.innerHTML += (`nome : ${pessoas[contador].nome} <br> sobrenome : ${pessoas[contador].sobrenome} <br> peso : ${pessoas[contador].peso} <br> altura : ${pessoas[contador].altura} <br> <br>`);  

 }
function contar () {
    contador ++;
}

function limmparForm () {
    nome = document.querySelector('.nome');
    sobrenome= document.querySelector('.sobrenome');
    peso = document.querySelector('.peso');
    altura = document.querySelector('.altura');

    nome.value=(``);
    sobrenome.value=(``);
    peso.value=(``);
    altura.value=(``);
}
 form.addEventListener('submit' , recebeEventoForm) ;
 form.addEventListener('submit' , cadastrarPessoa );
 form.addEventListener('submit' , mudarResultado);
 form.addEventListener('submit' , contar) ;
 form.addEventListener('submit' , limmparForm) ;
 
}

meuEscopo() ;