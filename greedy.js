'use strict';
// the change problem
let changeRequired = (prompt('Enter your change: '));
const checkInput = function(x) {
    let temp;
    if(isFinite(x) && x !== '') {
        temp = x;
    } else {
        alert('Invalid Input');
    }
    if(temp > 0 && temp < 1000){
        return temp;
    } else {
        alert('Change must be greater than 0 and less than 1000');
    }
}
let money = checkInput(changeRequired);
let currencies = [500,200,100,50,20,10,5,1];
let numberOfCoinsReturned = [];
let currrecyReturned = [];


let counter = 0;
function calculateChange(money) {
    if(!money) return;
    while(money) {
        if(money >= currencies[counter]) {
            let coins =Math.trunc(money / currencies[counter]);
            numberOfCoinsReturned.push(coins);
            currrecyReturned.push(currencies[counter]);
            money = money % currencies[counter];
        } 
         counter ++;
    }
    numberOfCoinsReturned.forEach((cur,i) => console.log(`Your change is ${cur}, ${currrecyReturned[i] > 49 ? currrecyReturned[i] + ' shilling note(s)' : currrecyReturned[i] + ' shilling coin(s)'}`));
    console.log(currrecyReturned);
    console.log(numberOfCoinsReturned);
    

}

calculateChange(money);
