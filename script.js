var ShounenAmount = 0;
var RomanceAmount = 0;
var SliceOfLifeAmount = 0;
var IsekaiAmount = 0;
var MoneyAmount = 0;

var jobArray = [ //first array accesses which job. [1]=boolean if unlocked, [2]=Amount it increments by, [3]=Description, [4]=Skill requirements
  ["name", "unlocked", "effect", "desc", "1,2", "image"], //skills use , as breaks
  ["Degenerate", false, 0.003, "meme", "1", "degenerate.png"],
  ["Avid Fan", false, 0.006, "meme2", "2", "avid_fan.png"],
  ["Fan Subber", false, 0.009, "meme3", "3", "fan_subber.png"],
  ["Anime Reviewer", false, 0.015, "meme3", "3", "anime_reviewer.png"],
  ["McGronalds Employee", false, 0.040, "meme3", "4", "mcgronalds_employee.png"],
  ["McGronalds Manager", false, 0.009, "meme3", "4", "mcgronalds_manager.png"],
  ["Anime Youtuber", false, 0.015, "meme3", "5", "anime_youtuber.png"],
  ["Dub Voice Actor",  false, 0.040, "meme3", "5", "dub_voice_actor.png"],
  ["Manga Artist", false, 0.009, "meme3", "6", "manga_artist.png"],
  ["Professional Animator", false, 0.015, "meme3", "6", "professional_animator.png"],
  ["Nihon Overlord", false, 0.040, "meme3", "7", "nihon_overlord.png"],
]

var skillArray = [ //jobs have skill requirements which will be checked per tick. First array accesses which skill. [1]=Requirement, [2]=boolean if unlocked, [3]=description.
  ["name", "animeReq", "unlocked", "desc", "image"],
  ["Some Free Time", "1-Shounen,1-Romance,1-SliceOfLife,1-Isekai", false, "The start of the descent into madness...", "some_free_time.png"], //For test purposes! 10 Shounen required.
  ["Learning Japanese from Subs", "10-Shounen,5-Romance,5-SliceOfLife,10-Isekai", false, "WATASHI GA KITA!", "learning_japanese_from_subs.png"],
  ["Man of Culture", "20-Shounen,25-Romance,30-SliceOfLife,25-Isekai", false, "Ah, I see you understand this meme too.", "man_of_culture.png"],
  ["Tons of Free Time", "55-Shounen,50-Romance,60-SliceOfLife,50-Isekai", false, "You can't go back. 19 years of your life, gone like that.", "tons_of_free_time.png"],
  ["200 IQ", "75-Shounen,75-Romance,75-SliceOfLife,75-Isekai", false, "You can feel your head physically growing in size for your big brain.", "200IQ.png"],
  ["Weeb Status", "100-Shounen,101-Romance,102-SliceOfLife,103-Isekai", false, "Embrace it; you're one of us now.", "weeb_status.png"],
  ["Political Power", "500-Shounen, 500-Romance, 500-SliceOfLife, 500-Isekai", false, "You don't know anything about politics, but you know enough about anime to become the ruler of Japan.", "political_power.png"],
]

var merchArray = [ //first array accesses which job. [1]=Initial, [2]=CurrentPrice, [3]=Job Qty, [4]=Amount job increments by per tick
  ["name", "initialPrice", "currentPrice", "qty", "effect", "desc"], //todo: add skill requirements
  ["Key Chain", 10, 0, 0, 0.003, "meme"],
  ["Wall scroll", 25, 0, 0, 0.006, "meme2"],
  ["Megumin figure", 60, 0, 0, 0.009, "meme3"],
  ["Love live onahole", 200, 0, 0, 0.015, "meme4"],
  ["1:1 scale shiro", 800, 0, 0, 0.040, "meme5"],
]

var storyArray = [ //temporary, just want to test out the story div on the page.
  ["requirement", "story"],
  ["1", "You watch your first episode of My Hero Academia. You think that the little green boy sucks."],
  ["12", "You finish the first season of My Hero Academia and want to go plus ultra."],
  ["24", "Season 2 of My Hero Academia is finished, and you decide to binge watch the entire season in 1 sitting."],
]

function debug() {
  ShounenAmount = 99999;
  SliceOfLifeAmount = 99999;
  RomanceAmount = 99999;
  IsekaiAmount = 99999;
  MoneyAmount = 99999;

}

function loadNames() {
  createJobDivsCreateElement();
  createMerchDivsCreateElement();
  loadJobReqs();
  loadSkillReqs();
  loadSkillImgs();

  for (i = 1; i < jobArray.length; i++) {
    document.getElementById('job' + i + 'Title').innerHTML = jobArray[i][0];
  }

  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merch' + i + 'Title').innerHTML = merchArray[i][0];
  }
  update(); //stops page from "not having the Qty's until a button is pressed" problem.
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

    jobImgJS.setAttribute('src', 'media/' + jobArray[i][5]);

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

  document.getElementById("ShounenAmountText").value = ShounenAmount.toFixed(0); //can't make dynamic with genre.toFixed(0). Need to figure out how to use the argument as a reference to the variable.
  document.getElementById("RomanceAmountText").value = RomanceAmount.toFixed(0);
  document.getElementById("SliceOfLifeAmountText").value = SliceOfLifeAmount.toFixed(0);
  document.getElementById("IsekaiAmountText").value = IsekaiAmount.toFixed(0);

  document.getElementById('MoneyAmountText').value = "$" + MoneyAmount.toFixed(2);
  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merchQty' + i).innerHTML = merchArray[i][1];
  }
}

function timer() {
  update();
  checkSkillReq();
  checkJobReq();
}
setInterval(timer, 100);

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

function checkSkillReq() { //Note: Create method called 'loadSkills()' for future.
  var exit = false;
  for (i = 1; i < skillArray.length; i++) //loops 5 times currently.
  {
    var requiredCounter = 0; //used to count if player has the required amount for a skill (look at switch statement for use).
    if (skillArray[i][2] == true) 
    {
      continue; //no need to check for skills that are already unlocked
    }

    var totalSkillReqs = skillArray[i][1];
    var genres = totalSkillReqs.split(',');

    for (x = 0; x < genres.length; x++) //loops through the genres array. E.g. for 10-Shounen,5-Isekai, it will loop twice.
    {
      switch (genres[x].substring(genres[x].indexOf("-") + 1)) //E.g. for 10-Shounen, the switch argument is "Shounen".
      {
        case ('Shounen'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-"))) //E.g. for 10-Shounen, numberReq = 10;
          if (ShounenAmount >= numberReq) {
            requiredCounter++;
          }
          break;

        case ('Romance'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-")))
          if (RomanceAmount >= numberReq) {
            requiredCounter++;
          }
          break;

        case ('SliceOfLife'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-")))
          if (SliceOfLifeAmount >= numberReq) {
            requiredCounter++;
          }
          break;

        case ('Isekai'):
          var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-")))
          if (IsekaiAmount >= numberReq) {
            requiredCounter++;
          }
          break;
      }

      if (requiredCounter == genres.length) //If the counter = genres.length, it means all genres have met their requirement and thus, the skill is unlocked.
      {
        skillArray[i][2] = true;
        document.getElementById("Skill" + i + "Req").innerHTML = skillArray[i][3];
        exit = true;
      }
    }

    if (exit == true)
    {
      break;
    }
  }
}

function checkJobReq() {
  var exit = false;
  for (i = 1; i < jobArray.length; i++)
  {
    var requiredCounter = 0; //same use as in the checkSkillReq() function
    if (jobArray[i][1] == true)
    {
      continue;
    }

    var totalJobReqs = jobArray[i][4];
    var skillsRequired = totalJobReqs.split(',');

    for (x = 0; x < skillsRequired.length; x++) //Example: For "1,3" will loop twice. skillsRequired[0] = 1 and skillsRequired[1] = 3.
    {
      if (skillArray[skillsRequired[x]][2] == true)
      {
        requiredCounter++;
      }
      
      if (requiredCounter == skillsRequired.length)
      {
        jobArray[i][1] = true;
        document.getElementById('jobQty' + i).innerHTML = "UNLOCKED!";
        exit = true;
      }
    }

    if (exit == true)
    {
      break;
    }
  }
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

function loadJobReqs() {
  for (i = 1; i < jobArray.length; i++) {
    var htmlLine = "";
    totalSkillReqs = jobArray[i][4].split(",");

    for (x = 0; x < totalSkillReqs.length; x++) //e.g. totalSkillReqs[0] = 1, totalSkillReqs[1] = 3.
    {
      htmlLine += "S" + totalSkillReqs[x] + " Req.";
      if (x != totalSkillReqs.length - 1)
      {
        htmlLine += " + ";
      }
    }

    document.getElementById("jobCost" + i).innerHTML = htmlLine;
    if (i == jobArray.length - 1)
    {
      break;
    }
  }

  for (i = 1; i < merchArray.length; i++) {
    merchArray[i][2] = merchArray[i][1] + (merchArray[i][3] * merchArray[i][1] * 0.2);
    document.getElementById("merchCost" + i).innerHTML = merchArray[i][2];
  }
}

function loadSkillReqs()  {
  for (i = 1; i < skillArray.length; i++)
  {
    var skillsID = document.getElementById("Skill" + i + "Req");
    var htmlLine = "";
    var genres = skillArray[i][1].split(",");  //e.g. [0] = 1-Shounen, [1] = 1-Romance, [2] = 1-SliceOfLife, [3] = 1-Isekai
    
    for (x = 0; x < genres.length; x++)
    {
      htmlLine += genres[x].substring(0, genres[x].indexOf("-")) + " " + genres[x].substring(genres[x].indexOf("-") + 1);
      if (x != genres.length - 1)
      {
        htmlLine += " + ";
      }
    }
    skillsID.innerHTML = htmlLine;
    if (i == skillArray.length - 1)
    {
      break;
    }
  }
}

function loadSkillImgs()
{
  for (i = 1; i < skillArray.length; i++)
  {
    var img = "media/" + skillArray[i][4];
    document.getElementById("Skill" + i + "Img").setAttribute("src", img);

    if (i == skillArray.length - 1)
    {
      break;
    }
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