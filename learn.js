// Count the words in the String 
let str = "abajkjdfdkfj"; 
freq= {}; 
for(let ch of str)
{
freq[ch] = (freq[ch] ?? 0) +1 ; 
}
console.log(freq); 

// Find the largest element in the array . 

let arr = [1,2,3,4,5,23,0,2,34,34,45343,3433343]; 
let largest = -1 ; 
for(let i =0 ;i<arr.length;i++)
{ 
     if(arr[i]>largest)
        arr[i] = largest ; 
}
console.log(largest); 

// Swap Functionality. 


let a =5 ; 
let b =10 ; 

a=a+b ;
b=a-b; 
a=a-b ; 
console.log("Here is the Swapping Logic and the swapped value");
console.log(a,b); 