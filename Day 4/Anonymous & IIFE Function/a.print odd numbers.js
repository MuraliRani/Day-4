//1.Print odd number in an array using Anonymous function:

const numArray = [1,2,3,4,5,6,7,8,9,10];

const printOdd_Number = function(numArray){
    console.log("Odd Numbers are:");
    for(var i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 != 0){
            console.log(numArray[i]);
        }
    }
}
printOdd_Number(numArray);


//1.Print odd number in an array using IIFE function:

(function printOdd_Number(numArray){
    console.log("Odd Numbers are:");
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 != 0){
            console.log(numArray[i]);
        }
    }
})([1,2,3,4,5,6,7,8,9,10]);
