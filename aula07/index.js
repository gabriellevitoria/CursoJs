//Operadores Aritiméticos + | - | / | * | ** | % |

const num1 = 2 ;
const num2 = 10;

console.log(num1+num2); // caso de adição

const num3 = '5'
console.log(num3 + num2); //caso de concatenação

//potenciação **
console.log(num1 ** num2);

//Mod -> resto da divisão
console.log (num1 % num2);

/*Existe uma ordem de prioridade entre os operadores, sendo ela : 
() | ** |
 * | / | %|
 + | -| 


*/

console.log('\n')

//Operador de incremento 

let contador = 2;
contador ++; //cada vez que eu chamo ele modifica a variável
console.log('contador = ' , contador)
contador++;
console.log(contador)
contador++;
console.log(contador)
contador++;
console.log(contador)

console.log('\n')



//Operador de decremento 

let contador2 = 10;
contador2 --;

console.log ('contador =', contador2)

/*Função ParseInt e ParseFloat
    é usada para converter o tipo daquela variável para int ou float
*/

console.log('\n')

const num4 = 20;
const num5 = parseInt('5');
console.log (num4 + num5)

const num6 = 10;
const num7 = parseFloat ('2.5')
console.log (num6 + num7)

