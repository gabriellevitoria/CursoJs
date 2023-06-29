//Um pouco mais sobre strings

//quando quero usar aspas em uma frase devo fazer da seguinte maneira:

let stringAspas = "Um \"texto\"";
console.log('-------------------------------------------')

console.log(`string que mostra as aspas - ${stringAspas}`);

//quero usar uma barra invertida literal no meu texto

let stringBarra = "Uma  \\barra";
console.log('-------------------------------------------')
console.log(`Barra invertida = ${stringBarra}`)


//Strings são indexadas, portanto conseguimos obter um caractere apenas digitando o seu índice
                // 01234567
let stringIndex = "Um Texto"
console.log('-------------------------------------------')

console.log(stringIndex);
//console.log(stringIndex [4]);//saida seria a letra 'e'
console.log(`letra que corresponde ao index 4 : ${stringIndex[4]}`);

//outra forma seria
console.log('-------------------------------------------')
console.log('Outra maneira utilizando charAt')
console.log(stringIndex.charAt(6)); //quando saio fora do índice utilizando essa função retorna um valor vazio


//concatenar strings -> exatamente o que o sinal de mais faz
console.log('-------------------------------------------')

console.log('Função Concat')
console.log(stringIndex.concat(' em',' um', ' lindo dia ' ))
console.log('\n')

console.log('Template String')
console.log(`${stringIndex} em um lindo dia`)
console.log('\n')

console.log('-------------------------------------------')
//suponha que eu quero saber em qual índice começa a palavra texto na variáveil string Index
console.log('Desconbrindo o índice da palavra texto')
console.log('\n')
console.log(stringIndex.indexOf('Texto')) // devemos nos atentar à escrita da palavra

//é possível tabem fazer a busca a partir de um índice específico:

console.log('índice da palavra buscando a partir de uma busca específica')
console.log(stringIndex.indexOf('o', 3)) 

console.log('-------------------------------------------')

console.log('Busca que começa pelo final do índice')
console.log('\n')
console.log(stringIndex.lastIndexOf('o', ))
//essa função lê a variável de trás para frente, mas a numeração dos índices não é alterada.


console.log('-------------------------------------------')
console.log('Expressões regulares com string')
console.log('\n')

console.log('Match')
console.log(stringIndex.match(/[a-z]/g)); //retorna todas as letras minísculas |
/*
    -> a função match() é usado para encontrar correspondências entre uma string e uma expressão regular
    -> a expresão /[a-z]/g procura por todas as letras minúsculas na string
    -> o modificador g indica que a busca deve ser global, ou seja, econtrar todas as correspondências
    -> o resultado dessa expressão será um array contendo todas as letras minúsculas encotradas na variável

*/

console.log('\n')
console.log('Search')
console.log(stringIndex.search(/x/)) //retorna o índice de onde a letra está localizada. 
//Aceita também expressões regulares

console.log('\n')
console.log('Replace')
console.log(stringIndex.replace('Um', 'Outra')) //substritui a palavra um para outra.

console.log('\n')
console.log('Com função regular')
console.log(stringIndex.replace(/Um/, 'Outra'))

//No caso da próxima String veremos a ação do modificador g

let StringRato = ' O rato roeu a roupa do rei de roma'

console.log(StringRato.replace(/r/, '*')) //essa situação vai modificar apenas o primeiro 'r'
console.log('\n')
console.log(StringRato.replace(/r/g, '*')) //com o modificador todos os 'r' serão alterados


console.log('-------------------------------------------')

console.log('Como medir o tamanho de uma string')
console.log('\n')

console.log(StringRato.length); /* Ele retorna exatamente a quantidade de caracteres
    então se uma string que vai do índice 0 ao 9, o atributo length retorna que ela possui 10 caracteres,
    o que não é errado. Mas devemos nos atentar para a quantidade de índices. */

console.log('-------------------------------------------')
//FATEAMENTO
console.log('Como buscar apenas uma parte da string')
console.log('\n')
console.log(StringRato.slice(2, 6)) //quero do índice 2 ao 5, mas para não ficar cortado devo colocar 
//um valor a mais. 

//DIVISÃO STRING -> Pegar todas as strings separadas pelo espaço e agrupar em um array

console.log('-------------------------------------------')
console.log('Função SPLIT - separar a string e agrupar em arrays')

console.log(StringRato.split (' ')); // quero separar pelo caractere de espaçõ, então o coloco entre as aspas

console.log(StringRato.split ('r')); //quero separar pelo caractere 'r'

//caso queira que a separação ocorra apenas por um número de vezes fazer da seguinte forma:

console.log(StringRato.split(' ', 2)); // assim o corte será feito apenas duas vezes


console.log('-------------------------------------------')
console.log('Função UPPERCASE - tornar a string toda maiúscula')

console.log(StringRato.toUpperCase());


console.log('-------------------------------------------')
console.log('Função LOWERCASE - tornar a string toda minúscula')

console.log(StringRato.toLocaleLowerCase());


