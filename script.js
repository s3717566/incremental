var AnimeAmount = 0;
var AnimeAutoClicker1= 0;
var AnimeAutoClicker2 = 0;
var AnimeAutoClicker3 = 0;

function update() {
    document.getElementById('AnimeAmountText').value = Math.trunc(AnimeAmount);   //updates number in input box, title of website, and
    document.title = "Weeaboo Simulator: " + Math.trunc(AnimeAmount) + " Animes";
    document.getElementById('AnimeAutoClicker1Text').innerHTML = AnimeAutoClicker1;
    document.getElementById('AnimeAutoClicker2Text').innerHTML = AnimeAutoClicker2;
    document.getElementById('AnimeAutoClicker3Text').innerHTML = AnimeAutoClicker3;
}

function timer() {
    AnimeAmount += (AnimeAutoClicker1 * 0.003);
    AnimeAmount += (AnimeAutoClicker2 * 0.006);
    AnimeAmount += (AnimeAutoClicker3 * 0.009);
    update();
}
setInterval(timer, 10);

var animeAutoClickers = [    //first array accesses which autoclicker , second array accesses properties of that autoclicker (e.g. qty, current price, initial price)
["name", "initialPrice", "currentPrice", "qty"],
["AnimeAutoClicker1", 12, 12, 0],
["AnimeAutoClicker2", 84, 84, 0],
["AnimeAutoClicker3", 166, 166, 0],
["name4", "initialPrice", "currentPrice", "qty"],
["name5", "initialPrice", "currentPrice", "qty"]
]

function Increment() {
    AnimeAmount++;
    update();
}

function save() {
    localStorage.setItem("AnimeAmount of Animes", AnimeAmount);
    localStorage.setItem("AnimeAmount of AnimeAutoClicker1's", AnimeAutoClicker1);
    localStorage.setItem("AnimeAmount of AnimeAutoClicker2's", AnimeAutoClicker2);
    localStorage.setItem("AnimeAmount of AnimeAutoClicker3's", AnimeAutoClicker3);
}

function load() {
    AnimeAmount = localStorage.getItem("AnimeAmount of Animes");
    AnimeAmount = parseInt(AnimeAmount);

    AnimeAutoClicker1 = localStorage.getItem("AnimeAmount of AnimeAutoClicker1's");
    AnimeAutoClicker1 = parseInt(AnimeAutoClicker1);
    AnimeAutoClicker2 = localStorage.getItem("AnimeAmount of AnimeAutoClicker2's");
    AnimeAutoClicker2 = parseInt(AnimeAutoClicker2);
    AnimeAutoClicker3 = localStorage.getItem("AnimeAmount of AnimeAutoClicker3's");
    AnimeAutoClicker3 = parseInt(AnimeAutoClicker3);

    update();
    changePricesOnLoad();
}

function changePricesOnLoad() {
    animeAutoClickers[1][2] = 12 + (AnimeAutoClicker1 * 2);
    animeAutoClickers[2][2] = 84 + (AnimeAutoClicker2 * 10);
    animeAutoClickers[3][2] = 166 + (AnimeAutoClicker3 * 40)

    document.getElementById("debug1").innerHTML = "Current Price of AnimeAutoClicker1: " + animeAutoClickers[1][2];
    document.getElementById("debug2").innerHTML = "Current Price of AnimeAutoClicker2: " + animeAutoClickers[2][2];
    document.getElementById("debug3").innerHTML = "Current Price of AnimeAutoClicker3: " + animeAutoClickers[3][2];
}

function buyAnimeAutoClicker1() {
    if (AnimeAmount >= animeAutoClickers[1][2]) {         //if you have more animes than the current price needed, u can buy it
        AnimeAmount = AnimeAmount - animeAutoClickers[1][2];
        animeAutoClickers[1][3] += 1;                //changes qty of AnimeAutoClicker1's
        animeAutoClickers[1][2] += 2;                 //changes currentprice of AnimeAutoClicker1's
        AnimeAutoClicker1 += 1;
        update();
        document.getElementById("debug1").innerHTML = animeAutoClickers[1][2];
    }
}

function buyAnimeAutoClicker2() {
    if (AnimeAmount >= animeAutoClickers[2][2]) {
        AnimeAmount = AnimeAmount - animeAutoClickers[2][2];
        animeAutoClickers[2][3] += 1;
        animeAutoClickers[2][2] += 10;
        AnimeAutoClicker2 += 1;
        update();
        document.getElementById("debug2").innerHTML = animeAutoClickers[2][2];
    }
}

function buyAnimeAutoClicker3() {
    if (AnimeAmount >= animeAutoClickers[3][2]) {
        AnimeAmount = AnimeAmount - animeAutoClickers[3][2];
        animeAutoClickers[3][3] += 1;
        animeAutoClickers[3][2] += 40;
        AnimeAutoClicker3 += 1;
        update();
        document.getElementById("debug3").innerHTML = animeAutoClickers[3][2];
    }
}

function welcomeBack() {
    if (localStorage.getItem("AnimeAmount of Animes") === null) {
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
