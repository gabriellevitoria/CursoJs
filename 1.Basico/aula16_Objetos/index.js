//Objetos

const pessoa1 = {
    nome: 'Gabrielle',
    sobrenome: 'Silva',
    idade: 20
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// posso criar uma função que crie um objeto da mesma forma

                    //parâmetros
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }; //retorna um objeto

};
                            //argumentos passados 
const pessoa2 = criaPessoa('José Victor', 'Silva', '24');
const pessoa3 = criaPessoa('Marta', 'Oliveira', '47');
const pessoa4 = criaPessoa('Lara' ,'Louzada', '21');
const pessoa5 = criaPessoa('Marcia', 'Terezinha', '50');

console.log(pessoa5.nome, pessoa4.nome);

console.log('----------------------------------------------');
console.log('Outra maneira de criar objetos');

function criarCarro(modelo, anoFabriacao, marca){
    return {
        modelo, anoFabriacao, marca //coloco sem ter que repetir, o Js entende que recebe o nome igual
    };
};

const Fox = criarCarro ('Fox', '2011', 'Volswagem');
console.log(Fox.modelo, Fox.anoFabriacao, Fox.marca);

console.log('----------------------------------------------');
console.log('Funções dentro de objetos');

const pessoa = {
    nome: 'Isis',
    sobrenome: 'Gedda',
    idade: '5',

    //método -> executa uma ação
    fala() {                            //this representa o objeto pessoa
        console.log (`O meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade} anos!`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();