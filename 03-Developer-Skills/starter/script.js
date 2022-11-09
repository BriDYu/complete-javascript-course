// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2022 - birthYear;

// console.log();

// console.log(calcAge(1996));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// let max = Math.max(...temperatures);
// let min = Math.min(...temperatures);
// console.log(...temperatures);
// console.log(max);
// let tempAmp = max - min;
// console.log(tempAmp);

// let calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }

//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

// let calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (max < temps[i]) max = temps[i];
//     if (min > temps[i]) min = temps[i];
//   }

//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures, [-10, 20, 14, 15, 16]));

const printForecast = arr => {
  let resultString = ``;
  for (let i = 0; i < arr.length; i++) {
    resultString += `... ${arr[i]}\u00B0C in ${i + 1} days `;
  }
  return resultString;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
