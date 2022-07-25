'use strict';
// recursion
let n = Number(prompt('Input a number n: '));
if( n < 1) {
 console.log('invalid input');
} 

function odd(n) {
    if(n === 1) {
        return 1;
    }
    return odd(n - 1) + 2;
}

let num = odd(n);
console.log(`the ${n}th odd number is ${num}`);

//factorial of a number
/*let m = Number(prompt('Enter a number x: '));
    function factorial(x) {
        if(x === 0) {
            return 1;
        } else {
            return x * factorial(x - 1);
        }
    }
let result = factorial(m);
console.log(`The factorial of ${m} is ${result}`);*/


