//            0123456789...
 const nome = 'Gabrielle Vitória';

/*

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('-----------------------------');

for (let i in nome){
    console.log(nome[i]);
}*/

//forma de pegar o VALOR de cara sem precisar do índice

for (let valor of nome) {
    console.log(valor);
}

const nomes = ['Gabrielle Vitória' , 'José Victor', 
'Ísis Gedda'];

for (let valor of nomes) {
    console.log(valor);
}

console.log('------------------------------------');
//obj não interável
nomes.forEach(function (valor, indice , array) {

    console.log(valor, indice, array)

});

const pessoa = {
    nome: gabrielle,
    sobrenome: vitória
};

//FOR IN é ITERÁVEL portanto funciona com OBJETOS

for (let chave in pessoa) {
    console.log(chave, pessoa [chave]); 
}

//FOR OF não é ITERÁVEL, NÃO funciona com OBJETOS

/*for (let valor of pessoa) {
    console.log(valor);
}*/

//ERRO: pessoa is not iterable