// elegible for vote or not
let age = prompt("tell me your age");
if (age===null) {
    console.error("you cancelled it ..");
}else{
    if (age.trim()==="") {
        console.error("please enter something!");
    }
    else{
        age = Number(age);
        if (isNaN(age)) {
            console.error("please enter a number...");
        }else{
            if (age>=18) { console.log("you can vote"); }
            else{ console.log("you can not vote"); }
        }
    }
}

// print the multiplication table of 5
for (let i = 1; i < 11; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}

// same for 38
for (let i = 1; i < 11; i++) {
    console.log(`38 x ${i} = ${38*i}`);
}

// how many num b/w 1 to 15 greater than 8 loop and count conditionally
let count = 0;
for (let i = 0; i < 16; i++) {
    if (i>8) {
        count++
    }
}
console.log(`total count is ${count}`);

// ask user for password and print access status hardcoded correct password . Compare with user input
let password = "hey1234";
let pass = prompt("tell your password");
if (pass === null) {
    console.error("you cancelled it....");
}else{
    if (pass===password) {
        console.log("Matched!");
    }else{ console.log("Not matched");}
}

// While -> works till the condn is true 
// start
// while(end){
// ...your code
// change
// }
let i = 1;
while (i<11) {
    console.log("hi");
    i++;
}


// 3 attemps to enter password if right early ->stop , if not "account locked"
let attempts = 0;
let opened = false;
let pwd = "hey1234";
let passward = prompt("give passward");
attempts++;
if (passward === pwd) opened =true;
while (passward!== pwd) {
    if (attempts===3) {
        console.error("account locked");
        break;
    }
    pwd = prompt("give passward");
    if (passward === pwd) opened =true;
    attempts++;
}
if(opened === true) console.log("account opened");

