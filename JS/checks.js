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

        case ('Total'):
        var numberReq = parseInt(genres[x].substring(0, genres[x].indexOf("-"))) //E.g. for 10-Shounen, numberReq = 10;
        if (TotalAnimeAmount >= numberReq) {
          requiredCounter++;
        }
        break;
      }

      if (requiredCounter == genres.length) //If the counter = genres.length, it means all genres have met their requirement and thus, the skill is unlocked.
      {
        skillArray[i][2] = true;
        document.getElementById("skill" + i + "Req").innerHTML = skillArray[i][3];
        document.getElementById("skill" + i + "Req").style.color = "red";
        document.getElementById('textAreaId').innerHTML = "Unlocked " + skillArray[i][0] + "\n" + skillArray[i][3] + '\n\n' + document.getElementById('textAreaId').innerHTML;
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
        document.getElementById('textAreaId').innerHTML = "Unlocked " + jobArray[i][0] + "\n" + jobArray[i][3] + '\n\n' + document.getElementById('textAreaId').innerHTML;
        exit = true;
      }
    }

    if (exit == true)
    {
      break;
    }
  }
}
