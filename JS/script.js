function introduction() {
  document.getElementById('jobs').style.visibility = "hidden";
  document.getElementById('merch').style.visibility = "hidden";
  document.getElementById('skills').style.visibility = "hidden";
  document.getElementById('waifus').style.visibility = "hidden";
}

function populateButtons() {
  for (i = 1; i < animeArray.length; i++) {
    var animeImgJS = document.createElement('img');
        animeImgJS.setAttribute('id', animeArray[i][0] + 'ID');
        animeImgJS.setAttribute('class', 'GenreButtons');
        animeImgJS.setAttribute('src', 'media/' + animeArray[i][0] + '_button.png');
        animeImgJS.setAttribute('onclick', "buttonIncrement('" +  animeArray[i][0] + "Amount')");
        animeImgJS.style.visibility = "hidden";
        document.getElementById('clickerButtons').appendChild(animeImgJS);
  }
}

function loadNames() {
  introduction();
  populateButtons();
  createJobDivsCreateElement();
  createMerchDivsCreateElement();
  createSkillsDivsCreateElement();

  for (i = 1; i < jobArray.length; i++) {
    document.getElementById('job' + i + 'Title').innerHTML = jobArray[i][0];
  }

  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merch' + i + 'Title').innerHTML = merchArray[i][0];
  }

  for (i = 1; i < skillArray.length; i++) {
    document.getElementById('skill' + i + 'Title').innerHTML = skillArray[i][0];
  }

  for (i = 1; i < merchArray.length; i++) {
    document.getElementById('merchQty' + i).innerHTML = merchArray[i][3];
  }

  for (i = 1; i < merchArray.length; i++) {
    merchArray[i][2] = merchArray[i][1] + (merchArray[i][3] * merchArray[i][1] * 0.2);
    document.getElementById("merchCost" + i).innerHTML = "$" + merchArray[i][2].toFixed(2);
  }

  loadJobReqs();
  loadSkillReqs();


  updateGUI(); //stops page from "not having the Qty's until a button is pressed" problem.
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

    jobTitleJS.setAttribute('id', 'job' + i + 'Title');
    jobReqJS.setAttribute('id', 'jobCost' + i);
    jobImgJS.setAttribute('src', 'media/' + jobArray[i][5]);

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
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

function createSkillsDivsCreateElement() {
  for (i = 1; i < skillArray.length; i++) {
    var jobsDivJS = document.getElementById('skills');

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

    jobTitleJS.setAttribute('id', 'skill' + i + 'Title');
    jobReqJS.setAttribute('id', 'skill' + i + 'Req');
    jobImgJS.setAttribute('id', 'skill' + i + 'Img');

    innerJobDivJS.appendChild(jobImgJS);
    innerJobDivJS.appendChild(jobTitleJS);
    innerJobDivJS.appendChild(jobReqJS);
    jobsDivJS.appendChild(innerJobDivJS);
  }
}

function updateGUI() {

  document.getElementById("ShounenAmountText").value = ShounenAmount.toFixed(0); //can't make dynamic with genre.toFixed(0). Need to figure out how to use the argument as a reference to the variable.
  document.getElementById("RomanceAmountText").value = RomanceAmount.toFixed(0);
  document.getElementById("SliceOfLifeAmountText").value = SliceOfLifeAmount.toFixed(0);
  document.getElementById("IsekaiAmountText").value = IsekaiAmount.toFixed(0);

  TotalAnimeAmount = ShounenAmount + RomanceAmount + SliceOfLifeAmount + IsekaiAmount;
  document.getElementById("TotalAnimeAmountText").value = TotalAnimeAmount.toFixed(0);

  document.getElementById('MoneyAmountText').value = "$" + parseFloat(MoneyAmount).toFixed(2);

  if (intro5 == true)
  {
    initialText();
  }
}

function initialText() {
  if (intro1 == true)
  {
    // document.getElementById('textAreaId').innerHTML = "Click the buttons up top to watch anime!";
      if (TotalAnimeAmount == 1)
      {
        document.getElementById('textAreaId').innerHTML = "That didn't seem so bad. Maybe I'll watch a few more. For science. \n" +  document.getElementById('textAreaId').innerHTML;
        // document.getElementById('jobs').style.visibility = "visible";
        intro1 = false;
      }
}
if (intro2 == true)
{
  // document.getElementById('textAreaId').innerHTML = "Click the buttons up top to watch anime!";
    if (TotalAnimeAmount == 10)
    {
      document.getElementById('textAreaId').innerHTML = "I think I'm actually learning from watching anime... wtf? I need to keep watching... \n" + document.getElementById('textAreaId').innerHTML;
      document.getElementById('skills').style.visibility = "visible";
      intro2 = false;
    }
}
if (intro3 == true)
{
  // document.getElementById('textAreaId').innerHTML = "Click the buttons up top to watch anime!";
    if (TotalAnimeAmount == 20)
    {
      document.getElementById('textAreaId').innerHTML = "Maybe I can find a job with these skills I've acquired... Yeah, that makes sense to me. Pretty obvious, actually. \n\n" + document.getElementById('textAreaId').innerHTML;
      document.getElementById('jobs').style.visibility = "visible";
      intro3 = false;
    }
}

if (intro4 == true)
{
  // document.getElementById('textAreaId').innerHTML = "Click the buttons up top to watch anime!";
    if (TotalAnimeAmount == 40)
    {
      document.getElementById('textAreaId').innerHTML = "Holy... Look at these fat stacks, I'm making bank. Maybe it wouldn't hurt to buy a keychain of my favourite show. \n\n" + document.getElementById('textAreaId').innerHTML;
      document.getElementById('merch').style.visibility = "visible";
      intro4 = false;
    }
}

if (intro5 == true)
{
  // document.getElementById('textAreaId').innerHTML = "Click the buttons up top to watch anime!";
    if (TotalAnimeAmount == 100)
    {
      document.getElementById('textAreaId').innerHTML = "Anyone that comes between me and my waifu will have to taste my nippon steel. \n\n" + document.getElementById('textAreaId').innerHTML;
      document.getElementById('waifus').style.visibility = "visible";
      intro5 = false;
    }
}
}

function timer() {
  updateGUI();
  // waifuBonus();
  checkSkillReq();
  checkJobReq();
  checkAnimeButtonReq();
  moneyFromJobs();
  animeFromMerch();
}
setInterval(timer, 100);

function buttonIncrement(genre) {
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
  updateGUI();
}

function moneyFromJobs()  {
  var x = 0;  //this saves the index for which job the player is currently on.
  for (i = 1; i < jobArray.length; i++)
  {
    if (jobArray[i][1] == false)
    {
      break;
    }
    else
    {
      x = i;
      MoneyAmount += jobArray[x][2];
    }

    if (i == jobArray.length - 1)
    {
      break;
    }
  }

}

function animeFromMerch() {
  var ShounenAmountIncrementLocal = 0;
  var RomanceAmountIncrementLocal = 0;
  var SliceOfLifeAmountIncrementLocal = 0;
  var IsekaiAmountIncrementLocal = 0;

  for (i = 1; i < merchArray.length; i++)
  {
    switch(merchArray[i][6])
    {
      case ("Shounen"):
      ShounenAmountIncrementLocal += merchArray[i][3] * merchArray[i][4];
      break;

      case ("Romance"):
      RomanceAmountIncrementLocal += merchArray[i][3] * merchArray[i][4];
      break;

      case ("SliceOfLife"):
      SliceOfLifeAmountIncrementLocal += merchArray[i][3] * merchArray[i][4];
      break;

      case ("Isekai"):
      IsekaiAmountIncrementLocal += merchArray[i][3] * merchArray[i][4];
      break;

      default:
      break;
    }
  }
  ShounenAmountIncrement = ShounenAmountIncrementLocal;
  RomanceAmountIncrement = RomanceAmountIncrementLocal;
  SliceOfLifeAmountIncrement = SliceOfLifeAmountIncrementLocal;
  IsekaiAmountIncrement = IsekaiAmountIncrementLocal;

  increment();
}

function increment()
{
  ShounenAmount += ShounenAmountIncrement;
  RomanceAmount += RomanceAmountIncrement;
  SliceOfLifeAmount += SliceOfLifeAmountIncrement;
  IsekaiAmount += IsekaiAmountIncrement;
}

function loadJobReqs() {
  for (i = 1; i < jobArray.length; i++) {
    var htmlLine = "Requires: ";
    totalSkillReqs = jobArray[i][4].split(",");

    for (x = 0; x < totalSkillReqs.length; x++) //e.g. totalSkillReqs[0] = 1, totalSkillReqs[1] = 3.
    {
      htmlLine += skillArray[totalSkillReqs[x]][0];
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
}

function loadSkillReqs()  {
  for (i = 1; i < skillArray.length; i++)
  {
    var img = "media/" + skillArray[i][4];
    document.getElementById("skill" + i + "Img").setAttribute("src", img);

    var skillsID = document.getElementById("skill" + i + "Req");
    var htmlLine = "";
    var genres = skillArray[i][1].split(",");  //e.g. [0] = 1-Shounen, [1] = 1-Romance, [2] = 1-SliceOfLife, [3] = 1-Isekai

    for (x = 0; x < genres.length; x++)
    {
      if (parseInt(genres[x].substring(0, genres[x].indexOf("-"))) > 0) //dont print reqs with 0
      {
        if (x != 0 && htmlLine != "")
        {
          htmlLine += " + ";
        }
        htmlLine += genres[x].substring(0, genres[x].indexOf("-")) + " " + genres[x].substring(genres[x].indexOf("-") + 1);

      }

    }
    skillsID.innerHTML = htmlLine;
    if (i == skillArray.length - 1)
    {
      break;
    }
  }
}

function buyMerch(i) {
  if (MoneyAmount >= merchArray[i][2]) { //if you have more animes than the current price needed, u can buy it
    MoneyAmount = MoneyAmount - merchArray[i][2];
    merchArray[i][3] += 1; //changes qty of jobArray[1][3]'s
    merchArray[i][2] = merchArray[i][1] + (merchArray[i][3] * merchArray[i][1] * 0.2);
    document.getElementById("merchCost" + i).innerHTML = "$" + merchArray[i][2].toFixed(2);
    document.getElementById('merchQty' + i).innerHTML = merchArray[i][3];
    updateGUI();
  }
}

function changeWaifu(Waifu) {
  document.getElementById("CurrentWaifuDiv").innerHTML = '<img src="media/' + Waifu + '"> <br/>' + Waifu.split('.')[0];
}

// function waifuBonus() {
//
//   var currentWaifu = document.getElementById("CurrentWaifuDiv").getElementsByTagName("img")[0].getAttribute("src");
//   switch(currentWaifu)
//   {
//     case ("media/YAOMOMO.png"):
//     ShounenAmountIncrement * 3;
//     break;
//
//     case ("media/FUTABA.PNG"):
//     RomanceAmountIncrement * 3;
//     break;
//
//     case ("media/ANNA.png"):
//     SliceOfLifeAmountIncrement * 3;
//     break;
//
//     case ("media/MILIM.jpg"):
//     IsekaiAmountIncrement * 3;
//     break;
//
//     default:
//     break;
//   }
// }

function darkmode() {
  if (document.getElementById("darkmode").innerHTML == "dark mode") {
    document.documentElement.style.setProperty('--main-bg-color', "#353C51");
    document.documentElement.style.setProperty('--second-bg-color', "#152642");
    document.documentElement.style.setProperty('--main-font-color', '#767D92');
    document.getElementById('darkmode').innerHTML = "light mode";
  } else {
    document.documentElement.style.setProperty('--main-bg-color', "#ffd3f1");
    document.documentElement.style.setProperty('--second-bg-color', "#e0bed5");
    document.documentElement.style.setProperty('--main-font-color', '#000000');
    document.getElementById("darkmode").innerHTML = "dark mode";
  }
}

function welcomeBack() {
  // if (localStorage.getItem("AnimeAmount of Animes") === null) {
  // window.alert("Welcome to Matt's Weeb Simulator! owo");
  //     document.getElementById('textAreaId').innerHTML = "Youve just graduated college. You come home, exhausted, wanting to relax. Opening your laptop, you see your netflix subscription is still running \n" +
  // "You open it up through instinct, however you've watched all there is to be watched. Howevver, something in the bottom left sticks out of your recommended. \n" +
  // "My Hero Acadamia. Curious, you click it, telling yourself that its just a cartoon and youll probably lose interest soon. You were wrong. Your journey begins. \n" +
  // "Welcome to Weeb simulator, fellow degenerate.";
  // + document.getElementById('textAreaId').innerHTML;
  //   } else {
  //     // window.alert("Welcome back Onii-Chan! uwu");
  //     document.getElementById('textAreaId').innerHTML =
  // "Youve just graduated college. You come home, exhausted, wanting to relax. Opening your laptop, you see your netflix subscription is still running \n" +
  // "You open it up through instinct, however you've watched all there is to be watched. Howevver, something in the bottom left sticks out of your recommended. \n" +
  // "My Hero Acadamia. Curious, you click it, telling yourself that its just a cartoon and youll probably lose interest soon. You were wrong. Your journey begins. \n" +
  // "Welcome to Weeb simulator, fellow degenerate."
  //  + document.getElementById('textAreaId').innerHTML;
  //   }
}


// window.onload = welcomeBack();
