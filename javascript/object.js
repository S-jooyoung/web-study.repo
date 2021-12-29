
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

// 3. Property value shorthand
const person1 = {name: 'bob' , age:2 };
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('jooyoung', 30);
console.log(person4);

// 4. Constructor function
function Person(name,age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jooyoung);
console.log('age' in jooyoung);

// 6. for..in vs for..of
// for (key in obj)

for(key in jooyoung){
    console.log(key);
}

//for (value of iteralbe)
const array = [1,2,3,4,5]

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}



// 7. Fun cloning
// object.assign(dest, [obj1 ,obj2, obj3...])
const user = {name : 'jooyoung' , age:'20'};
const user2 = user;
console.log(user);

//old way
const user3 = {}
for(key in user){
    user3[key] = user[key];
}

console.log(user3);

//new way
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size: 'big'}
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
