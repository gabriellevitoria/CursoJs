//Objeto Math -> um objeto relacionado à contas matemáticas

let num1 = 9.54578;
console.log('-----------------------------------------------------');
console.log( `Suponha que eu queira arredondar o valor ${num1} para baixo, tornando o numero inteiro:`);

let numArredondadoBaixo = Math.floor(num1);
console.log(numArredondadoBaixo);

console.log('-----------------------------------------------------');
console.log(`Agora queremos arredondar o mesmo valor para cima:`);

let numArredondadoCima = Math.ceil(num1);
console.log(numArredondadoCima);

console.log('-----------------------------------------------------');
console.log(`Agora queremos arredondar para o mais próximo:`);

let numArredondado = Math.round(num1); //da metade pra cima arredonda para cima
console.log(numArredondado);

console.log('-----------------------------------------------------');
console.log(`Dado uma sequência de números podemos ver qual é o maior ou menor número da sequência:`);

let sequencia = [1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6];

let maiorNumSequencia = Math.max(sequencia); /*Retornou um NaN porque espera um argumento passado por
 virgulas e não um array 
 O método spread poderia ser utilizado para espalhar o array como argumentos separados*/ 
//console.log(`O maior valor da sequência: ${sequencia} é o número ${maiorNumSequencia}`);
//console.log(Math.max(maiorNumSequencia))
console.log(`A sequência é ${sequencia}`);
console.log('O seu maior número é:', Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));
console.log('O seu menor número é:', Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

console.log('-----------------------------------------------------');
console.log('Método Spread - Separar Array');

let maiorNumArray = Math.max(...sequencia);
console.log(maiorNumArray);

console.log('-----------------------------------------------------');
console.log('Random - gerar números aleatórios');

let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();

console.log(`Número aleatório 1: ${random1}`);
console.log(`Número aleatório 2: ${random2}`);
console.log(`Número aleatório 3: ${random3}`);

console.log('-----------------------------------------------------');
console.log('Definir intervalo para o Random');

const aleatorio = Math.random() * (10 - 5 ) + 5;
console.log(aleatorio);

console.log('-----------------------------------------------------');
console.log('Arredondar valores com Random');

const randomArredondado = Math.round(Math.random() * (10 - 5) + 5);
console.log(randomArredondado);


console.log('-----------------------------------------------------');
console.log('Valor de Pi');

console.log(Math.PI)

console.log('-----------------------------------------------------');
console.log('Potenciação com Math');

console.log(Math.pow(2, 10));

console.log('-----------------------------------------------------');
console.log('Potenciação com operador');

console.log(2 ** 10);

console.log('-----------------------------------------------------');
console.log('Raiz quadrada sem objetos');

let num9 = 9;
console.log(num9 ** (1/2)); //numero elevado a 1/2;

let num16 = 16;
console.log(num16 ** 0.5);


console.log('-----------------------------------------------------');
console.log('JAVASCRIPT DIVIDE NÚMEROS POR 0, FIQUE ATENTO!');

console.log(100 / 0); // gera um infinity -> teoricamente quanto mais se aproxima do 0, maior é o resultado