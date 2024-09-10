// Description: Problems from Monday's class
// Author: David C. Elliott
// Date: Sept. 9/2024

// 1.	Create a variable label and assign it the value 
// "keyincollege". Create another variable tld and assign it 
// "ca". Create a third variable domainName that combines label 
// and tld to produce the value "keyincollege.ca".
console.log(" ");
console.log("PROBLEM 1");
console.log(" ");

let label = "keyincollege";
let tld = "ca";
let domainName;

domainName = label + "." + tld;

console.log(domainName);

// 2.	Create a variable isKeyin and assign it a boolean value 
// (true or false) depending on whether or not domainName is equal 
// to "keyincollege.ca". HINT: use === and don’t write true or 
// false directly.
console.log(" ");
console.log("PROBLEM 2");
console.log(" ");

let isKeyin = (domainName === "keyincollege.ca") 

console.log(isKeyin);


// 3.	Create a variable isNotKeyin and assign it the inverse boolean 
// value of isKeyin. HINT: if isKeyin is true, isNotKeyin should be false.
console.log(" ");
console.log("PROBLEM 3");
console.log(" ");

let isNotKeyin
isNotKeyin = !isKeyin

console.log(isNotKeyin);

// 4.	Create four variables byte1, byte2, byte3, byte4, and assign each of 
// these a value in the range 0-255.[You can assign any random numbers to 
// each byteN variable, like 198 or 110 or 1 or any number in the range of 0-255.
console.log(" ");
console.log("PROBLEM 4");
console.log(" ");

let byte1 = Math.floor(Math.random() * 256); 
let byte2 = Math.floor(Math.random() * 256);
let byte3 = Math.floor(Math.random() * 256);
let byte4 = Math.floor(Math.random() * 256);

dsp_byte1 = "Byte1 = " + byte1;
dsp_byte2 = "Byte2 = " + byte2;
dsp_byte3 = "Byte3 = " + byte3;
dsp_byte4 = "Byte4 = " + byte4;


console.log(dsp_byte1);
console.log(dsp_byte2);
console.log(dsp_byte3);
console.log(dsp_byte4);


// 5.	Create a variable ipAddress and assign it the value of combining your four 
// byteN variables together, separated by ".". For example: "192.168.2.1".
console.log(" ");
console.log("PROBLEM 5");
console.log(" ");

let ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4

console.log(ipAddress);

// 6.	Write code to display the multiplication table of a given integer.  
// Define any variable and assign it a value, like in following example: 
// your number is 15. I will test your code with changing the value of 
// the variable…
// var table = 15;// you need to define a variable like this and display its table…
// Expected Output:
// 15 X 1 = 15
// ...
// ...
// 15 X 10 = 150
console.log(" ");
console.log("PROBLEM 6");
console.log(" ");


let numChosen = 15;
let statement = "";

for (let i = 1; i < 11; i++) {
    result = i * numChosen
    statement = i + ' X ' + numChosen + " = " + result
    console.log(statement);
};

// 7.	Write code to display all even and odd numbers from first 100 
// numbers by using for loop and if condition.
console.log(" ");
console.log("PROBLEM 7");
console.log(" ");

let evenNum = [];
let oddNum = [];

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        evenNum.push(i)
    }else {
        oddNum.push(i)
    }
};

console.log(evenNum);
console.log(oddNum);

// 8.	By using the same concept of above question no.7, display the sum 
// of all even numbers from 100 numbers.
console.log(" ");
console.log("PROBLEM 8");
console.log(" ");

let evenSum = 0;
let evenLen = evenNum.length;

for (let i = 0; i < evenLen; i++) {
    evenSum += evenNum[i]
};

console.log(evenSum);

// 9.	A perfect number is a number whose divisors sum is equal to number itself:
// Write code to check whether a given number is “perfect number” or not. You 
// can again just define a variable and apply logic to check it.
console.log(" ");
console.log("PROBLEM 9");
console.log(" ");

givenNum = 496 //The number to be determioned of perfect
divisorNum = []

for (let i = 1; i < givenNum; i++) {
    if (givenNum % i == 0) {
        divisorNum.push(i)
    }
}
dsp_divisor = "The divisors of " + givenNum + " = " + divisorNum
console.log(dsp_divisor);

let divisorLen = divisorNum.length
let divisorTot = 0
let numResult = ""

for (let i = 0; i < divisorLen; i++) {
    divisorTot += divisorNum[i]
}

if (divisorTot === givenNum) {
    numResult = givenNum + " is a perfect number!"
}else {
    numResult = givenNum + " is not a perfect number..."
}

console.log(numResult);


// 10.	Write a program to determine whether a given number is prime or not
console.log(" ");
console.log("PROBLEM 10");
console.log(" ");

testNum = 929; //This is the number to be determined if prime or not
numDivisors = [];
primeResult = "";

for (let i = 1; i < (testNum+1); i++) {
    if (testNum % i == 0) {
        numDivisors.push(i)
    }
};

if (numDivisors.length == 2) {
    primeResult = testNum + " is Prime!"
}else {
    primeResult = testNum + " is not Prime..."
};

console.log(primeResult);
console.log(" ");