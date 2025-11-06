// Ask user 5 numbers. Count how many are positive
counter = 0;
for (let i = 1; i < 6; i++) {
    let num = +prompt("give number");
    if(num>=0) counter++;
}
console.log(counter);

// ATM simulator - allow 3 withdraws start with 1000 balance . ask withdrawal amt 3 times. if enough-> deduct, else-> print "insufficient balance"
let balance = 1000;
let flag = false;
let count = 0;
while (balance>0 && count!==3) {
    let withdrawal = +prompt("how much do you want to withdrawal: ");
    count++;
    if (withdrawal<=balance) balance -= withdrawal;
    else{
        flag=true;
        break;
    }
}
if (flag === true) {
    console.log("insufficient amount");
}


// do while in js
let i = 1;
do {
    console.log(i);
    i++;
} while (i<11);

// recursion in js->function calling function
function abc(n){
    if (n===0) return;
    console.log(n);
    abc(n-1);
}
abc(4);

// continue
for (let i = 0; i < 11; i++) {
    if(i===5) continue;
    console.log(i);
}