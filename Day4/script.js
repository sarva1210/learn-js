// operators in js
// 1 arithmatic operators
// + - * / %  **   //practised in console

//2 assignment operator
//  = += -= *= /= %=
// = value dene mai use
let a = 12;
// += value ko perticular se bhadana
// a+=13;

// -=
// a-=13;

// *=
// a*=2;

// /=
// a/=2;

// %= 
// 12%=4;

// 3 comparison operators
// == === != !== >< >= <=

// == not strict compare
12 == '12'; //true

// === strict compare
12 === '12'; //false

//!= never use this checks if it is not equal
12 != '12';

//!== use this insted
12 !== '12';

//>
12>13;

//<
12<13;

//>=
12>=12;

//<=
12<=14;

// 4 logical operators
// && || !

// &&
// t && t = t
// t && f = f
// f && t = f
// f && f = f


// ||
// t || t = t
// t || f = t
// f || t = t
// f || f = f

// !
// t ! f
// f ! t
if(!(12>13)){
    console.log("hey");
}

// 5 ternary operator
// condition ? doThis: doThat;

12>13 ? console.log("hey") : console.log("hello");

// 6 type checking operators
// typeof 
typeof 12; //num
// instanceof
let arr = []; // arr instanceof Array // true

// 7 string operators
// +(for concatination)
"harsh"+"sharma"

// 8 spread/ rest operator ~~~~~~ {very imp in mordern js}
// spread
let arr2 = [1,2,3,4];
let arr3 = [...arr2];
// rest
function abcd(a,b,c,...rest){
}
abcd(1,2,3,4,5);

// 9 nullish coalesing operator
12>13?? console.log("sorry"); //false
null?? console.log("sorry"); //sorry

// 10 optional chaining
// ?.(safe access to nested values)
let obj = {
    name:{
        first:"harsh",
        second:{
            sf:"singh",
            sl:"something",
        },
    },
};

obj?.name?.first;

// variable hoisting in js 
// variable ko banane se pehele bhi use kiya ja sakta hai 
// breaks in 2 pieces //declaration (top of the file)& initialization(variable ke saath reheta hai)
// console.log(b);
// var b = 12;

//let b = 12; //temporal dead zone for b above this line