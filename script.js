var AnimeAmount = 0;
var MoneyAmount = 0;

var jobArray = [ //first array accesses which job. [1]=Initial$, [2]=Current$, [3]=Job Qty, [4]=Amount job increments by per tick
["name", "initialPrice", "currentPrice", "upgrade", "effect", "desc", "1$$2"], //skills use $$ as breaks
["Degenerate", 12, 0, 0, 0.003, "meme", "1$$2$$4"],
["Tendies chef", 84, 0, 0, 0.006, "meme2"],
["Chronic masterbaiter", 166, 0, 0, 0.009, "meme3"],
["Hentai reviewer", 300, 0, 0, 0.015, "meme4"],
["Body pillow stuffer", 600, 0, 0, 0.040, "meme5"],
["Chronic masterbaiter", 1660, 0, 0, 0.009, "meme3"],
["Hentai reviewer", 3000, 0, 0, 0.015, "meme4"],
["Body pillow stuffer", 6000, 0, 0, 0.040, "meme5"],
["Chronic masterbaiter", 1606, 0, 0, 0.009, "meme3"],
["Hentai reviewer", 30000, 0, 0, 0.015, "meme4"],
["Body pillow stuffer", 60000, 0, 0, 0.040, "meme5"],
]

var skillArray = [ //jobs have skill requirements which will be checked per tick
  ["name", "animeReq", "unlocked", "desc"],
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

function debug() {
  AnimeAmount = 99999;
  MoneyAmount = 99999;

}

function loadNames() {
  createJobDivsCreateElement();
createMerchDivsCreateElement()
  for (i = 1; i < jobArray.length; i++)
  {
    document.getElementById('job' + i + 'Title').innerHTML = jobArray[i][0];
  }

  for (i = 1; i < merchArray.length; i++)
  {
    document.getElementById('merch' + i + 'Title').innerHTML = merchArray[i][0];
  }

}
function createJobDivsCreateElement() {
  for (i = 1; i < jobArray.length; i++)
  {
    var jobsDivJS = document.getElementById('jobs');

    var innerJobDivJS = document.createElement('div');
    innerJobDivJS.setAttribute('class','innerJobDiv');

    var jobImgJS = document.createElement('img');
    jobImgJS.setAttribute('class','imgJobSmall');

    var jobTitleJS = document.createElement('div');
    jobTitleJS.setAttribute('class','jobTitle');

    var jobReqJS = document.createElement('div');
    jobReqJS.setAttribute('class','jobReq');

    var jobQtyJS = document.createElement('div');
    jobQtyJS.setAttribute('class','jobQty');



    jobTitleJS.setAttribute('id','job' + i + 'Title');

    jobReqJS.setAttribute('id','jobCost' + i);

    jobQtyJS.setAttribute('id','jobQty' + i);

    innerJobDivJS.setAttribute('onClick','buyJob(' + i + ')');

    jobImgJS.setAttribute('src','media/ph' + i + '.png');

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
    innerJobDivJS.appendChild(jobQtyJS);
    jobsDivJS.appendChild(innerJobDivJS);
  }
}

function createMerchDivsCreateElement() {
  for (i = 1; i < merchArray.length; i++)
  {
    var jobsDivJS = document.getElementById('merch');

    var innerJobDivJS = document.createElement('div');
    innerJobDivJS.setAttribute('class','innerJobDiv');

    var jobImgJS = document.createElement('img');
    jobImgJS.setAttribute('class','imgJobSmall');

    var jobTitleJS = document.createElement('div');
    jobTitleJS.setAttribute('class','jobTitle');

    var jobReqJS = document.createElement('div');
    jobReqJS.setAttribute('class','jobReq');

    var jobQtyJS = document.createElement('div');
    jobQtyJS.setAttribute('class','jobQty');



    jobTitleJS.setAttribute('id','merch' + i + 'Title');

    jobReqJS.setAttribute('id','merchCost' + i);

    jobQtyJS.setAttribute('id','merchQty' + i);

    innerJobDivJS.setAttribute('onClick','buyMerch(' + i + ')');

    jobImgJS.setAttribute('src','media/ph' + i + '.png');

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
    innerJobDivJS.appendChild(jobQtyJS);
    jobsDivJS.appendChild(innerJobDivJS);
  }
}

//Now unnecessary
// function createjobDivsInnerHTML() {
//   var jobsDivJS = document.getElementById('jobs');
//   var jobsDivHTML = "";
//   for (i = 1; i < 5; i++)
//   {
//     jobsDivHTML =+ "<div class='innerJobDiv' onclick='buyJob(1)'>      <img class='imgJobSmall' src='media/ph1.png' />      <div class='jobTitle' id='job1Title'></div><br />      <div class='jobReq'> <span id='jobCost1'>12</span> anime</div>      <div class='jobQty'> <span id='jobQty1'>0</span></div>    </div>"
//   }
//   jobsDivJS.innerHTML = jobsDivHTML;
// }

function update() {
  updatePrices();
  document.getElementById('AnimeAmountText').value = AnimeAmount.toFixed(0) + " Animes"; //updates the actual number in input box (number next to Amount of Animes seen:)
  document.getElementById('MoneyAmountText').value = "$" + MoneyAmount.toFixed(2);
  // document.title = "Weeaboo Simulator: " + Math.trunc(AnimeAmount) + " Animes"; a bit obsolete since we use both animes and money, might as well keep the page title as just 'Weaboo Simulator'
  for (i = 1; i < jobArray.length; i++)
  {
    document.getElementById('jobQty'+i).innerHTML = jobArray[i][3];
  }

  for (i = 1; i < jobArray.length; i++)
  {
    document.getElementById('merchQty'+i).innerHTML = merchArray[i][3];
  }
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

  for (i = 1; i < jobArray.length; i++)
  {
    jobArray[i][2] = jobArray[i][1] + (jobArray[i][3] * jobArray[i][1] * 0.2);
    document.getElementById("jobCost"+i).innerHTML = jobArray[i][2];
  }

  for (i = 1; i < merchArray.length; i++)
  {
    merchArray[i][2] = merchArray[i][1] + (merchArray[i][3] * merchArray[i][1] * 0.2);
    document.getElementById("merchCost"+i).innerHTML = merchArray[i][2];
  }
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
