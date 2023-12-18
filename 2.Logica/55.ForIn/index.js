const frutas = ['Maça', 'Pera', 'Uva'];

/*for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

}*/

for (let indice in frutas) {
    console.log(frutas[indice]);
}
//não está contando | está LENDO os ÍNDICES do ARRAY

//portanto o For In lê os índices /chaves do objeto

console.log('-----------------------------------' );
const pessoa = {
    nome : 'Gabrielle',
    sobrenome : 'Vitória',
    idade: 21
};

for (let chaves in pessoa) {
    console.log(chaves);

}

console.log('-----------------------------------' );

for (let conteudo in pessoa ) {
    console.log(pessoa[conteudo]);
}

console.log('-----------------------------------' );


//existem duas formas de acessar os valores de um objeto
console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log('-----------------------------------' );
//   pega o índice (nome) do objeto
for (let chave in pessoa) {
    console.log(chave, pessoa [chave])
    //      índice do objto e conteúdo do objeto
    //              nome            Gabrielle
}

