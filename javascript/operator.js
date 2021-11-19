// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = couner + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, count: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, count: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  //x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater than
console.log(10 >= 6);   // greater tahn or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 
//finds the first truthy value , 처음으로 true가 나오면 멈춘다 한개만 true라도 true기 때문이다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statment
// nullableObject && nullableObject.something
// if (nullableObject != null){
//  nullableObject.something;   
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('🤣');
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion, 타입형을 신경쓴다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion, 타입형을 신경쓰지 않는다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const jooyoung1 = { name: "jooyoung" };
const jooyoung2 = { name: "jooyoung" };
const jooyoung3 = jooyoung1
console.log(jooyoung1 == jooyoung2);
console.log(jooyoung1 === jooyoung2);
console.log(jooyoung1 === jooyoung3);
console.log(jooyoung1 == jooyoung3);

//equlizy = puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);
// true, false, true, false, true , false

// 8. Conditional operators: if
// if, else if, else
const name = 'jooyoung';
if (name === 'jooyoung') {
    console.log("Welcome, jooyoung!");
} else if (name === 'coder') {
    console.log("You are amazing coder")
} else {
    console.log('unkwnon')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'jooyoung' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "Firefox":
        console.log("love you");
        break;

    default:
        console.log("same all!");
        break;
}

// 11. Loops
// while loop, while the condition is truthy
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while loop, body code is executer first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers
//(use continue)
let k = 0;

while (k <= 10) {

    if (k % 2 != 0) {
        k++;
        continue;
    }

    console.log(`k: ${k}`);

    k++;

}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
let j = 0;

while (j <= 10) {

    console.log(`j: ${j}`);
    j++;

    if (j == 9) {
        break;
    }
}