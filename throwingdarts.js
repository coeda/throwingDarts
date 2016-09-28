function scoringFunction (score){
  if (score < 5){
    return 10;
  } else if (score >= 5 && score <= 10){
    return 5;
  } else {
    return 0;
  }
}

function scoreThrows(arr){
  let totalScore = 0;
  for(let i = 0; i < arr.length; i++){
    totalScore += scoringFunction(arr[i]);
  }
  if(totalScore === (arr.length) * 10){
    totalScore += 100;
  }
  return totalScore;
}

console.log(scoreThrows([1,2,3,4]));