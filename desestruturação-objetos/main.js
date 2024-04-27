const pessoa = {
    nome : 'Alex',
    sobrenome : 'Souza',
    idade: 25 ,
    endereco: {
        rua : 'Av francisco de Melo parente',
        numero : 506 ,
    }
} ;

const { nome:teste , sobrenome} = pessoa;

console.log(teste);