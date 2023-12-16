const verdadeira = true;

let nome = 'Gabrielle';
var nome2 = 'Vitória' 

//let tem escopo de bloco {}
//var tem escopo de função

var nome2 = 'teste'; // redeclarada

if (verdadeira) {
    let nome = 'Maria'; // criando outra variável
    console.log(nome, nome2) //aqui a let nome vai receber o valor 'Maria'

    if (verdadeira) {
        let nome = ' outra coisa'
        console.log(nome, nome2);
    }

}

var sobrenome = 'Gustavo';
function falaOi () {
    var nome = 'Luiz';
    console.log(sobrenome);

if (verdadeira) {
    console.log
}
}

falaOi();