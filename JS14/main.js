let food = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"]

console.log(food.fill("🍺",4));

let food2 = ["🍕","🍕","🍍","🍕","🍕"]

console.log(food2.includes("🍍"));

let food3 = ["🍕","🍕","🍍","🍕","🍕"]
console.log(food3.filter((item) => item == '🍕'));

let food4 = ["🍓","🍋","🍓","🍋","🍓"]
food4.splice(0, 1, "🍄");
food4.splice(2, 1, "🍄");
food4.splice(4, 1, "🍄");
console.log(food4);

let food5 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"]
food5.splice(1, 0, "🥵");
food5.splice(4, 0, "🥵");
food5.splice(7, 0, "🥵");
console.log(food5);

let food6 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"]
food6.splice(2, 0, "🃏");
console.log(food6);