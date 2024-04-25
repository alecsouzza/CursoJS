function criaPessoa ( nome , sobreNome , idade ) {
    let objeto = { nome , sobreNome , idade} ;
    return objeto ;
}

const pessoa1 = criaPessoa('alex', 'souza', 25 ) ;
const pessoa2 = criaPessoa ('Bia' , 'Araujo' , 22);

console.log (pessoa1.sobreNome);