//3.sum of all numbers in array using Arrow Function:

const numArray = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
};
sumArray(numArray); // Output the sum of the numbers in the array
