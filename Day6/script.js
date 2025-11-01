// conditionals

let a = 12;
if(a>10){
    console.log("hey!!");
} else{
    console.log("bye bye!");
}

// 0 "" false NaN null undefined document.all (falsy)
// rest -> true

if(10){
    console.log("hey");
} else{
    console.log("goodbye!");
} //truthy

if(0){
    console.log("hie");
}else{
    console.log("byee");
} //falsy

if(12>13){
    console.log("12 is greater");
}else if(14>15){
    console.log("14 is greater");
}else if(15>16){
    console.log("13 is greater");
}else{
    console.log("non are true");
}

// ternary operator
12 > 13 ? console.log("yes") : console.log("nope");

// switch
switch(2){
    case 1:
        console.log("hi");
        break;
    case 2:    
        console.log("hie");
        break;
    case 3:    
        console.log("heyy");
        break;
    case 4:    
        console.log("hello");
        break;
    default:    
        console.log("default case");
}

// loops--> repeat things again & again
// straight forward loops-> repeats no value & no printing
// dynamic loops-> value and printing can be changed

// for loop start:end:change
for(let i=1; i<6; i++){
    console.log("loops");
}
// while loop
for(let i=50; i<61; i++){
    console.log(i);
}

for(let i=40; i>30; i--){
    console.log(i);
}

for(let i=50; i>41; i--){
    if(i==46 || i==44){
        console.log(i);
    }
}

for(let i=50; i>40; i--){
    if(i!==45 && i!==43){
        console.log(i);
    }
}

// do while loop

// for each loop

// for in loop

// for of loop  






// console.log();