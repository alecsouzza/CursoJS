// algoritimo de busca de  nomes em uma lista 

let lista = ['dayane' , 'heloane' , 'juliana', 'Adriano' , 'Alex' , 'joão'];

let contador = 0 ;

for ( let i of lista ) {

    
    
    if ( i == 'Alex') {
        console.log(`nome encontrado:${i}`);
        console.log(`na posição ${contador}`);

        break;
    }
    contador++;

}