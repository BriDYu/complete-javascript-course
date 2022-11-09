//JS FUNDAMENTALS PART 1

// Values and Variables
// let country = 'United States of America'
// let continent = 'North America'
// let population = 331900000;

// console.log(country)
// console.log(continent)
// console.log(population)

// // Data Types
// let isIsland = 'false'
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// const now = 2022;
// const ageBrian = now - 1996;
// const ageSangmi = now - 1995;
// console.log(ageBrian, ageSangmi);

// console.log(ageBrian * 2, Math.floor(ageSangmi / 2));

// const firstName = 'Brian'
// const lastName = 'Yu'
// console.log(firstName + ' ' + lastName);

//Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const massMark = 78; //in kilograms
// const heightMark = 1.69; //in meters
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95; //in kilograms
// const heightMark = 1.88; //in meters
// const massJohn = 85;
// const heightJohn = 1.76;

// let markBMI = massMark / heightMark ** 2;
// let johnBMI = massJohn / heightJohn ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);


// const firstName = 'Brian';
// const job = 'Instructor';
// const birthYear = 1996;
// const year = 2022;

// const brian = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(brian);

// const brianNew = `I'm ${firstName} , a ${year - birthYear} year old ${job}!`;
// console.log(brianNew)

// console.log(`${typeof brianNew}`)

// function higherBMI(massMark, heightMark, massJohn, heightJohn){
//   let markBMI = massMark / heightMark ** 2;
//   let johnBMI = massJohn / heightJohn ** 2;

//   return markBMI > johnBMI ? `Mark's BMI is higher than John's!` : `John's BMI is higher than Mark's`;
// }

// console.log(higherBMI(78, 1.69, 92, 1.95));
// console.log(higherBMI(95, 1.88, 85, 1.76));

// function intersection(arrOfArrs){
//   let newArr = arrOfArrs.flat();
//   let cache = {};
//   let resultArr = [];
//   newArr.forEach(element => {
//     if (!cache[element]){
//       cache[element] = 1;
//     } else {
//       cache[element]++
//     }
//     if (cache[element] === arrOfArrs.length){
//       resultArr.push(element);
//     }
//   });
//   return resultArr;
// }

//5 falsy values: 0, '', null, undefined, NaN

// function whoIsTheWinner(team1, team2){
//   let sumTeam1 = team1.reduce((acc, curr) => {
//     acc += curr;
//     return acc
//   }, 0)
//   let sumTeam2 = team2.reduce((acc, curr) => {
//     acc += curr;
//     return acc
//   }, 0)
//   let avgTeam1 = sumTeam1 / team1.length;
//   let avgTeam2 = sumTeam2 / team2.length;
//   console.log(avgTeam1, avgTeam2)
//   if (avgTeam1 === avgTeam2 && avgTeam1 >= 100 && avgTeam2 >= 100) {
//     return `Both Teams Win!`
//   } else if (avgTeam1 > avgTeam2 && avgTeam1 >= 100){
//     return `Dolphins Win!`
//   } else if (avgTeam1 < avgTeam2 && avgTeam2 >= 100){
//     return `Koalas Win!`
//   } else {
//     return `No One Wins :(`
//   }
// }

// // let scoresDolphins = [96, 108, 89];
// // let scoresKoalas = [88, 91, 110];

// // console.log(whoIsTheWinner(scoresDolphins, scoresKoalas))

// // let scoresDolphins = [97, 112, 101];
// // let scoresKoalas = [109, 95, 123];

// // console.log(whoIsTheWinner(scoresDolphins, scoresKoalas))

// let scoresDolphins = [97, 112, 101];
// let scoresKoalas = [109, 95, 106];

// console.log(whoIsTheWinner(scoresDolphins, scoresKoalas))

// const day = 'tuesday';

// switch(day) {
//   case 'monday':
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory vides');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('thursday event');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   default:
//     console.log('Not a valid day');
// }

// function language(string) {
//   switch(string.toLowerCase()) {
//     case 'chinese' || 'mandarin':
//       return `MOST number of native speakers!`;
//       break;
//     case 'spanish':
//       return `2nd place in number of native speakers!`;
//       break;
//     case 'english':
//       return `3rd place`;
//       break;
//     case 'hindi':
//       return `Number 4`;
//       break;
//     case 'arabic':
//       return `5th most spoken language`;
//       break;
//     default:
//       return `Great language too :D`;
//   }
// }

// console.log(language('HINDI'))

// function tipCalculator(number) {
//   let tip;
//   number >= 50 && number <= 300 ? tip = number * .15 : tip = number *.2;
//   return `The bill was ${number}, the tip was ${tip}, and the total value
//   ${number + tip}` 
// }

// console.log(tipCalculator(222))

/* 
Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);

updateHobbies('yoga', 2); 
// { yoga: 2, baking: 0, piano: 0 }

updateHobbies('baking', 3);
// { yoga: 2, baking: 3, piano: 0 }

updateHobbies(); 
// 'tracker has been reset!'
*/

function hobbyTracker(arrayOfHobbies){
  let cache = {};
  arrayOfHobbies.forEach((hobby) => {
    cache[hobby] = 0;
  })
  console.log(cache);
  return function(hobby, hours){
    if (hobby === undefined || hours === undefined) {
      for (const keys in cache){
        cache[keys] = 0;
      }
      return 'tracker has been reset!'
    } else {
      cache[hobby] += hours;
    }
    return cache;
}
}

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}