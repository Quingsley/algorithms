'use strict';
// proving a number is odd
let num = +(prompt('Enter an odd number: '))
if( num > 0) {
    function isOdd(x) {
     if(x > 0) {
        return x===1 ? true : isOdd(x - 2);
      }  else {
        return false;
      } 
}
    let res = isOdd(num);
    console.log(res);
} else {
    console.log('odd numbers starts from 1');
}