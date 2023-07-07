//supondo que temos um sistema que fala bom dia pro usuário a partir de um determinado horário

const hora = 50;

//If
if (hora < 12) {
    console.log('bom dia!');
} 

if (hora <= 12) {
    console.log('bom dia!');
} 

if (hora < 10) {
    console.log('bom dia!');
} 

//Else If

/* 0 - 11 - Bom dia
   12 - 17 - Boa tarde
   18 - 23 - Boa noite */

console.log('------------------------------')
console.log( 'Else If');

if (hora >= 0 && hora <=11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17 ){
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <=23){
    console.log('Boa Noite')
} else {
    console.log('Olá')
}


const tenhoDinheiro = true;

if (tenhoDinheiro) {
    console.log('Vou gastar com o Mozi <3');
} else {
    console.log('Não vou gastar com o Mozi :c');
}


//Parte 2

const numero = 10;

//quero saber se esse número está ente 0-20..

if (numero >= 0 && numero <= 5 ) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 20 && numero <= 10){
    console.log('O número está entre 10 e 20.')
} else {
    console.log('O número NÃO está entre 0 e 20.')
}
