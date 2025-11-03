let groupedNumbers = [[1,3,5], [2,4,6]];

document.getElementById("result").innerHTML = groupedNumbers;

// The code down below was written manually by me onto this.
// I made this code at home like a week ago, but retyped it here off of memory.
// I recently learned about XOR bit shifts, but I don't know how they work, 
// nor do I remember how to use them, so I'm deciding to go with a simple Math.random function.
// The only parts of the code I looked up help for to retype it was the randomInt function
// and the parenthesized part of the for-loop (let i = 0, etc.) because I couldn't remember how to do them.
// Everything else I did by myself off of memory and prior knowledge of Javascript.

/*
function randomInt() {
  return Math.floor(Math.random() * 2);
}

let countA = 0;
let countB = 0;
let totalCount = 0;
let totalIterations = 0;

for (let i = 0; i < 1000; i++) {
  while (countA < 20 && countB < 20) {
    if (randomInt() === 0) {
      countA++;
    } else {
      countB++;
    }
  }
  totalCount += countA + countB;
  countA = 0;
  countB = 0;
  totalIterations++;
}

let totalAverage = totalCount / totalIterations;

console.log(`Total of countA: ${countA}`);
console.log(`Total of countB: ${countB}`);
console.log(`Total average: ${totalAverage}`);
*/
