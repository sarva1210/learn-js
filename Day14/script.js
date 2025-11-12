// Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
function runTwice(fn) {
    fn();
    fn();
}
runTwice(function(){
    console.log("hello")

});


// Create one pure function that always returns the same output for a given input,and one impure function using a global variable.
function pure(a,b) {
    console.log(a+b);
}
pure(1,2)
pure(1,2)

let global=0;
function impure(c) {
    global++;
    console.log(c+global);
}

impure(2) //3
impure(2) //4


// Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function ab({name,age}) {
    console.log(name,age);
}

ab({name: "sarva", age:19});


// Demonstrate the difference between a normal function and an arrow function when used as object methods (the `this` issue).
function bc() {
    console.log(this);
}
bc();

let obj = {
    name: "sarva",
    fnc: function(){
        console.log(this);
    },
    fnc2: ()=>{ //arrow takes value from the parent function "here parent is obj and obj is a global function"
        console.log(this);
    }
};
obj.fnc();
obj.fnc2();

let object = {
    name: "sarva",
    fnc: function(){
        let fnc2 = ()=>{ 
            console.log(this);
    }
    fnc2();
    },
};
object.fnc();

let objt = {
    name: "sarva",
    fnc: function(){
        function fnc2(){ 
            console.log(this);
    }
    fnc2();
    },
};
objt.fnc();

// Given an array of numbers, use `map()` to create a new array where each number is squared.
let arr = [1,2,3,4,5];
let newarr = arr.map(function(val){
    return val*val;
});
console.log(newarr);


// Use `filter()` to get only even numbers from an array.
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let arr3 = arr2.filter(function(val){
    return val%2===0;
});
console.log(arr3);


// Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
let salary = [1000, 2000, 3000];
let ans = salary.reduce(function(acc,val){
    return acc+val;
},0);
console.log(ans);


// Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 characters).
let names = ["anvi", "harsh", "rishi", "emma", "sid", "sam"];
let nme = names.some(function(val){
    return val.length>3; 
});
console.log(nme); //true 

let every = ["anvi", "harsh", "rishi", "emma", "sid", "sam"];
let evy = every.every(function(val){
    return val.length>3; 
});
console.log(evy); //false


// Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
let user = {
    name: "sarva",
    age: 19,
    email: "srv@gmail",
}
Object.freeze(user);
console.log(user);

let user2 = {
    name: "sarva",
    age: 19,
    email: "srv@gmail",
};

Object.seal(user2);

user2.age = 20;          
user2.city = "Indore";    
delete user2.email;       

console.log(user2);


// Create a nested object (`user → address → city`) and access the city name inside it.

let users = {
    name: "sarva",
    age: 19,
    address: {
        city: "bhopal",
        pincode: 462002
    }
};

console.log(users.address.city);
