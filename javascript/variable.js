// Whole-script strict mode syntax
// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'jooyoung';
    console.log(name);
    name = 'hello';
    console.log(name);

}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는것 입니다.)
// has no block scope(블록을 철저히 무시한다.)

{
    age = 4;
    var age;
}

console.log(age);

// 3.Contant, r(read only)
// use const whenever possible
// only use let if variable needs to change.

// Note!
// Immutable data type : premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS 
// favor immutable data type always for a few reasons:
// 왠만하면 값을 할당한후 다시는 변경되지는 값을 데이터 타입을 사용하여라.
// - security      (그 이유는 보안상의 이유)
// - thread safety 
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single items: number, string, boolean, null,  undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1 // decimal number (소수점)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new , dont's use it yet)
const bigInt = 12345623312312412512512512512512512512512125125120n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting} , type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) , 변수의 값을 붙일수 있다.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// template literals(string) 을 사용하지 않을경우
console.log('value:' + helloBob + 'type:' + typeof helloBob);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//nudefined
let x;  // let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
// 나중에 맵이나 자료구조에서 고유의 식별자가 필요하거나 동시에 다발적으로 일어나는 일들을 우선순위가 주고싶을때
// 정말 고유한 식별자가 필요할때 사용한다
const symbol = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value : ${gSymbol1.description} , type: ${typeof gSymbol1}`);

// object, real-lif object, data structure
const jooyoung = { name: 'jooyoung', age: '26' };
jooyoung.age = '27'

// 5. Dynamic typeing : dynamically typed language
// 선언할때 어떤 타입인지 선언하지않고 프로그램이 동작할때(Runtime) 할당된 값에 따라서 타입이 변경 될 수 있다.
let text = 'hello';

console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);






