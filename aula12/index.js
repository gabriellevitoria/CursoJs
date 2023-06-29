//Mais sobre numbers 
let num1 = 1; //number
let num2 = 2.5; //number

console.log('-------------------------------------------');
console.log('Variáveis na sua forma normal');

//console.log(num1+num2);
let soma12 = num1 + num2;
console.log(`${num1} + ${num2} = ${soma12}`)

//e se eu quisesse que um numero fosse string


console.log('-------------------------------------------');
console.log('Variável num1 como String, portanto resultado é uma concatenação');

//console.log(num1.toString() + num2); 

let concat = num1.toString() +  num2;
console.log(`${num1.toString()} + ${num2} = ${concat}`)
console.log(num1.toString() + num2)
/*Nesse caso específico não estamos alterando o tipo da variável, é como se usassemos uma "maquiagem"
temporária para que ele se pareça com uma string*/ 

console.log(typeof num1) // aqui veremos que ele segue sendo um número, apenas naquela linha que foi transformado.


console.log('-------------------------------------------');
console.log('Trocar o tipo da variável');

let num3 = 3;
console.log(typeof num3);

num3 = num3.toString();
console.log(typeof num3)

console.log('-------------------------------------------');
console.log('Conversão para binário');

let num1500 = 1500;

console.log(num1500.toString(2));

console.log (`O número ${num1500} em binário é ${num1500.toString(2)}`)

console.log('-------------------------------------------');
console.log('Mostrar apenas duas casas decimais ');

let numpreco = 10.577882668415;

console.log(numpreco.toFixed(2)); //coloco entre parênteses o número de casas decimais

console.log(`O número ${numpreco} arredondado com duas casas decimais é = ${numpreco.toFixed(2)}`);
console.log(`O número ${numpreco} arredondado com quatro casas decimais é = ${numpreco.toFixed(4)}`);


console.log('-------------------------------------------');
console.log('Métodos para checar itens importantes em um programa ');

let numInt = 10; //valor literal
let numFloat = 10.54

//imagine que estamos recebendo um valor e queremos checar o seu tipo, nesse caso inteiro:
console.log('-------------------------------------------');
console.log(`Caso o número ${numInt} seja interio, a função utilizada retornará True`);
console.log(Number.isInteger(numInt));

console.log(`Caso o número ${numFloat} não seja interio, a função utilizada retornará False`);
console.log(Number.isInteger(numFloat));


console.log('-------------------------------------------');
console.log(`Quando fazemos operações com números e Strings obtemos um resultado = NaN - NOT A NUMBER \n
Isso significa que a conta foi paralisada em algum momento por algum motivo`);

let temp = (num3 * 'Olá');
console.log(temp);

//podemos fazer a checagem da seguinte forma:

console.log(Number.isNaN(temp)); // isso irá retornar TRUE, pois a operação da variável é um NaN

console.log('-------------------------------------------');
console.log('Imprecisão');
 
//padrão de precisão IEEE 754-2008

let num07 = 0.7;
let num01 = 0.1;

console.log(num07 + num01); // o resultado deveria ser 0.8, portanto existe uma certa imprecisão

console.log('Suponha que eu queira chegar a variável num07 a 1, pra isso eu devo somar o num01 três vezes para alcançar esse resultado')

num07 += num01; //num07 = num07 + num01  = 0.8
num07 += num01; // 0.9
num07 += num01; // 1.0

console.log(num07);

console.log('Caso eu use a função toFixed, ele vai apenas maquiar o problema')
//num07 = (num07.toFixed(2));
console.log(num07)

console.log('Entretanto sabemos que o número 1.00 é do tipo float, mas quando questionamos se o seu tipo é inteiro:')
console.log(Number.isInteger(1.00)) /*ele nos retorna True, afirmando que é um número inteiro porque é um
número redondo */ 

console.log('Quando questionamos se o tipo da variável é inteiro:')
console.log(Number.isInteger(num07)) /*aqui ele nos retorna False. A função isInteger checa os valores 
binários, por isso vemos esse valor.*/

//Para resolver esse problema podemos utilizar dois métodos:

console.log('-------------------------------------------'); //OBS:Para essa resolução funcionar devemos comentar a linha 103
console.log('Resolução do problema com parseFloat:'); 

num07 = parseFloat(num07.toFixed(2));
console.log(num07);
console.log(Number.isInteger(num07))


console.log('Caso execute a soma mais algumas vezes...'); 

num07 += num01; //1.1
num07 += num01; //1.2
num07 += num01; //1.3
num07 += num01; //1.4
num07 += num01; //1.5

num07 = parseFloat(num07.toFixed(2));
console.log(num07);
console.log(Number.isInteger(num07))

console.log('-------------------------------------------'); //OBS:Para essa resolução funcionar devemos comentar a linha 103
console.log('Resolução do problema com Number:'); 

num07 = parseFloat(num07.toFixed(2));
console.log(num07);
console.log(Number.isInteger(num07))

console.log('Caso execute a soma mais algumas vezes até chegar no 2.0'); 

num07 += num01; //1.6
num07 += num01; //1.7
num07 += num01; //1.8
num07 += num01; //1.9
num07 += num01; //2.0

num07 = parseFloat(num07.toFixed(2));
console.log(num07);
console.log(Number.isInteger(num07))

