//7.Remove Duplicates From an Array using IIFE function

let DuplicateArray = [1, 2, 2, 3, 4, 4, 5, 5, 6];

    (function(arr){
        const a = new Set(arr);
        //automatically removes the duplicates and stores it as an object of entries
        console.log(Array.from(a));
        //this method is to get back the entries to array form
    })(DuplicateArray);
