//Question:
// It's the fourth quater of the Super Bowl and your team is down by 4 points. You're 10 yards away from the endzone, if your team doesn't score a touchdown in the next four plays you lose. On a previous play, you were injured and rushed to the hospital. Your hospital room has no internet, tv, or radio and you don't know the results of the game. You look at your phone and see that on your way to the hospital a text message came in from one of your teamates. It contains an array of the last 4 plays in chronological order. In each play element of the array you will receive the yardage of the play and the type of the play. Have your function let you know if you won or not.

// What you know:
// Gaining greater than 10 yds from where you started is a touchdown and you win.
// Yardage of each play will always be a positive number greater than 0.
// There are only four types of plays: "run", "pass", "sack", "turnover".
// Type of plays that will gain yardage are: "run", "pass".
// Type of plays that will lose yardage are: "sack".
// Type of plays that will automatically lose the game are: "turnover".
// When a game ending play occurs the remaining (plays) arrays will be empty.
// If you win return true, if you lose return false.

//Answer:
function didWeWin(plays){
    let win = 0
   for(i=0;i<plays.length;i++){
     if(plays[i][1] === "pass" || plays[i][1] === "run"){
       win+= plays[i][0]
       console.log(win)
     }else if(plays[i][1] === "sack"){
       win -= plays[i][0]
        console.log(win)
     }else if(plays[i][1] === "turnover"){
       return false;
   }
    }
    return win > 10 ? true : false
}