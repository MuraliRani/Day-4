//2.Convert the strings to title caps in a string array using Arrow function

let strArray = ["murali"];
console.log("Before:", strArray);

let caps = (nameArray) => {
    let emptyArray = [];
    let splitArray = nameArray[0].split("");
    splitArray[0] = splitArray[0].toUpperCase();
    emptyArray.push(splitArray.join(''));
    console.log("After:", emptyArray);
}

caps(strArray);
