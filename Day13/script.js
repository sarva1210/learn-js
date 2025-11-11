// fnc sayHello that prints hello js
function sayHello() {
    console.log("hello js");
}
sayHello();


// fnc add(a,b) that returns their sum sum and log the result
function add(a,b) {
    return a+b;
}
let ans = add(1,2);
console.log(ans);


// fnc with default parameter name = guest that prints hi <name>
function greet(guest = "Guest"){
    console.log(`Hi ${guest}`);
}
greet("sarva");


// use rest parameters to make a fnc that adds unlimited nums
function addunlimitednum(...nums) { 
    console.log(nums);
}
addunlimitednum(1,2,3,4,5);

function addunlimitednums(...nums) { 
    let sum = 0;
    nums.forEach(function(val){
        sum = sum+val;
    });
    console.log(sum);
}
addunlimitednums(1,2,3,4,5,6);

function addunlimitednumbs(...nums) { 
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log(sum);
}
addunlimitednumbs(1,2,3,4);

function addunlimitednumber(...nums) {
    let ans = nums.reduce(function(acc, val){ //reduce->convert array into 1 value 
        return acc + val
    }, 0); //0 is the value of acc 
    console.log(ans);
}
addunlimitednumber(1,2,3,4,5,6,7,8,9);


// create an IIFE that prints "i run instantly!"
(function(){
    console.log("i run instantly");
})();


// make a nested fnc where the inner one prints a variable from the outer one
function parent() {
    let a = 12;
    function child(){
        console.log(a);
    }
    child();
}
parent();


// create an array of 5 fruits . Add one at the end and one from the beginning
let arr = ["apple" , "guava" , "watermelon" , "banana", "grapes"];
arr.push("mango");
arr.unshift("orange");


// use a for loop to print all elements of an array
let arr2 = [1,2,3,4,5,6];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}


// create an obj person with keys name, age and city and print each key's value
let obj = {
    name: "sarva",
    age: 19,
    city:"bhopal",
};

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
}


// use setTimeout() to log "Time's up!" after 2 seconds
setTimeout(()=>{
    console.log("Time's up!");
},2000);