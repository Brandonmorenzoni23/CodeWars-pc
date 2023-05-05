// You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

// The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

// Number of orders is always equal to number of people.

//Answer:

//p: choose what catering service to go with, first is 15, second is 20, third is 30 and if over 60 people a 20% discount, want to
//spend maximum that fits budget
//r:Return 1, 2, 3, or -1
//e:

function findCaterer(budget, people){
    let cater1 = people * 15
    let cater2 = people * 20
    let cater3 = people * 30 
    if (cater1 <= budget){
      return 1
    }
    if (cater2 <= budget){
      return 2
    }
     if(people > 60){
     cater3 = cater3 * .8
    }
     if (cater3 <= budget){
      return 3
    }
    if(budget < 15 || people < 1){
      return -1
    }
  }