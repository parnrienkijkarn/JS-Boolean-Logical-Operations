// Exercise #2: Promotion Conditions

// Start coding here
let memberLevel = "Gold";
let lastMonthPaid = 4001;

let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasNotBoughtProductFromITCategory = true;
let hasNotAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion = lastMonthPaidMoreThan4000 && !isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent || !isPlatinum;


console.log(hasPromotion);
