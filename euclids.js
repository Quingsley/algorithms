'use strict';
// find gcd using euclidean algorithm
const getGCD = function(a,b) {
    if(a < b) {
        let temp = a;
        a = b;
        b = temp;
       
    }
    if(b === 0) {
        return a;
    } else {
         let rem = a % b;
         a = b;
         b = rem;
        return getGCD(a,b);
       
     }
}

let num1 = +prompt('Find GCD of two numbers:\nEnter Num1:');
let num2 = +prompt('Enter Num2:')

let gcd = getGCD(num1,num2);
console.log(gcd);