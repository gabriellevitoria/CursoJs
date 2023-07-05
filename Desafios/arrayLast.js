function arrayLast(numero){

    if (numero.length > 0) {

        let ultimoIndice =  numero.length -1;   
        let ultimoValor = numero.ultimoIndice;
        console.log(ultimoValor);

    } else {
        return -1 
    }
};

 number = [1, 2, 3];
 console.log(arrayLast(number));
