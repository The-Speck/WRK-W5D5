// class Clock {
// 
//   constructor() {
//     let date = new Date();
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
// 
//     this.printTime();
// 
//     setInterval(this._tick.bind(this), 1000);
//   }
// 
//   printTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }
// 
//   _tick() {
//     this.seconds++;
//     this.printTime();
//   }
// }
// 
// const clock = new Clock();


const readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
// 
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft === 0) {
//     completionCallback(sum);
//     reader.close();
//   } else {
//     reader.question("give a numba? ", (num) => {
//       num = parseInt(num, 10);
//       sum += num;
//       console.log(sum);
//       addNumbers(sum, numsLeft - 1, completionCallback);
//     });
//   }
// }
// 
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`IS ${el1} GREATER THAN ${el2}?????? `, (ans) => {
    if (ans === "yes") {
      callback(true);
    } else if (ans === "no") {
      callback(false);
    } else {
      console.log("Don't play dumb");
      askIfGreaterThan(el1, el2, callback);
    }
  });
}

// askIfGreaterThan(1,2, function(ans) { console.log(ans); });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    console.log("Finished");
    // reader.close();
    return outerBubbleSortLoop(madeAnySwaps);
  }
  askIfGreaterThan(arr[i], arr[i + 1], (bool) => {
    madeAnySwaps = false;
    if (bool) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];  
      madeAnySwaps = true; 
    } 
    console.log(arr);
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
  });
}

// innerBubbleSortLoop([2,1,3], 0, false, function (stuff) {console.log(stuff);});

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      reader.close();
      return sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  };
};

// Example
class Lamp {
  constructor(name) {
    this.name = name;
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp("Everybody");

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"