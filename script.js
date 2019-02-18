var AnimeAmount = 999;
var MoneyAmount = 500;

var jobArray = [ //first array accesses which job. [1]=Initial$, [2]=Current$, [3]=Job Qty, [4]=Amount job increments by per tick
    ["name", "initialPrice", "currentPrice", "upgrade", "effect", "desc", "1$$2"], //skills use $$ as breaks
    ["Degenerate", 12, 0, 0, 0.003, "meme", "1$$2$$4"],
    ["Tendies chef", 84, 0, 0, 0.006, "meme2"],
    ["Chronic masterbaiter", 166, 0, 0, 0.009, "meme3"],
    ["Hentai reviewer", 300, 0, 0, 0.015, "meme4"],
    ["Body pillow stuffer", 600, 0, 0, 0.040, "meme5"],
]

var skillArray = [ //jobs have skill requirements which will be checked per tick
    ["name", "animeReq", "unlocked?", "desc"],
    ["Ninja", 10, false, "meme"],
    ["Japanese literacy", 20, false, "meme2"],
    ["Chronic masterbaiter", 30, false, "meme3"],
    ["Hentai reviewer", 40, false, "meme4"],
    ["Body pillow stuffer", 50, false, "meme5"],
]

var merchArray = [ //first array accesses which job. [1]=Initial, [2]=CurrentPrice, [3]=Job Qty, [4]=Amount job increments by per tick
    ["name", "initialPrice", "currentPrice", "qty", "effect", "desc"], //todo: add skill requirements
    ["Key Chain", 10, 0, 0, 0.003, "meme"],
    ["Wall scroll", 25, 0, 0, 0.006, "meme2"],
    ["Megumin figure", 60, 0, 0, 0.009, "meme3"],
    ["Love live onahole", 200, 0, 0, 0.015, "meme4"],
    ["1:1 scale shiro", 800, 0, 0, 0.040, "meme5"],
]

function loadNames() {
    document.getElementById('job1Title').innerHTML = jobArray[1][0];
    document.getElementById('job2Title').innerHTML = jobArray[2][0];
    document.getElementById('job3Title').innerHTML = jobArray[3][0];

    document.getElementById('merch1Title').innerHTML = merchArray[1][0];
    document.getElementById('merch2Title').innerHTML = merchArray[2][0];
    document.getElementById('merch3Title').innerHTML = merchArray[3][0];

}

function update() {
    updatePrices();
    document.getElementById('AnimeAmountText').value = AnimeAmount.toFixed(0) + " Animes"; //updates the actual number in input box (number next to Amount of Animes seen:)
    document.getElementById('MoneyAmountText').value = "$" + MoneyAmount.toFixed(2);
    // document.title = "Weeaboo Simulator: " + Math.trunc(AnimeAmount) + " Animes"; a bit obsolete since we use both animes and money, might as well keep the page title as just 'Weaboo Simulator'
    document.getElementById('jobQty1').innerHTML = jobArray[1][3];
    document.getElementById('jobQty2').innerHTML = jobArray[2][3];
    document.getElementById('jobQty3').innerHTML = jobArray[3][3];

    document.getElementById('merchQty1').innerHTML = merchArray[1][3];
    document.getElementById('merchQty2').innerHTML = merchArray[2][3];
    document.getElementById('merchQty3').innerHTML = merchArray[3][3];
}

function timer() {
    MoneyAmount += (jobArray[1][3] * 0.003);
    MoneyAmount += (jobArray[2][3] * 0.006);
    MoneyAmount += (jobArray[3][3] * 0.009);

    AnimeAmount += (merchArray[1][3] * 0.009);
    AnimeAmount += (merchArray[2][3] * 0.030);
    AnimeAmount += (merchArray[3][3] * 0.100);
    update();
}
setInterval(timer, 100);

function unlockSkill(i) {
    if (skillArray[i][1] <= AnimeAmount) {
        skillArray[i][2] = true;
        // AnimeAmount -= skillArray[i][2]; skills dont cost anime
        document.getElementById("Skill" + i + "Req").innerHTML = "UNLOCKED";
        document.getElementById("Skill" + i + "Div").style.pointerEvents = 'none';
        //          <div class="innerJobDiv" id="Skill1Div" onclick="unlockSkill()">
        //document.getElementById('debug1skill').innerHTML = "UNLOCKED"; DEBUG (although it would be a nice feature, TODO in future)
    }

}

// function checkSkillReq() {
//   for (i = 1; i < skillArray.length; i++)
//   {
//   var skillCheck = skillArray[i][1];
//   var textByLine = text.split("\n")
//
//
// } }


function Increment() {
    AnimeAmount++;
    update();
}

function save() {
    localStorage.setItem("AnimeAmount of Animes", AnimeAmount);
    localStorage.setItem("job1qty", jobArray[1][3]);
    localStorage.setItem("job2qty", jobArray[2][3]);
    localStorage.setItem("job3qty", jobArray[3][3]);


    // localStorage.setItem("jobQtyStorage", ) TO BE DONE
}

function load() {
    AnimeAmount = localStorage.getItem("AnimeAmount of Animes");
    AnimeAmount = parseInt(AnimeAmount);

    jobArray[1][3] = localStorage.getItem("job1qty");
    jobArray[1][3] = parseInt(jobArray[1][3]);
    jobArray[2][3] = localStorage.getItem("job2qty");
    jobArray[2][3] = parseInt(jobArray[2][3]);
    jobArray[3][3] = localStorage.getItem("job3qty");
    jobArray[3][3] = parseInt(jobArray[3][3]);

    update();
}

function updatePrices() {
    jobArray[1][2] = jobArray[1][1] + (jobArray[1][3] * 2);
    jobArray[2][2] = jobArray[2][1] + (jobArray[2][3] * 10);
    jobArray[3][2] = jobArray[3][1] + (jobArray[3][3] * 40);

    merchArray[1][2] = merchArray[1][1] + (merchArray[1][3] * 2);
    merchArray[2][2] = merchArray[2][1] + (merchArray[2][3] * 10);
    merchArray[3][2] = merchArray[3][1] + (merchArray[3][3] * 40);

    document.getElementById("jobCost1").innerHTML = jobArray[1][2];
    document.getElementById("jobCost2").innerHTML = jobArray[2][2];
    document.getElementById("jobCost3").innerHTML = jobArray[3][2];

    document.getElementById("merchCost1").innerHTML = merchArray[1][2];
    document.getElementById("merchCost2").innerHTML = merchArray[2][2];
    document.getElementById("merchCost3").innerHTML = merchArray[3][2];
}

function buyJob(i) {
  if (AnimeAmount >= jobArray[i][2]) { //if you have more animes than the current price needed, u can buy it
      AnimeAmount = AnimeAmount - jobArray[i][2];
      jobArray[i][3] += 1; //changes qty of jobArray[1][3]'s
      update();
  }
}

function buyMerch(i) {
  if (MoneyAmount >= merchArray[i][2]) { //if you have more animes than the current price needed, u can buy it
      MoneyAmount = MoneyAmount - merchArray[i][2];
      merchArray[i][3] += 1; //changes qty of jobArray[1][3]'s
      update();
  }
}

function changeWaifu(Waifu) {
    //<img id="CurrentWaifuImg" src="media/futaba.PNG">
    document.getElementById("CurrentWaifuDiv").innerHTML = '<img src="media/' + Waifu + '"> <br/>' + Waifu.split('.')[0];
}

function welcomeBack() {
    if (localStorage.getItem("AnimeAmount of Animes") === null) {
        window.alert("Welcome to Matt's Waifu Clicker! owo");
    } else {
        window.alert("Welcome back Onii-Chan! uwu");
    }
}

window.onload = welcomeBack();
