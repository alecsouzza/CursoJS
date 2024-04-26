const data = new Date ('2024-04-25');
let diaSemana = data.getDay() +1;
let diaSemanaTexto;

console.log (diaSemana);
diaSemanaTexto = stringDia(diaSemana);
console.log(diaSemanaTexto);

function stringDia (dia ) {
    switch ( dia) {
        case 0 :
            return diaSemanaTexto = 'Domingo';
                break;
    
        case 1 :
            return diaSemana = 'Segunda-Feira';
                break;
         
        case 2 :
            return diaSemana = 'Terça-Feira';
                break; 
                
        case 3 :
             return diaSemana = 'Quarta-Feira';
                 break;
                 
        case 4 :
            return diaSemana = 'Quinta-Feira' 
                break;
                
        case 5 :
            return diaSemana = 'Sexta-Feira';
                break;
                
        case 6 :
            return diaSemana = 'Sábado';
                break;
    
        default : 
        return diaSemana = '';       
    }
}