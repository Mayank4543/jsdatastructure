let name="mayank";
let str=""
for(let i =name.length-1;i>=0;i--){
    str+=name[i];
}
console.log(str);
let str1= "racecar";
for(let i =0;i<str1.length-1;i++){
    if(str1[i]!==str1[str1.length-1-i]){
        console.log("not plaindrome");
        break;
    }else{
        console.log("palindrome")
        break;
    }
}
// Find the Largest Number in an Array
function findlargestNumber(arr){
    let largest=arr[0];
    for(let i =1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        
    }
    return largest;
}
console.log(findlargestNumber([3,5,7,2,8,1]));

// Calculate the Factorial of a Number
function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5));
// Check for Prime Number
function isPrime(num){
    if(num<=1) return false;        
    for(let i =2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
// Count the Occurrences of a Character in a String
let str3= "banana";
function countCharacterOccurrences(str,char){
    let count =0;
    for(let i =0;i<str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
}
console.log(countCharacterOccurrences(str3,'a'));
let str4= "banana";
function countoccurances(str){
    let freq={};
    for(let char of str4){
      if(freq[char]){
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
    return freq;
}
console.log(countoccurances(str4));