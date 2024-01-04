//8.Rotate an array by k times using anonymous function:

    const a = [1,2,3,4,5];
    let k=2;  // Number of rotations

    (function(arr,k){
        for(let i = 0; i < k; i++){
            arr.unshift(arr.pop()); // Remove the last element and add it to the beginning
        }
        console.log(a);
    })(a,k)
