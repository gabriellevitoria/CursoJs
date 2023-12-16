            //   0  1  2  3  4  5  6  7  8       INDICE
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];    //VALOR

/*const primeiroNumero = numeros[0];
console.log(primeiroNumero); //1 */

/*const [um, dois, três, ...resto] = numeros; 
//estamos pegando os números de índice 0 e 1

console.log(um, dois, três);
console.log("resto = ", resto);*/

/*para pular alguns valores que não queremos incluir 
usamos espaços vazios*/

const [um, , três, , cinco, , sete] = numeros;
console.log(um, três, cinco, sete); 

//                             0         1          2
//                          0  1 2    0  1 2    0  1  2
const arrayEncadeado = [   [1, 2, 3],[4, 5, 6],[7, 8, 9] ]

console.log(arrayEncadeado [1][2]);

/*a parte complexa é fazer uma atribuição via desetruturação 
baseado nesse array

é mais complexo porque tivemos que analisar e fazer a contagem
manualmente
*/

const [,[,, seis]] = arrayEncadeado;
console.log(seis)

/* o processo fica mais fácil quando dividimos os níveis das listas
e atribuimos variáveis a eles
*/ 

const [lista1, lista2, lista3] = arrayEncadeado;
console.log(lista3);
console.log(lista2[1]);