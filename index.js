const name = "uday"
console.log(name)

const surname = "maru"
console.log(surname)



//1 check even or odd

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
}else {
    console.log("odd")
}


//2 find the maximum of two numbers

let number1 = 5;
let number2 = 9;
if(number1>number2){
    console.log("number 1 is greater")
}else{
    console.log("number2 is greater")
    
}


//3 check leap year

let year = 2021;
if(year % 4 == 0){
    console.log(year+"year is leap")
}else{
    console.log(`${year}+"year is not leap"`)
}


//4 sum of natural number

let n = 10;
let sum = 0;
for(let i = 1; i<=n; i++){
    sum +=i;
}
console.log(`sum of first ${n} natural number is: ${sum}`)

//5 factorial of a number

let fa = 4;
let result = 1;
for(let i=1;i<=fa;i++){
    result *=i;
}
console.log(result)

//6 print multiplication table

let num =7;
let rows = 10;
for(let i = 1; i <= rows; i++){
    console.log(num + "x" + i + "=" +(num*i))
}

//7 reverse a number

let n1=12345;
let result1=n1.toString().split('').reverse().join('');
console.log(result1);


//8 palindrome check(number)

let nnum = 121;
let reverse1 = nnum.toString().split('').reverse().join('');
if(nnum == reverse1){
    console.log(`${nnum}is palindrom`)
}else{
    console.log(`${nnum}is not palindrom`)
}


//9 check prime number

let number3=7;
let prime = number3>1;
for(let i=2;i<number3;i++){
    if(number3 % i==0){
        prime=false;
        break;
    }
}
console.log(prime ? `${number3}prime` : `${number3}not prime`)


//10 count digits in a number

let num1=5023;
let count=num1.toString().length;
console.log("Digits",count)

//11 sum of digits
let number4 = 123;
let sum2 = 0;
while (number4 > 0) {
   let lastDigit = number4 % 10;
   sum2 += lastDigit;
number4 = Math.floor(number4 / 10);
}
console.log("Sum of digits:", sum2); 


//12 Check Armstrong Number
const number5 = 153; 

const numStr = String(number5);
const numberOfDigits = numStr.length;
let sumOfPowers = 0;

for (let i = 0; i < numberOfDigits; i++) {
    const digit = parseInt(numStr[i]);
    sumOfPowers += digit ** numberOfDigits;
}

if (sumOfPowers === number5) {
    console.log(`${number5} is an Armstrong number.`);
} else {
    console.log(`${number5} is not an Armstrong number.`);
}

//13Generate Fibonacci Series

const num2 = 5; 

let a = 0;
let b = 1;

if (n >= 1) {
  console.log(a);
}
if (n >= 2) {
  console.log(b);
}

for (let i = 2; i < num2; i++) {
  let nextTerm = a + b;
  console.log(nextTerm);
  a = b;
  b = nextTerm;
}

//14 Check Vowel or Consonant
const char = 'a';

const vowels = 'aeiou';
const lowerChar = char.toLowerCase();

if (vowels.includes(lowerChar)) {
  console.log(`'${char}'vowel.`);
// } else {
//   console.log(`'${char}'consonant.`);
}

//15 :  Simple Calculator
const num3 = 4;
const num4 = 2;

// Addition
const sum5 = num3 + num4;
console.log(`Sum: ${sum5}`);

// Subtraction
const difference = num3 - num4;
console.log(`Difference: ${difference}`);

// Multiplication
const product = num3 * num4;
console.log(`Product: ${product}`);

// Division
const quotient = num3 / num4;
console.log(`Quotient: ${quotient}`);

//16