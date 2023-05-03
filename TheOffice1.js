// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

//Answer:

//p:assess overall happiness numbers in total
//r: if <= 5 return 'get out now' else return 'nice work champ'
//e:


function outed(meet, boss){
    let total = 0
    let team = 0
  //total the scores in array together and collect number of team members. Then divide team member scores by the total amount of team members. Return an answer based of that.
     for(let i in meet){
       total += meet[i]
       team++
       if(i == boss){
         total += meet[i]
       }
     }
    if (total / team > 5){
      return 'Nice Work Champ!'
    }else{
      return 'Get Out Now!'
    }
  }