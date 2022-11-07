const info = (name, surname, s_surname) => {
    return name + " " + surname + " " + s_surname;
};
console.log(info('Roger','Puig','Boada'));

function booleano() {
    const edad = 16;
    console.log(edad >= 18);
};
booleano();

const parametos = function(...valores){
    valores.forEach(element => {
        console.log(element)
    });
};
parametos('1','2','3','4','5');