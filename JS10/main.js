function replace(palabra){
    console.log(palabra.replaceAll('a','o'));
};

replace("academia");

function empieza(palabra){
    console.log(palabra.startsWith('aca'));
};

empieza("academia");
empieza("escuela");

function saludar(palabra){
    console.log(palabra.repeat(3));
};

saludar("Hola ");