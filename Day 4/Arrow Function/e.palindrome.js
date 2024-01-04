//5.Return all the palindromes in an array using Anonymous Function:


let PalindromeWords=["level", "hello", "radar", "world", "madam", "racecar"];

let palindrome=(array)=>{
    let result;
    for(let i=0;i<array.length;i++){
            let result = array[i].split("").reverse().join("");
            console.log(result);
    }
    
}
palindrome(PalindromeWords);
