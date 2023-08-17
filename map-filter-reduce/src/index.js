// import React from 'react';
import emojipedia from  "./emojipedia"

const meanings = emojipedia.map(function(entry){
   return entry.meaning.substring(0, 100);
});

console.log(meanings);
// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.


//Filter - Create a new array by keeping the items that return true.

// const bigNumbers = numbers.filter(function(num){
//     return num > 10;
// })

// console.log(bigNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.

// const reduceNumbers = numbers.reduce(function(acc, num){
//     return acc + num;
// })

// console.log(reduceNumbers);
// //Find - find the first item that matches from an array.

// const newNumber = numbers.find(function(num){
//     return num > 10;
// })

// console.log(newNumber);

// //FindIndex - find the index of the first item that matches.

// const newNumberIndex = numbers.findIndex(function(num){
//     return num > 10;
// })

// console.log(newNumberIndex);
