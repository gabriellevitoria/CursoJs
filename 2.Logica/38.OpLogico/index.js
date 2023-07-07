/* Operadores Lógicos
 && -> AND -> E -- Todas as expressões precisam ser verdadeiras
 || -> OR -> OU
  ! -> NOT -> NÃO

  */

console.log('Tenho que fazer duas comparações e conferir se tenho dinheiro no bolso: ');
console.log(true && true); //ambas devem ser verdadeiras para que a expressão completa seja verdadeiro

console.log('--------------------------------------------------');
console.log(' AND - Todas as expressões precisam ser verdadeiras para retornar True');
console.log(true && false && true);

console.log('--------------------------------------------------');
console.log(' OR - Apenas uma deve ser verdadeira pra retornar True ');
console.log(true || false || true);
console.log(false || false);

console.log('--------------------------------------------------');
console.log(' NOT- Se um for falso a expressão toda será falsa ');
console.log(true != false != true);
console.log(false != false);


