let a = 'a'; //b
let b = 'b'; //c
let c = 'c'; //a

const letras = [b, c, a];
[a, b, c] = letras; /*estamos "criando variáveis", mas como elas já existem
estamos modificando seus valores*/

console.log(a, b, c);


