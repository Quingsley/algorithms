'use strict';

//quicksort algorithm

let myArray = [0,7,4,2,3,0,1,4,3,5];
let lowerBound = 0;
let upperBound = myArray.length - 1;


const partition = function(arr,lb,ub) {
    let pivot = arr[lb];
    let start = lb;
    let end = ub;
    while(start < end) {
        while(arr[start] <= pivot) {
            start++;
        }
        while(arr[end] > pivot) {
            end--;
        }

        if(start < end) {

            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

        }
    }
    //swap if condition is false
    let temp = arr[end];
    arr[end] = arr[lb];
    arr[lb] = temp;
   
    return end;
}
//partition(myArray,lowerBound,upperBound);
const quickSort = function(arr,lb,ub) {
    let lock;
    if(lb < ub) {
        lock = partition(arr,lb,ub);
        quickSort(arr,lb,lock-1);
        quickSort(arr,lock + 1,ub);
    }
 return arr;
}

const sort = quickSort(myArray,lowerBound,upperBound);
console.log(sort);