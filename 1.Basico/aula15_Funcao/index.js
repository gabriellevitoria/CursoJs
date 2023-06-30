//Funções
console.log('-------------------------------------');
console.log('Criando uma função');

function saudacao(nome)/*(nome é um parâmetro)*/ {
    console.log(`Bom dia, ${nome}!`); /*${nome} chama o parâmetro nome*/

}

saudacao('Gabrielle'); //('Gabrielle') - argumento 
saudacao('Victor');


console.log('-------------------------------------');
console.log('Salvar função em variável');

const variavel = saudacao('Maria');
console.log(variavel); //isso vai retornar undefined porque a função está apenas mostrando o valor

console.log('-------------------------------------');
console.log('Função com retorno de valor');

function retornar (){
    console.log('Essa função retorna um valor!')
    return 123456 // não é o ideal, o certo é retornar o que é passado
}

const retorno = retornar();
console.log(retorno);

console.log('-------------------------------------');
console.log('Retorno ideal');

function saudacaoIdeal(nome){
    return `Bom dia ${nome}!`
}

const variavelRetorno = saudacaoIdeal('Marta');
console.log(variavelRetorno);

console.log('-------------------------------------');
console.log('Função Soma');

function soma(x,y) {
    const resultado = x + y;
    return resultado //quando o leitor chega aqui nada mais da função será executado
}

console.log(soma(2,2));
console.log(soma(7,25));
console.log(soma(44,58));



console.log('-------------------------------------');
console.log('Proteção da função');

/*não é possível acessar o que tem dentro da função

console.log(resultado); isso vai gerar um erro! */

console.log('-------------------------------------');
console.log('Tentar executar sem mandar parâmetros');

const resultado = soma();
console.log(resultado); //NaN

console.log('-------------------------------------');
console.log('Valor padrão para contornar situações');

function somaValorPadrao(x = 1, y = 1){
    const resultado = x + y;
    return resultado;    
}

const resultadoPadrao = soma();
console.log(resultadoPadrao);

console.log('-------------------------------------');
console.log('Função Anônima'); //função criada dentro de uma variável

const raiz = function (n) {
    return n**0.5

}; //neste caso preciso do ;

console.log(raiz(25)); //modo de uso segue o mesmo

console.log('-------------------------------------');
console.log('Arow Function'); //removo a palavra function e uso '=>'

const duasCasas = (n) => {
    return n.toFixed(2);
};

console.log(duasCasas(12.544882));
console.log(duasCasas(45.596853));

console.log('Quando tenho apenas uma linha :');

const isNan = (n) => isNaN(n);

console.log(isNan('Gabrielle'));
console.log(isNan(7));

console.log('Quando tenho apenas um parâmetro:')

const Inteiro = n => Number.isInteger(n);

console.log(Inteiro(7.5));
console.log(Inteiro(9));


console.log('-------------------------------------');
console.log('');