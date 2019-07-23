// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myYard () {
  console.log("Yay, I have a yard");
  
  function myDog() {
    console.log("No, it's my yard");
  }
  myDog();
}

let dogRulesChange = myYard();

dogRulesChange;

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return function() {
    count = count + 5;
    return count;
  }
};

const countByFives = counter();
console.log(countByFives());
console.log(countByFives());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {

    const countmobile = {
      "decrement": function(num1){
        return num1 - 3;
      },
      "increment": function(num1) {
        return num1 + 4;
      }
    }

    let incrementally = countmobile.increment(6);
    let decrementally = countmobile.decrement(7);
    
    return `increment: ${incrementally} and decrement: ${decrementally};`
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

console.log(counterFactory());

