'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`)

// const calcAverage = (scores) => {
//   let sum = scores.reduce((acc, curr) => {
//     acc += curr;
//     return acc
//   }, 0)
//   return sum/scores.length;
// }

// console.log(calcAverage([3,4,5]))

// // let dolphinsScores = [44, 23, 71];
// // let koalasScores = [65, 54, 49];

// let dolphinsScores = [85, 54, 41];
// let koalasScores = [23, 34, 27];

// const avgDolphins = calcAverage(dolphinsScores);
// const avgKoalas = calcAverage(koalasScores);

// console.log(avgDolphins)
// console.log(avgKoalas)

// const checkWinner = (avg1, avg2) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//   } else {
//     return `No team wins!`
//   }
// }

// console.log(checkWinner(avgDolphins, avgKoalas))


//coding challenge #2

// const calcTip = (arrOfBills) => {
//  let tips = [];
//  let totals = [];
//  arrOfBills.forEach((bill) => {
//   bill >= 50 && bill <= 300 ? tips.push(bill * .15) : tips.push(bill * .2);
//  }) 
//  for (let i = 0; i < tips.length; i++) {
//   totals.push(tips[i] + arrOfBills[i]);
//  }
//  return `Array of Bills [${arrOfBills}], Array of Tips [${tips}], Array of Totals [${totals}]`;
// }

// console.log(calcTip([125, 556, 44]))

//coding challenge #3

// const mark = {
//   name: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBMI: function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI
//   }
// }
// const john = {
//   name: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBMI: function(){
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI
//   }
// }

// console.log(mark.calcBMI() > john.calcBMI() ? `${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s BMI (${john.BMI})` : `${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s BMI (${mark.BMI})` )

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const calcTips = (billsArray) => {
  let tips = [];
  let totals = [];
  for (let i = 0; i < billsArray.length; i++){
    if (billsArray[i] >= 50 && billsArray[i] <= 300){
      tips.push(billsArray[i] * .15)
    } else {
      tips.push(billsArray[i] * .2)
    }
    totals.push(tips[i] + billsArray[i]);
  }
  return console.log(billsArray, tips, totals)
}

console.log(calcTips(bills))

const calcAverage = (arr) => {
  let sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0)
  return sum / arr.length;
}

console.log(calcAverage([1,2,3,4,5,6,7,8,9,10]))

