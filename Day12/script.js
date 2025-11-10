// arrays-> one or more than one value..., having place to keeps more than 1 member
let arr = [1,2,3,4,5,6,7,8,9];
console.log (arr[5]); //to access elements arr[1];

//  2 types to create an array 
let arr2 = [];
let arr3 = new Array();

// fnc in arrays[push , pop , shift , unshift , indexof , array destructuring , """"""filter , some , map , reduce"""""" , spread operator , slice , reverse , sort , join , toString ]
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.pop(); //removes last value
arr4.shift(); // ek value ko hata deta hai 1 removed
arr4.unshift(1);
// arr4.indexOf(4);  shows index of 4
let[a, ,b] = arr4;
let arr5 = arr4.filter(function(val){
    return val < 5;
});
let arr6 = [...arr4]; //spread operator

// iterating over arrays using [for loop , forEach]
let arr7 = [...arr4];
for (let i = 0; i < 5; i++) {
    console.log(arr7[i]);
}

let arr8 = [...arr4];
arr8.forEach(function(val){
    console.log(val);
})

// what are obj in js[key-value pair]" obj.something->accessing properties "
let obj = {
    name:"sarva",
    age:19,
    email:"sarva@gmail.com",
    socials:{
        instagram:"hellohi",
        x:"yoooohiii"
    }
};
obj.name; //accessing name
delete obj.name; //deleting name
obj.socials.x; // nested objects

let obj2 = new Object();