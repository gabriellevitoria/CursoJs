/*console.log ('linha 0');
console.log ('linha 1');
console.log ('linha 2');
console.log ('linha 3');
console.log ('linha 4');
console.log ('linha 5');*/

/*dentro dos parênteses do for precisamos de 3 coisas:
    
    -variável de controle (i)
    -condição que para o laço
    -contador de incremento/decremento

    i = index, por isso usamos

    -podemos iniciar em qualquer contator
    -podemos mudar o passo

*/
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}
console.log('-------------------------');
console.log('Tabuada do 4');
for (let i = 4; i <=40; i+=4) {
    console.log(i)
}

console.log('-------------------------');
console.log('Decremento');
for (let i = 15; i >= 0; i-=5){
    console.log(i)
}

console.log('-------------------------');
console.log('Checando se o número é par');
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

console.log('-------------------------');
console.log('Outra forma');

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par)
}

console.log('-------------------------');
console.log('Percorrer o Array');

const frutas = ['Maça', 'Pera', 'Uva' ,'Laranja', 'Tomate',
'Morango' , 'Goiaba', 'Banana'];

for (let i = 0; i < frutas.length; i++){
    console.log(`índice ${i}`,frutas[i]);
}