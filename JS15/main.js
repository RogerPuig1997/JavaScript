let items = []
document.getElementById('items_arr').innerHTML = items;
var emojis = ["🍕","🍔","🍟","🌭","🥓","🥚","🍳","🌯","🥩","🥘","🥗","🍜"];

//Get emoji
function getEmoji(){
    return emojis[Math.floor(Math.random() * emojis.length)];
};
console.log(getEmoji());

//Add Items
//push
function pushItem(){
    let icon = getEmoji();
    items.push(icon);
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

//unshift
function unshiftItem(){
    let icon = getEmoji();
    items.unshift(icon);
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

//insert at
function insertItem(){
    let icon = getEmoji();
    let index = document.getElementById("insert_num").value;
    items.splice(index, 0, icon);
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

//Remove Items
//pop
function popItem(){
    items.pop();
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

//shift
function shiftItem(){
    items.shift();
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

//remove at
function removeItem(){
    let index = document.getElementById("remove_num").value;
    items.splice(index, 1,);
    document.getElementById("items_arr").innerHTML = items;
    document.getElementById("insert_num").max = items.length;
    document.getElementById("remove_num").max = items.length;
};

console.log(items);