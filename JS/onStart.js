function startUp() {
  introduction();
  populateButtons();
  createJobDivsCreateElement();
  createMerchDivsCreateElement();
  createSkillsDivsCreateElement();
  move();
  buttonPressed("ShounenAmount");
  populateNames();
  loadJobReqs();
  loadSkillReqs();
  updateGUI(); //stops page from "not having the Qty's until a button is pressed" problem.
}

function introduction() {
  document.getElementById('jobs').style.visibility = "hidden";
  document.getElementById('merch').style.visibility = "hidden";
  document.getElementById('skills').style.visibility = "hidden";
  document.getElementById('waifus').style.visibility = "hidden";
}

function populateNames() {
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
}

function populateButtons() {
  for (i = 1; i < animeArray.length; i++) {
    var animeImgJS = document.createElement('img');
        animeImgJS.setAttribute('id', animeArray[i][0] + 'ID');
        animeImgJS.setAttribute('class', 'GenreButtons');
        animeImgJS.setAttribute('src', 'media/' + animeArray[i][0] + '_button.png');
        animeImgJS.setAttribute('onclick', "buttonPressed('" +  animeArray[i][0] + "Amount')");
        animeImgJS.style.visibility = "hidden";

        document.getElementById('clickerButtons').appendChild(animeImgJS);
  }
}

function populateWaifus() {
  for (i = 1; i < waifuArray.length; i++) {
    var waifuImgJS = document.createElement('img');
        waifuImgJS.setAttribute('class', 'WaifuButtons');
        waifuImgJS.setAttribute('src', 'media/' + waifuArray[i][1]);
        waifuImgJS.setAttribute('onclick', "changeWaifu('" + waifuArray[i][1] + "')");

        document.getElementById('waifus').appendChild(waifuImgJS);
  }
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
