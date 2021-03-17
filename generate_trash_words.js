const profile = require("./profile.json");

function randomTrashWords(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function generateTrashWords(options) {
  const pharse = ["很簡單", "很容易", "很快", "很正常"];
  
  if(!options.job){
    return "Please pick a job"
  }

  let anwser = "";
  profile.results.find((profile) => {
    if (options.job === profile.job_en) {
      anwser = `身為一個${profile.job}，${randomTrashWords(
        profile.trash_word
      )}，${randomTrashWords(pharse)}吧`;
    }
  });

  return anwser;
}

module.exports = generateTrashWords;
