//2.Convert the strings to title caps in a string array using Anonymous function

let strArray = ["murali"];
console.log("Before:",strArray);
let caps = function(nameArray){
    let emptyArray = [];
    let splitArray = nameArray[0].split("");
    splitArray[0] = splitArray[0].toUpperCase();
    emptyArray.push(splitArray.join(''));
    console.log("After :",emptyArray);
}
caps(strArray);
