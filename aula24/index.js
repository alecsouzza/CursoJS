const hora = -1;

if ( hora < 12 && hora > 0 ) {
    console.log('Bom dia !');
} else if ( hora >=12 && hora < 18) {
    console.log('Boa tarde!');
}else if ( hora < 0) {  
    console.log('Hora invalida');
} else {
    console.log('Boa noite !');
}