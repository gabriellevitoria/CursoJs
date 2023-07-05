/*  
Valores primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) 

Valores COPIADOS

Podemos mudar o CONTEÚDO das variáveis, mas não o seu valor. */

console.log('---------------------------------------');
console.log('Valores Primitivos Imutáveis');
let a = 'A';
let b = a; //cópia valor de A para valor de B. Ambas são independentes.
console.log(a, b);

a = 'Outra coisa';  //alterando o valor 
console.log(a, b);

/*
Valores por referência (mutável) - array, object, function
Valores PASSADOS por REFERÊNCIA na memória
*/

console.log('---------------------------------------');
console.log('Valores por Referência Mutáveis');

let array = [1,2,3];
let arrayCopia = array; /*aponta para o mesmo local para a memória, portanto se altero o valor do Array 1
o valor de arrayCopia será afetado */
console.log(array, arrayCopia);

array.push(4);
console.log(array, arrayCopia);

arrayCopia.pop(4);
console.log(arrayCopia, array);

console.log('---------------------------------------');

const nome1 = {
    nome : 'Gabrielle',
    sobrenome: 'Vitória'
};

const nome2 = nome1;

console.log(nome2);
nome1.nome = 'Maria';
console.log(nome2);

//para não ter esse comportamento

const nome3 = {...nome1}; // com essa construção {...varivavel} fazemos uma cópia!

console.log(nome1);
nome1.nome = 'Gabriel'

console.log(nome1, nome3);
