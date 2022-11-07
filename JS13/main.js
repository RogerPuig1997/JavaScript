let numero = 1;
let i = 0;
do {
    if(i===0){
        i++;
        numero--;
        console.log(numero);
    }else{
        numero++;
        console.log(numero);
    }
} while (numero < 5);

// En el primer intento del bucle se cumple el if (i===0)
// por lo tanto i = 1 y numero = 0 e imprime 0 (numero)
// a partir de eso i = 1 siempre y ya no se cumple el if asi que se realiza solo lo del else
// hasta que numero llega a 5 pero al ser do se ejecuta una ultima vez