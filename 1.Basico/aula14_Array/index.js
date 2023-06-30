//Array -> Lista/Coleção de coisas

// índices         0        1       2          3
const alunos = ['Maria', 'José', 'Camila', 'Pedro'];
console.log(alunos);


console.log('-------------------------------------');
console.log('Caso queira acessar algum item do array');

console.log(alunos[0]); //array[índice que quero acessar
console.log(alunos[2]);

console.log('-------------------------------------');
console.log('Editar um valor do array');

alunos[0] = 'Eduardo' //array[índice que quero editar] ='Valor'
console.log(alunos);

console.log('-------------------------------------');
console.log('Adicionar (final) valor por meio do índice');

alunos[4] = 'Marta'; //dessa forma teria que saber o tamanho do array
console.log(alunos)

console.log('-------------------------------------');
console.log('Descobrir o tamanho do array');

console.log(alunos.length);

console.log('-------------------------------------');
console.log('Outra forma de adicionar (final) valores sem saber o tamanho');

alunos[alunos.length] = 'Paulo';
console.log(alunos);

console.log('-------------------------------------');
console.log('Função PUSH - Adicionar elementos no final');

alunos.push('Otávio');
console.log(alunos);

console.log('-------------------------------------');
console.log('Função UNSHIFT - Adicionar elemento no início do array');

//isso envolve mover todos os elementos

alunos.unshift('Fernanda');
console.log(alunos);


console.log('-------------------------------------');
console.log('Função POP - Remove elementos do final do array');

console.log(alunos);
alunos.pop();
console.log(alunos);

console.log('-------------------------------------');
console.log('Salvar elemento removido');

const removido = alunos.pop();
console.log(alunos);
console.log(removido);

console.log('-------------------------------------');
console.log('Função SHIFT - Remove do começo');

const removidoInicio = alunos.shift();
console.log(alunos);
console.log(removidoInicio);

console.log('-------------------------------------');
console.log('Acessar índice que não existe');
console.log(alunos[50]);

console.log('-------------------------------------');
console.log('SLICE - Fatiar array');

console.log(alunos.slice(0,4));
console.log(alunos.slice(0, -3));

console.log('-------------------------------------');
console.log('Tipo do array - Objeto');
console.log(typeof alunos)
console.log(alunos instanceof Array); //True ou False


console.log('-------------------------------------');
console.log('DELETE - remove elementos sem modificar os índices');

delete alunos[1]; 
console.log(alunos);



