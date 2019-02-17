var AnimeAmount = 0;

function update() {
    updatePrices();
    document.getElementById('AnimeAmountText').value = Math.trunc(AnimeAmount);   //updates number in input box, title of website, and
    document.title = "Weeaboo Simulator: " + Math.trunc(AnimeAmount) + " Animes";
    document.getElementById('jobQty1').innerHTML = jobArray[1][3];
    document.getElementById('jobQty2').innerHTML = jobArray[2][3];
    document.getElementById('jobQty3').innerHTML = jobArray[3][3];
}

function timer() {
    AnimeAmount += (jobArray[1][3] * 0.003);
    AnimeAmount += (jobArray[2][3] * 0.006);
    AnimeAmount += (jobArray[3][3] * 0.009);
    update();
}
setInterval(timer, 10);

var jobArray = [    //first array accesses which autoclicker , second array accesses properties of that autoclicker (e.g. qty, current price, initial price)
["name", "initialPrice", "currentPrice", "upgrade", "effect", "desc"], //todo: add skill requirements
["Degenerate", 12, 0, 0, 0.003, "meme"],
["Tendies chef", 84, 0, 0, 0.006, "meme2"],
["Chronic masterbaiter", 166, 0, 0, 0.009, "meme3"],
["Hentai reviewer", 300, 0, 0, 0.015, "meme4"],
["Body pillow stuffer", 600, 0, 0, 0.040, "meme5"],
]

function Increment() {
    AnimeAmount++;
    update();
}

function save() {
    localStorage.setItem("AnimeAmount of Animes", AnimeAmount);
    localStorage.setItem("AnimeAmount of jobArray[1][3]'s", jobArray[1][3]);
    localStorage.setItem("AnimeAmount of jobArray[2][3]'s", jobArray[2][3]);
    localStorage.setItem("AnimeAmount of jobArray[3][3]'s", jobArray[3][3]);


    // localStorage.setItem("jobQtyStorage", ) TO BE DONE
}

function load() {
    AnimeAmount = localStorage.getItem("AnimeAmount of Animes");
    AnimeAmount = parseInt(AnimeAmount);

    jobArray[1][3] = localStorage.getItem("AnimeAmount of jobArray[1][3]'s");
    jobArray[1][3] = parseInt(jobArray[1][3]);
    jobArray[2][3] = localStorage.getItem("AnimeAmount of jobArray[2][3]'s");
    jobArray[2][3] = parseInt(jobArray[2][3]);
    jobArray[3][3] = localStorage.getItem("AnimeAmount of jobArray[3][3]'s");
    jobArray[3][3] = parseInt(jobArray[3][3]);

    update();
}

function updatePrices() {
  jobArray[1][2] = jobArray[1][1] + (jobArray[1][3] * 2);
  jobArray[2][2] = jobArray[2][1] + (jobArray[2][3] * 10);
  jobArray[3][2] = jobArray[3][1] + (jobArray[3][3] * 40);

  document.getElementById("debug1").innerHTML = jobArray[1][2];
  document.getElementById("debug2").innerHTML = jobArray[2][2];
  document.getElementById("debug3").innerHTML = jobArray[3][2];
}

function buyAnimeAutoClicker1() {
    if (AnimeAmount >= jobArray[1][2]) {         //if you have more animes than the current price needed, u can buy it
        AnimeAmount = AnimeAmount - jobArray[1][2];
        jobArray[1][3] += 1;                //changes qty of jobArray[1][3]'s
        update();
        document.getElementById("debug1").innerHTML = jobArray[1][2];
    }
}

function buyAnimeAutoClicker2() {
    if (AnimeAmount >= jobArray[2][2]) {
        AnimeAmount = AnimeAmount - jobArray[2][2];
        jobArray[2][3] += 1;
        update();
        document.getElementById("debug2").innerHTML = jobArray[2][2];
    }
}

function buyAnimeAutoClicker3() {
    if (AnimeAmount >= jobArray[3][2]) {
        AnimeAmount = AnimeAmount - jobArray[3][2];
        jobArray[3][3] += 1;
        update();
        document.getElementById("debug3").innerHTML = jobArray[3][2];
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
