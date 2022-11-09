$().ready(() => {
    $("#getRed").click(function(){
        $("#p_rojo").toggleClass("red");
    })
});

var getAzul = document.querySelector("#getAzul");
var p_azul = document.querySelector("#p_azul");
getAzul.onclick = function(){
    p_azul.classList.toggle("blue");
};