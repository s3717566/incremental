var ShounenAmount = 0;
var RomanceAmount = 0;
var SliceOfLifeAmount = 0;
var IsekaiAmount = 0;
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

var skillArray = [ //jobs have skill requirements which will be checked per tick. First array accesses which skill. [1]=Requirement, [2]=boolean if unlocked, [3]=description.
  ["name", "animeReq", "unlocked", "desc"],
  ["Ninja", "20-Shounen,5-Isekai", false, "meme"], //For test purposes! 10 Shounen required.
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
  for (i = 1; i < jobArray.length; i++) {
    document.getElementById('job' + i + 'Title').innerHTML = jobArray[i][0];
  }

  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merch' + i + 'Title').innerHTML = merchArray[i][0];
  }

}

function createJobDivsCreateElement() {
  for (i = 1; i < jobArray.length; i++) {
    var jobsDivJS = document.getElementById('jobs');

    var innerJobDivJS = document.createElement('div');
    innerJobDivJS.setAttribute('class', 'innerJobDiv');

    var jobImgJS = document.createElement('img');
    jobImgJS.setAttribute('class', 'imgJobSmall');

    var jobTitleJS = document.createElement('div');
    jobTitleJS.setAttribute('class', 'jobTitle');

    var jobReqJS = document.createElement('div');
    jobReqJS.setAttribute('class', 'jobReq');

    var jobQtyJS = document.createElement('div');
    jobQtyJS.setAttribute('class', 'jobQty');



    jobTitleJS.setAttribute('id', 'job' + i + 'Title');

    jobReqJS.setAttribute('id', 'jobCost' + i);

    jobQtyJS.setAttribute('id', 'jobQty' + i);

    innerJobDivJS.setAttribute('onClick', 'buyJob(' + i + ')');

    jobImgJS.setAttribute('src', 'media/ph' + i + '.png');

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
    innerJobDivJS.appendChild(jobQtyJS);
    jobsDivJS.appendChild(innerJobDivJS);
  }
}

function createMerchDivsCreateElement() {
  for (i = 1; i < merchArray.length; i++) {
    var jobsDivJS = document.getElementById('merch');

    var innerJobDivJS = document.createElement('div');
    innerJobDivJS.setAttribute('class', 'innerJobDiv');

    var jobImgJS = document.createElement('img');
    jobImgJS.setAttribute('class', 'imgJobSmall');

    var jobTitleJS = document.createElement('div');
    jobTitleJS.setAttribute('class', 'jobTitle');

    var jobReqJS = document.createElement('div');
    jobReqJS.setAttribute('class', 'jobReq');

    var jobQtyJS = document.createElement('div');
    jobQtyJS.setAttribute('class', 'jobQty');



    jobTitleJS.setAttribute('id', 'merch' + i + 'Title');

    jobReqJS.setAttribute('id', 'merchCost' + i);

    jobQtyJS.setAttribute('id', 'merchQty' + i);

    innerJobDivJS.setAttribute('onClick', 'buyMerch(' + i + ')');

    jobImgJS.setAttribute('src', 'media/ph' + i + '.png');

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
    innerJobDivJS.appendChild(jobQtyJS);
    jobsDivJS.appendChild(innerJobDivJS);
  }
}

function update() {
  updatePrices();

  document.getElementById("ShounenAmountText").value = ShounenAmount.toFixed(0); //can't make dynamic with genre.toFixed(0). Need to figure out how to use the argument as a reference to the variable.
  document.getElementById("RomanceAmountText").value = RomanceAmount.toFixed(0);
  document.getElementById("SliceOfLifeAmountText").value = SliceOfLifeAmount.toFixed(0);
  document.getElementById("IsekaiAmountText").value = IsekaiAmount.toFixed(0);

  document.getElementById('MoneyAmountText').value = "$" + MoneyAmount.toFixed(2);
  for (i = 1; i < jobArray.length; i++) {
    document.getElementById('jobQty' + i).innerHTML = jobArray[i][3];
  }

  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merchQty' + i).innerHTML = merchArray[i][3];
  }
  checkSkillReq();
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

// function unlockSkill(i) {
//   if (skillArray[i][1] <= AnimeAmount) {
//     skillArray[i][2] = true;
//     // AnimeAmount -= skillArray[i][2]; skills dont cost anime
//     document.getElementById("Skill" + i + "Req").innerHTML = "UNLOCKED";
//     document.getElementById("Skill" + i + "Div").style.pointerEvents = 'none';
//     //          <div class="innerJobDiv" id="Skill1Div" onclick="unlockSkill()">
//     //document.getElementById('debug1skill').innerHTML = "UNLOCKED"; DEBUG (although it would be a nice feature, TODO in future)
//   }

// }

function checkSkillReq() { //Note: Create method called 'loadSkills()' for future.
  for (i = 1; i < skillArray.length; i++) //loops 5 times currently.
  {
    var requiredCounter = 0; //used to count if player has the required amount for a skill (look at switch statement for use).
    if (skillArray[i][2] == true) {
      continue; //no need to check for skills that are already unlocked
    }
    var totalSkillReqs = skillArray[i][1];
    var genres = totalSkillReqs.split(",");

    for (x = 0; x < genres.length; x++) //loops through the genres array. E.g. for 10-Shounen,5-Isekai, it will loop twice.
    {

      switch (genres[x].substring(genres[x].indexOf("-") + 1)) //E.g. for 10-Shounen, the switch argument is "Shounen".
      {
        case ('Shounen'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-"))) //E.g. for 10-Shounen, number = 10;
          if (ShounenAmount >= numberReq) {
            requiredCounter += 1;
          }
          break;

        case ('Romance'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-"))) 
          if (RomanceAmount >= numberReq) {
            requiredCounter += 1;
          }
          break;

        case ('SliceOfLife'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-")))
          if (SliceOfLifeAmount >= numberReq) {
            requiredCounter += 1;
          }
          break;

        case ('Isekai'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-"))) 
          if (IsekaiAmount >= numberReq) {
            requiredCounter += 1;
          }
          break;
      }

      if (requiredCounter == genres.length) //If the counter = genres.length, it means all genres have met their requirement and thus, the skill is unlocked.
      {
        skillArray[i][2] = true;
        document.getElementById("Skill" + i + "Req").innerHTML = skillArray[i][3];
      }
    }
  }
}


function Increment(genre) {
  switch (genre) {
    case ('ShounenAmount'):
      ShounenAmount++;
      break;

    case ('RomanceAmount'):
      RomanceAmount++;
      break;

    case ('SliceOfLifeAmount'):
      SliceOfLifeAmount++;
      break;

    case ('IsekaiAmount'):
      IsekaiAmount++;
      break;
  }
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

  for (i = 1; i < jobArray.length; i++) {
    jobArray[i][2] = jobArray[i][1] + (jobArray[i][3] * jobArray[i][1] * 0.2);
    document.getElementById("jobCost" + i).innerHTML = jobArray[i][2];
  }

  for (i = 1; i < merchArray.length; i++) {
    merchArray[i][2] = merchArray[i][1] + (merchArray[i][3] * merchArray[i][1] * 0.2);
    document.getElementById("merchCost" + i).innerHTML = merchArray[i][2];
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