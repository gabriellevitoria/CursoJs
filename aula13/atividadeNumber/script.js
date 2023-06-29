const numeroString = prompt('Digite um número'); // recebe o valor da variável

let numero = parseFloat(numeroString);
        

let elementoResultado = document.getElementById('resultado');// acessa o elemento onde quer mostra-lá
elementoResultado.innerHTML = (numero)//atualizando o conteúdo 

let raizQuadrada = numero ** (1/2);
let elementoRaiz = document.getElementById('raizQuadrada');
elementoRaiz.innerHTML = (`Raiz Quadrada = ${raizQuadrada}`);

let inteiro = (Number.isInteger(numero)); 
let elementoInteiro = document.getElementById('inteiro'); 
elementoInteiro.innerHTML = (`O número <strong>${numero}</strong> é inteiro?  <strong>${inteiro}</strong>`);

let not_a_number = isNaN(numero);
let elemento_NaN = document.getElementById('NaN');
elemento_NaN.innerHTML = (`É NaN: <strong>${not_a_number}</strong>`);
        
let arredondadoBaixo = Math.floor(numero);
let elementoArredondarBaixo = document.getElementById('arredondadoBaixo');
elementoArredondarBaixo.innerHTML = (`Arredondado para baixo: <strong>${arredondadoBaixo}</strong>`);

let arredondadoCima = Math.ceil(numero);
let elementoArredondarCima = document.getElementById('arredondadoCima');
elementoArredondarCima.innerHTML = (`Arredondado para cima : <strong> ${arredondadoCima}</strong>`);

let duasCasas = numero.toFixed(2); // ERRO
let elementoDuasCasas = document.getElementById('duasCasas');
elementoDuasCasas.innerHTML = (`Com duas casas decimais: <strong>${duasCasas}</strong>`)

