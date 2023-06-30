//Exercício que faça com que as variáveis aponte para o valor de outras

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let VarReserva = varB;

varB = varC;
varC = varA;
varA = VarReserva;

/*outra maneira de fazer
    [varA, varB, varC] = [varB, varC, varA];
*/

console.log (varA, varB, varC)