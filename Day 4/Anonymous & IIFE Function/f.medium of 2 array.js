//6.Return median of two sorted arrays of the same size using Anonymous function:

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

(function(nums1, nums2){
  const merged = [...nums1, ...nums2].sort((a, b) => (a - b));
  console.log(merged);
  const n = merged.length;
  if (n % 2 === 0) {
     console.log((merged[n / 2 - 1] + merged[n / 2]) / 2);
     //         5               6  =11      /2   =  5.5                 
  }else{
    console.log(merged[Math.floor(n / 2)]);
  }
})(arr1,arr2);
