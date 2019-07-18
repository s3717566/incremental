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
