function E1 (){
    const n1 = 1;
    const n2 = 2;
    const n3 = 3;
    const suma = n1 + n2 + n3;
    return suma;
};
console.log(E1());

function E2 (){
    const nombre = 'Roger';
    const apellido1 = 'Puig';
    const apellido2 = 'Boada';
    const nombre_completo = nombre + " " + apellido1 + " " + apellido2;
    return nombre_completo;
};
console.log(E2());

function E3 (num1, num2){
    if(num1 > num2){
        return num1;
    }else if(num1 < num2){
        return num2;
    }else{
        return null;
    }
};
console.log(E3(5,7));