// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasNoCriminalBlacklist = true;
let isThai = true;

let isAllow = null; 

isAllow = isOver18 && hasNoCriminalBlacklist || !isThai;
console.log(isAllow);
