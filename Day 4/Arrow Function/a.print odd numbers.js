//1.Print odd number in an array using Arrow function:

const numArray = [1,2,3,4,5,6,7,8,9,10];
let printOdd_Number = ()=>{
    console.log("Odd Numbers are:");
    for(let i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 != 0){
            console.log(numArray[i]);
        }
    }
}
printOdd_Number();
