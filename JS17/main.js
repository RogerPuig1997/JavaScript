var icons = ["✊","✋","✌"]
var player1 = 0;
var player2 = 0;
function getIcon(){
    return icons[Math.floor(Math.random() * icons.length)];
};
//console.log(getIcon());

document.write("EMPIEZA EL DUELO (BO3)<br>");

while(player1 < 3 && player2 < 3){    
    function getWin(){    
        let hand1 = getIcon();
        let hand2 = getIcon();
        if (hand1 === hand2){
            result = "EMPATE"
        } else if ((hand1 === "✊" && hand2 === "✌")||
        (hand1 === "✌" && hand2 === "✋")||
        (hand1 === "✋" && hand2 === "✊")){
            player1++;
            var result = "RONDA PARA PLAYER1"
        }else {
            player2++;
            var result = "RONDA PARA PLAYER2"
        }
    return hand1 + hand2 + " " + player1 + "-" + player2 + " " + result;
    } 
    //console.log(getWin());
    document.writeln(getWin() + "<br>");
};
if(player1 == 3){
    document.write("GANA PLAYER 1!!!");
}else if(player2 == 3){
    document.write("GANA PLAYER 2!!!");
}else{
    document.write(" ");
}