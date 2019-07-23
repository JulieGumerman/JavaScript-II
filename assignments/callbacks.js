// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


//Callback Function
function logIt(item){
  console.log(item);
}

//Problem 1
function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}

getLength(items, logIt);



//Problem 2
function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

last(items, logIt);



//Problem 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

sumNums(3, 5, logIt);


//Problem 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

multiplyNums(2, 3, logIt);




//Problem 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)){
    return cb(true);
  } else {
    return cb(false);
  }
}

contains("kleenex", items, logIt);



/* STRETCH PROBLEM */

const arrayWithDuplicates = [5, 5, 7, 4, 4, 4, 3, 3, 2, 2, 2, 2, 8];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noRepeats = array.filter((item, index) => {
    return array.indexOf(item) >=index;
  });
  
  return cb(noRepeats);

}

removeDuplicates(arrayWithDuplicates, logIt);