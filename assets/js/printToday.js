
//Digital Clock
let date = new Date();
let formatDate = date.toDateString();
let month = date.getMonth();
let day = date.getDate();

let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

//Efeméride

var message;
var nada = 
[
    //add nossos aniversários, no final
    [0, 26, 'Hoje é meu aniversário!'],
    [1, 4   , 'Dia da libertação nacional'],
    [1, 16, 'Carnaval'],
    [2, 8, 'dia internacional da mulher'],
    [2, 23, 'Dia da libertação da África Austral'],
    [2, 25, 'Feliz aniversário, Gregório Francico, meu criador!'],
    [3, 2, 'Sexta-Feira santa'],
    [3, 4, 'Dia da Paz'],
    [4, 2, 'Dia do Trabalhador'],
    [4, 7, 'Feliz aniversário, Jelsom Mita, meu criador!']
];
var i = 0;
//Dia internacional da mulher
/*if(month == 0 && day == 23)
{ 
    message = "Dia internacional da mulher";
    document.getElementById('message').innerText = message;
}*/


while(nada[i][0] == month && nada[i][1] == day && i < nada.length )
{
    message = (nada[i][2]);
    document.getElementById('message').innerText = message;
    i++;
}