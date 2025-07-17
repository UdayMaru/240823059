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

