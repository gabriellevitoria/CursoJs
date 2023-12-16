const pessoa = {
    nome : 'Gabrielle',
    sobrenome : 'Vitoria',
    idade: 21,
    //sexo: feminino, 
    endereco : {
        rua : 'Major Antenor Ramos',
        numero : 165
    }

};
//Atribuição Normal
/* const nome = pessoa.nome;
console.log (nome); */

//Atribuição Via Desetruturação

/*const { nome } = pessoa; 
/* é como se estivessemos passando o objeto e pedindo para extrair
a informação
console.log(nome);*/

/*const {sobrenome, idade } = pessoa;
console.log(sobrenome, idade);*/

//caso a variável não exista
/*const {sexo} = pessoa;
console.log(sexo)*/

const {sexo = 'nao existe'} = pessoa; //atribuimos valor padrão
console.log(sexo); 

//modificar o nome da var

const {nome : teste, sobrenome } = pessoa;
console.log(teste, sobrenome)

/*extraimos o conteúdo do objeto endereço e armazenamos 
nas variáveis rua e numero
- caso queira utilizar também a var endereço é só colocar na 
frente
*/
const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, endereco);

/*também podemos atribuir o valor e modificar o nome da variável
lembrando que o nome só é modificado quando ele não existe
no objeto*/

const {endereco : {rua : r = 12345}} = pessoa
console.log(r);


//operadir de rest

const {nome, ...resto} = pessoa;
console.log(resto);