console.log('Resolução utilizando Contas')

let num7 = 0.7;
let num1 = 0.1;

/*num7 += num1 //0.8
num7 += num1 //0.9
num7 += num1 //1.0*/

//num7 = num7 + num1  // 0.8

num7 =  ((num7 * 100) + (num1 * 100)) /100; // 8.0;
num7 =  ((num7 * 100) + (num1 * 100)) /100; // 9.0;
num7 =  ((num7 * 100) + (num1 * 100) )/100; // 1.0;

console.log(num7)
console.log(Number.isInteger(num7))