/* 

&&  -> false && true -> retorna false
|| -> true || false -> retorna true

Valores avaliados em falso

0   ''  ""  ``  null    false   undefinede
*/

function falaOi () {
    return 'Oi';

}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log( 0 || false || null || 'Maria' || true);

//sistema de usuario que ele seleciona
const corUsuario = null;
const corPadrao =  corUsuario || 'red'; //retrona red porque o usuário não selecionou nenhuma cor

const corUsuario2 = 'azul';

const corPadrao2 = corUsuario || 'red' //retorna azul


