var amount = 0;
var autoclicker1= 0;
var autoclicker2 = 0;
var autoclicker3 = 0;

function update() {
    document.getElementById('amountText').value = Math.trunc(amount);   //updates number in input box, title of website, and
    document.title = "Weaboo Simulator: " + Math.trunc(amount) + " Animes";
    document.getElementById('amountAutoClicker1Text').value = autoclicker1;
    document.getElementById('amountAutoClicker2Text').value = autoclicker2;
    document.getElementById('amountAutoClicker3Text').value = autoclicker3;
}

function timer() {
    amount += (autoclicker1 * 0.003);
    amount += (autoclicker2 * 0.006);
    amount += (autoclicker3 * 0.009);
    update();
}
setInterval(timer, 10);

var autoClickers = [    //first array accesses which autoclicker , second array accesses properties of that autoclicker (e.g. qty, current price, initial price)
["name", "initialPrice", "currentPrice", "qty"],
["AutoClicker1", 12, 12, 0],
["AutoClicker2", 84, 84, 0],
["AutoClicker3", 166, 166, 0],
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
    localStorage.setItem("Amount of AutoClicker2's", autoclicker2);
    localStorage.setItem("Amount of AutoClicker3's", autoclicker3);
}

function load() {
    amount = localStorage.getItem("Amount of Animes");
    amount = parseInt(amount);

    autoclicker1 = localStorage.getItem("Amount of AutoClicker1's");
    autoclicker1 = parseInt(autoclicker1);
    autoclicker2 = localStorage.getItem("Amount of AutoClicker2's");
    autoclicker2 = parseInt(autoclicker2);
    autoclicker3 = localStorage.getItem("Amount of AutoClicker3's");
    autoclicker3 = parseInt(autoclicker3);

    update();
    changePricesOnLoad();
}

function changePricesOnLoad() {
    autoClickers[1][2] = 12 + (autoclicker1 * 2);
    autoClickers[2][2] = 84 + (autoclicker2 * 10);
    autoClickers[3][2] = 166 + (autoclicker3 * 40)

    document.getElementById("debug1").innerHTML = "Current Price of AutoClicker1: " + autoClickers[1][2];
    document.getElementById("debug2").innerHTML = "Current Price of AutoClicker2: " + autoClickers[2][2];
    document.getElementById("debug3").innerHTML = "Current Price of AutoClicker3: " + autoClickers[3][2];
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

function buyAutoClicker2() {
    if (amount >= autoClickers[2][2]) {
        amount = amount - autoClickers[2][2];
        autoClickers[2][3] += 1;
        autoClickers[2][2] += 10;
        autoclicker2 += 1;
        update();
        document.getElementById("debug2").innerHTML = "Current Price of AutoClicker2: " + autoClickers[2][2];
    }
}

function buyAutoClicker3() {
    if (amount >= autoClickers[3][2]) {
        amount = amount - autoClickers[3][2];
        autoClickers[3][3] += 1;
        autoClickers[3][2] += 40;
        autoclicker3 += 1;
        update();
        document.getElementById("debug3").innerHTML = "Current Price of AutoClicker3: " + autoClickers[3][2];
    }
}

function welcomeBack() {
    if (localStorage.getItem("Amount of Animes") === null) {
        window.alert("Welcome to Matt's Waifu Clicker! owo");
    }
    else {
        window.alert("Welcome back Onii-Chan! uwu");
    }
}

window.onload = welcomeBack();

$(window).load(function()
{
    $('#myModal').modal('show');
});