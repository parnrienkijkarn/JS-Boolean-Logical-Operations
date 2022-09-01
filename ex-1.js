// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = false;
let isThai = true;

let isAllow = null; 

isAllow = isOver18 && !isThai && !hasCriminalBlacklist;
console.log(isAllow);
