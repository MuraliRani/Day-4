//3.sum of all numbers in array using IIFE Function:

const array = [1,2,3,4,5];
(function(){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    console.log("Sum of Array:" + sum);
})();
