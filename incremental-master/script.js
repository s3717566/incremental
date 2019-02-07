/* jslint devel: true */
/* browser: true */
var amount = 0;
var autoclicker1= 0;

function update() {
    document.getElementById('amountText').value = Math.trunc(amount);
    document.title = Math.trunc(amount);
    document.getElementById('amountAutoText').value = autoclicker1;
}

function changePrices() {
    autoClickers[1][2] = 12 + (autoclicker1 * 2);
    document.getElementById("debug1").innerHTML = "Current Price of AutoClicker1: " + autoClickers[1][2];
}

function timer() {
    amount += (autoclicker1 * 0.1);
    update();
}
setInterval(timer, 1000);

var autoClickers = [
["name", "initialPrice", "currentPrice", "qty"],
["first", 12, 12, 0],
["name2", "initialPrice", "currentPrice", "qty"],
["name3", "initialPrice", "currentPrice", "qty"],
["name4", "initialPrice", "currentPrice", "qty"],
["name5", "initialPrice", "currentPrice", "qty"]
]

function Increment() {
    amount++;
    update();
}

function save() {
    localStorage.setItem("Amount of Animes", amount);
    localStorage.setItem("Amount of AutoClicker1's", autoclicker1);
}

function load() {
    amount = localStorage.getItem("Amount of Animes");
    amount = parseInt(amount);
    autoclicker1 = localStorage.getItem("Amount of AutoClicker1's");
    autoclicker1 = parseInt(autoclicker1);
    update();
    changePrices();
}

function buyAutoClicker1() {
    if (amount >= autoClickers[1][2]) {         //if you have more animes than the current price needed, u can buy it
        amount = amount - autoClickers[1][2];
        autoClickers[1][3] += 1;                //changes qty of autoclicker1's
        autoClickers[1][2] += 2;                 //changes currentprice of autoclicker1's
        autoclicker1 += 1;
        update();
        document.getElementById("debug1").innerHTML = "Current Price of AutoClicker1: " + autoClickers[1][2];
    }
}

function buyAutoClicker() {
    if (amount >= 12) {
        amount = amount - 12;
        autoclicker1 += 1;
        update();
    }
}

function welcomeBack() {
    alert("welcome back!");
}