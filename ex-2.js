// Exercise #2: Promotion Conditions

// Start coding here
let memberLevel = "Gold";
let lastMonthPaid = 4001;

let lastMonthPaidMoreThan4000 = true;
let isSunday = false;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = false;
let isPlatinum = true;

let hasPromotion = lastMonthPaidMoreThan4000 && !isSunday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent || !isPlatinum;


console.log(hasPromotion);
