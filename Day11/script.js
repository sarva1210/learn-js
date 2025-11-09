// function -> block of code , can use (call) code again - again 

function doSomething(name, age, email) {
    // console.log(name, age, email); or
    console.log(arguments);
    console.log(arguments[0]); // to get single value
} //parameters
doSomething("sarva", 19, "sarva@gmail.com"); //arguments

// parameters-> variables listed in a function definition
// arguments-> actual values passed to the function when it is called

function hi(name) {
   console.log("Hi " + name); 
}
hi("sarva");

function ab(a,b,...c) {
    console.log(a,b,c);
}
ab(1,2,3,4,5,6);

// variable hoisting -> When you write code with variables, js moves the variable declaration to the top before running code.
// cannot use like this
//            a();
//            var a = function(){} 

// but can use like this
b();
function b(){
    console.log("js");
}

// function hoisting -> When you use function declaration, entire function goes to top.
sayHello();
function sayHello() {
  console.log("Hello");
}

// parameters in js->[required, destructed, rest, default]
// no arguments send to parameter then values will be undefined
function abcd({name,age}){
    console.log(name,age);
}
abcd({name:"sarva", age: "19"}); //destructed

function value(...val) {
    console.log(val);
}
value(1,2,3,4,5,6,7,8,9); //rest

function values(a,b,c) {
    console.log(a,b,c);
}
values(1,2) //default

// arguments in js->[positional, default, spread]

function cd(a,b,c,d) {
    console.log(a,b,c,d);
}//positional
cd(1,2,3,4); //value dena zaruri hai (1,2,null,4) if c nhi dena toh kuch value dena padega

function ef(a,b=3,c,d) {
    console.log(a,b,c,d);
}//default
ef(1,undefined,3,4);

function gh(a,b,c,d) {
    console.log(a,b,c,d);
}//spread
let arr = [1,2,3,4];
gh(...arr);

// classic function //nested function
function abcd() {
    function defg() {
        console.log("defg will work");
    }
    defg(); //nested function -> function inside function
}
abcd();

// scope chain
let a = 12; //globel scope
function abcd() {
    let b = 14; //scoping
    function defg() {
        console.log(b);
    }
    defg();
}
console.log(a);
// abcd();

// Immediately Invoked Function Expression [IIFE] -> to make private variable
(function(){
    let balance = 30000;
})();

// more functions in js [arrow function, fat arrow, anonymous, higher order, callback, first class, pure function, impure function]

function hey(){ console.log("hey hey") } //normal function
let fnc=()=>{ console.log("hey hey hey") } //fat arrow or arrow function
hey();fnc();

// anonymous -> no name function
// higher order function -> one function that return another function or a function that accept one more function parameter

function heys() {  //higher order function
    return function(){}
}


// call back ->A callback is a function which is passed as an argument to another function and then that function calls it later.
function heyss(a) {}
heyss (function(){}) //call back fcn

// first class ->function is treated like normal value ....stored/used in variable, pass, return

// pure function->A pure function is a function that always gives the same output for the same input and it has no side effects.
function add(x,y){
  return x + y;
}
// impure function->A function that changes external data OR depends on external data
let total = 0;
function addd(x){
  total = total + x;  // modifies external variable
  return total;
}


// scoping in js[global scope -> function ke bahar,function scope -> function ke ander]
let ab = 12; //global
function hi() {
    let b = 14 ; //function 
    console.log(b);
} hi();
console.log(ab);

// understanding[closures,scoping rule]

// clousers-> func that return func but returning fnc will use variable of the parent function , also a higher order function
function abcd() {
    let a = 12;
    return function(){
        console.log(a);
    }
}