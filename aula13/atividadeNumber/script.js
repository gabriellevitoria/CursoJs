const numero= Number(prompt('Digite um número')); //recebe o valor da variável
const elementoResultado = document.getElementById('resultado');// acessa o elemento onde quer mostra-lá
elementoResultado.innerHTML = numero;//atualizando o conteúdo 


const texto = document.getElementById('texto');
texto.innerHTML = 
    `<p> A Raiz Quadrada do número <strong>${numero}</strong> é <strong>${numero ** (1/2)}</strong> </p>
     <p>O número <strong>${numero}</strong> é inteiro?  <strong>${Number.isInteger(numero)}</strong> </p>
     <p>É NaN: <strong>${Number.isNaN(numero)}</strong> </p>
     <p>Arredondado para baixo: <strong>${Math.floor(numero)}</strong> </p>
     <p>Arredondado para cima : <strong> ${Math.ceil(numero)}</strong> </p>
     <p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> </p>`;
