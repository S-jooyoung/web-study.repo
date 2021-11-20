// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

// 1. Literals and properties 문자그대로의 , 특성
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

//bad
function print(name, age) {
    console.log(name);
    console.log(age);
}

print('jooyoung', 26);

//good
function print2(person) {
    console.log(person.name);
    console.log(person.age);
}

const jooyoung = { name: "jooyoung", age: 26 };
print2(jooyoung);

// with JavaScript magic (dynamically typed language)
// can add properties later
jooyoung.hasJob = true;
console.log(jooyoung);

//can delete propeties later
delete jooyoung.hasJob;
console.log(jooyoung);

// 2. Computed properties  , 계산된 properties
// key should be always string
console.log(jooyoung.name);
console.log(jooyoung['name']);
jooyoung['hasJob'] = true;
console.log(jooyoung.hasJob);