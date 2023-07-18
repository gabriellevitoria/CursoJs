const tresHoras = 60 * 60 * 3 * 1000;

const dataBr = new Date (0) //01/01/1970 época unix
const data = new Date (0 + tresHoras);  //adicionando as três horas o bug é corrigido

console.log(data.toString());
console.log(dataBr.toString());

//Suponha que eu quero adiconar um dia à essa data

const umDia = 60 * 60 * 24 * 1000;
const dataDia = new Date (0 + tresHoras + umDia);
console.log(dataDia.toString());


//Quero criar uma data 

const dataDigitada = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(dataDigitada.toString()); 

const dataString = new Date ('2022-04-20 20:21:59');

console.log('Dia', dataString.getDate());
console.log('Mês', dataString.getMonth() + 1); // mês começa no 0
console.log('Ano', dataString.getFullYear());
console.log('Hora', dataString.getHours());
console.log('Min', dataString.getMinutes());
console.log('Seg', dataString.getSeconds());
console.log('ms', dataString.getMilliseconds());
console.log('Dia Semana', dataString.getDay()); // 0 - domingo, 6 - sábado

console.log(dataString.toString());

function FormataData (data) {
    console.log(data);
}