/*
Gabrielle Vitória da Silva tem 20 anos, pesa 54kg
tem 1.55 de altura e seu IMC é de x
Gabrielle Vitória nasceu em 2002

*/




const nome = 'Gabrielle Vitória';
const sobrenome = 'Da Silva';
const idade = 21;
const peso = 54;
const alturaEmM = 1.55;

let imc = peso / (alturaEmM * alturaEmM)
let anoNascimento = 2023 -idade ;



//CONCATENAÇÃO


console.log(nome, 'é bonita')

console.log(`${nome} é bonita`)
console.log('\n')


console.log(nome, sobrenome, 'tem', idade, 'anoes e pesa', peso,'kg, tem', alturaEmM,'de altura e seu Imc é de', imc)
console.log(nome, 'nasceu em ' , anoNascimento)

console.log('\n')



console.log(`${nome} ${sobrenome} tem ${idade}anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)