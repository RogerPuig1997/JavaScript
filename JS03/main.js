let string = 'Texto';
let numero = 1;
let booleano = true;
let nada = null;
let nodefinido = undefined;
let simbolo= Symbol('something');

console.log(string);
console.log(typeof string);
console.log(numero);
console.log(typeof numero);
console.log(booleano);
console.log(typeof booleano);
console.log(nada);
console.log(typeof nada);
console.log(nodefinido);
console.log(typeof nodefinido);
console.log(simbolo);
console.log(typeof simbolo);

let i = 'global';
function fnc(){
    let i = 'local';
    console.log(i);
}
fnc();
console.log(i);