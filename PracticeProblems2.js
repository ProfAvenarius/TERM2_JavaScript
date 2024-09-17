// // Description:Practice Problems #2
// // Author: DC Elliott
// // Date: 2024-09-16-7

// // 1.Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).

console.log("Problem #1");

const prompt = require('prompt-sync')(); //Allows for prompt when running in node.js,for 
                                         //this problem and those below Must be active for 
                                         //all input calls to function.
const RadiusInput = prompt('Enter the size of the radius: ');
let r = parseFloat(RadiusInput)

let circle = (rad) => (Math.PI*rad*rad).toPrecision(4)

console.log(circle(r));
console.log(" ");

// // 2. Simulate rolling a dice using random(). The function should allow the caller to
// // specify any number of sides, but default to 6 if no side count is
// // given: roll() (assume 6 sided, return random number between 1 and 6)
// // vs. roll(50) (50 sided, return number between 1 and 50).[You might need Math
// // class or specifically Math.random() to produce a random number in JavaScript]

console.log("Problem #2");

const diceInput = prompt('Enter the number of 6 sided dice rolled: ');

let n = parseInt(diceInput)
let dice = []
let rollD6 = (n) => {for (let i = 1; i < n +1; i++) {
    dice.push(Math.floor((Math.random()*6+1)))
    }
    return dice
}

console.log(rollD6(n))
console.log(" ");
// // 3. Write a function that converts values in Celsius to Farenheit: convert(0) should
// // return "32 F".
console.log("Problem #3");


const CelInput = prompt('Enter the temperature in Celsius: ');
let c = parseFloat(CelInput);

let ConvertTemp = (Cel) => {
    Far = ((Cel * 9/5) + 32).toPrecision(3)
    return Far
}

console.log(ConvertTemp(c));
console.log(" ");

// // 4. Modify your solution to the previous function to allow a second
// // argument: "F" or "C", and use that to determine what the scale of the value is,
// // converting to the opposite: convert(122, "F") should return "50 C".

console.log("Problem #4");



const TempInput = prompt('Enter the temperature: ');
const UnitInput = prompt('Enter the unit (F or C): ');

let c1 = parseFloat(TempInput);
let u1 = UnitInput.toUpperCase()

let ConvertUnitTemp = (num, unit) => {
    if (unit == 'F') {
        temp1 = ((num - 32) * 5/9).toPrecision(3)
        unit1 = "Celsius"
        unit2 = "Farhenheit"
    }else {
        temp1 = ((num * 9/5) + 32).toPrecision(3)
        unit1 = "Farhenheit"
        unit2 = "Celsius"
    }
    console.log(`${c1} in ${unit2} is equal to ${temp1} in ${unit1}`);
}

ConvertUnitTemp(c1,u1);
console.log(" ");

// 5. Function taking any number of arguments (Numbers), returning true if they are all
// less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.
console.log("Problem #5");

nums = [1,2,3,2,1,121,1212,5454]
fails = 0

let numsCheck50 = (numsList) => {
    numsLen = numsList.length
    for (i=0; i < numsLen; i++)
        if (numsList[i] > 50) {
            fails++;
        };
if (fails == 0) {
    console.log(`All of ${numsLen} numbers are less than 50`);
    }
else {
    console.log(`Of ${numsLen} total numbers, the number greater than 50: ${fails}`);        
    };
};
numsCheck50(nums);
console.log(" ");

// 6. Function allowing any number of arguments (Numbers), returning their sum: sum(1,
// 2, 3) should return 6.

console.log("Problem #6");

const NumberNums = prompt('How many numbers would you like to enter? ');
n3 = parseInt(NumberNums); //the prompt input enters a string, got to convert...
let NumList = [];

for (i=1; i <= n3; i++ ) {
    const InputNums = prompt(`Enter the ${i}/${n3} number: `);
    n2 = parseInt(InputNums);
    NumList.push(n2);
}

numsLen = NumList.length;

let SumNum = (Nums) => {
    let totes = 0;
    for (i =0; i < numsLen; i++) {   
        totes = totes + Nums[i];
    }
console.log(`The total is ${totes}`);
}

SumNum(NumList);
console.log(" ");

// 7. Function to check if a number is a multiple of 3 (returns true or false)

console.log("Problem #7");


const Num3Input = prompt('Enter a number to see if it is a multiple of 3: ');

let num3 = parseInt(Num3Input)

let CheckMult3 = (n3) => {
    n3 % 3 == 0 ? console.log("This is a multiple of 3!") : console.log("This is not a multiple of 3...");
}

CheckMult3(num3)
console.log(" ");

// 8. Function to subtract a discount % from a total. If no % is given, return the original
// value.

console.log("Problem #8");


const NumInput1 = prompt('Enter a total requiring a discount: ');
const DiscInput = prompt('Enter a % discount: ');

let n1 = parseFloat(NumInput1);
let d1 = parseFloat(DiscInput);

let FindDiscPrice =(tot, disc) => {
    let price = 0;
    price = tot*(1-(disc || 0)/100);
    return price;
}


console.log(FindDiscPrice(n1,d1));
console.log(" ");

// 9. Function that takes a number of seconds as a Number, returning
// a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest
// minute.

console.log("Problem #9");


const secInput = prompt('Enter the number of seconds: ');
s = parseInt(secInput)

let MakeTime = (sec) => {
    let min1 = Math.floor(sec/60);
    min1 > 1440 ? days = Math.floor(min1/1440) : days = 0
    let min2 = min1 - days*1440
    min2 > 60 ? hours = Math.floor(min2/60) : hours = 0
    min3 = min2 - hours*60
    console.log(`${sec} seconds equates to: ${days} Days, ${hours} Hours, ${min3} Minutes.`);
}

MakeTime(s)
console.log(" ");

// 10. Modify your solution above to only include units that make sense: "1
// Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc

console.log("Problem #10");


const secInput1 = prompt('Enter the number of seconds: ');
s1 = parseInt(secInput1)

let MakeTime1 = (sec) => {
    let min1 = Math.floor(sec/60);
    min1 > 1440 ? days = Math.floor(min1/1440) : days = 0
    let min2 = min1 - days*1440
    min2 > 60 ? hours = Math.floor(min2/60) : hours = 0
    min3 = min2 - hours * 60
    days == 0 ? daysDsp = '' : daysDsp = `${days} Day, `
    hours == 0 ? hoursDsp = '' : hoursDsp = `${hours} Hrs, `
    min3 == 0 ? minDsp = '' : minDsp = `${min3} Min`
    console.log(`${sec} seconds equates to: ${daysDsp}${hoursDsp}${minDsp}.`);
}

MakeTime1(s1)
