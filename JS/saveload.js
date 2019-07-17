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

  updateGUI();
}
