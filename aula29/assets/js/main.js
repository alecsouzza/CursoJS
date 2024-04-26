let data = new Date();
// Data 
let ano = data.getFullYear();
let mes = data.getMonth() + 1 ;
let dia = data.getDate();
let diaSemana = data.getDay();
let diaString = stringDia (diaSemana);
let mesString = stringMes(mes);
// -------------------------------

// Horas 
let hora = data.getHours();
let minutos = data.getMinutes();

// formatando Mes 
mes = mes >= 10 ? mes : '0' + mes;
dia = dia >= 10 ? dia : '0' + dia;
// Formatando Hora 
hora = hora >=10 ? hora : '0' + hora;
minutos = minutos >=10 ? minutos : '0'+ minutos;
 // ----------------------------------

 let relogio = document.querySelector(".container"); // recebendo a classe coontainer 
 // ------------------------------------------------

 // alterando o conteúdo da classe container 

 relogio.innerHTML = (`${diaString}, ${dia} de ${mesString} de ${ano} <br>`);
 relogio.innerHTML += (`${hora}:${minutos}`);

 // função para formartar o dia da semana 

function stringDia (dia ) {
    switch ( dia) {
        case 0 :
            return dia = 'Domingo';
                break;
    
        case 1 :
            return dia = 'Segunda-Feira';
                break;
         
        case 2 :
            return dia = 'Terça-Feira';
                break; 
                
        case 3 :
             return dia = 'Quarta-Feira';
                 break;
                 
        case 4 :
            return dia = 'Quinta-Feira' 
                break;
                
        case 5 :
            return dia = 'Sexta-Feira';
                break;
                
        case 6 :
            return dia = 'Sábado';
                break;
    
        default : 
        return diaSemana = '';       
    }
}    

// função para formatar o mês.
function stringMes (mes) {
    switch (mes) {
        
        case 1 :
             return mes = 'Janeiro';
                break ;

         case 2 :
              return mes = 'Fevereiro';
                 break ;   
                 
        case 3 :
            return mes = 'Março';
                break ;
                
        case 4 :
            return mes = 'Abril';
                break;
                
        case 5 :
            return mes = 'Maio';
                break;
                
        case 6 :
            return mes = 'Junho';
                break;

        case 7 :
            return mes = 'Julho';
                break ;

        case 8 :
            return mes = 'Agosto';
                break;
                
        case 9:
            return mes = 'Setembro';
                break;
                
        case 10 :
            return mes = 'Outubro';
                break;
                
        case 11:
            return mes = 'Novembro';
                break;
                
        case 12:
            return mes = 'Dezembro';
                break;           

    }
}