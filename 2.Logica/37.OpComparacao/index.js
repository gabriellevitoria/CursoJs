/*
Operadores de comparação

> maior
>= maior ou igual
< menor
<= menor ou igual
== igualdade (valor) *************** não recomentado
=== igualdade estrita (valor e tipo)
!= diferente  (valor) **************
!== diferente estrito (valor e tipo)

*/
const comp = 10 > 5;
console.log(10 > 5);

const compMaiorIgual = 10 >= 6; //retorna falso apenas quando o número for maior que dez
console.log(compMaiorIgual);

const menorQue = 10 < 11;
console.log(menorQue);

const menorIgual = 10 <= 12;
console.log(menorIgual);

let num1 = 10;
let num2 = 17;

console.log(num1 == num2)

texto = '10';

console.log( num1 == texto); //compara e afirma que são iguais, mesmo não sendo

console.log(num2 === texto) //afirma que são diferentes

