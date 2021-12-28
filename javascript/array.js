'use strict';


//  Array

// 1.Declaration
const arr1 = new Array();
const arr2 = [1,2];


// 2.Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);


//  3.Looping over an array
// print all fruits
console.clear();
for(let i=0;  i < fruits.length ; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
console.clear();
fruits.forEach((fruit) =>console.log(fruit));

// 4. Addtion. deletion. copy
// push: add an item to the end
fruits.push("딸기", "복숭아");
console.log(fruits);

// pop:remove an item from the ned
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("딸기","복숭아");
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// remove an item by index position
fruits.push("딸기", "복수아", "레몬");
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,"사과", "수박");
console.log(fruits);

// combine two arrays
const fruits2 = ["자몽", "코코넛"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("사과"));
console.log(fruits.indexOf("복수아"));

// includes
console.log(fruits.includes("수박"));

//lastIndexOf
console.clear();
console.log(fruits.lastIndexOf("사과"));


