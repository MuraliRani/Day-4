//4.Return all the prime numbers in an array using Arrow Function:

    const array=[2, 3, 5, 6, 7, 8, 9, 11, 13, 17, 19, 23];

    let prime=()=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0 || array[i]%3==0 || array[i]%5==0 || array[i]%7==0){
            
        }else{
            console.log(array[i]);
        }

    }
    };
    prime();
