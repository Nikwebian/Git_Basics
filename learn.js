// Count the words in the String 
let str = "abajkjdfdkfj"; 
freq= {}; 
for(let ch of str)
{
freq[ch] = (freq[ch] ?? 0) +1 ; 
}
console.log(freq); 