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


// -----------------------------------------------------------------------------------------//


// Q1. make a string out of an array

const fruits1 = ['apple', 'banana', 'orange'];

console.log(fruits1.toString());

// Q2. make an array out of a string

console.clear();
const fruits3 = ["사과","키위","바나나","자두"]; // boom!!

// Q3. make this array look list this: [5,4,3,2,1]
const array = [1,2,3,4,5];
console.log(array.reverse());

// Q4. make new array without hte first two elements
const array1 = [1,2,3,4,5];
array1.splice(1,1);
console.log(array1);



class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88), 
];

// Q5. find a student with the score 90
console.clear();
students.forEach((student) => {
    if(student.score == 90){
        console.log(student);
    }
})


// Q6. make an array of enrolled students
console.clear();
const student_enrolled = new Array();
students.forEach((student)=>{
    console.log(student.enrolled);
    student_enrolled.push(student.enrolled);
})
console.log(student_enrolled);

// Q7. make an array containing only the students' scores
const stu_score = new Array();
students.forEach((student) =>{
    stu_score.push(student.score);
})
console.log(stu_score);

// Q8. check if there is a student with the score lower than 50
students.forEach((student)=> {
    if(student.score < 50){
        console.log(student);
    }
});


// Q9. compute students' average score
console.clear();
let sum = 0;
for (let student of students){
    sum = sum + student.score;
}
let sum_score = sum / students.length;
console.log(sum_score);

// Q10. make a string containing all the scores
// result should be: '45,80,90,66,88'
console.log(stu_score.toString());

// Bonus! do Q10 sorted in ascending order
// result should be: '45,66,80,88,90'

console.log(stu_score.sort().toString());