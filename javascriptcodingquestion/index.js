let name = "mayank";
let str = ""
for (let i = name.length - 1; i >= 0; i--) {
    str += name[i];
}
// console.log(str);
let str1 = "racecar";
for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i] !== str1[str1.length - 1 - i]) {
        console.log("not plaindrome");
        break;
    } else {
        // console.log("palindrome")
        break;
    }
}
// Find the Largest Number in an Array
function findlargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }

    }
    return largest;
}
// console.log(findlargestNumber([3,5,7,2,8,1]));

// Calculate the Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(5));
// Check for Prime Number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Count the Occurrences of a Character in a String
let str3 = "banana";
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
// console.log(countCharacterOccurrences(str3,'a'));
let str4 = "banana";
function countoccurances(str) {
    let freq = {};
    for (let char of str4) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}
// console.log(countoccurances(str4));
// Tow SUM
let arr = [2, 7, 11, 15];
let target = 9;
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
let arr2 = [1, 2, [3, 4], [5, 6], 7, 8];
function flattenarray(arr2) {
    let result = [];
    for (let item of arr2) {
        if (Array.isArray(item)) {
            result.push(...flattenarray(item))
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flattenarray(arr2))

function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer); // purana timer hata do

        timer = setTimeout(() => {
            func.apply(this, args); // last wala hi chalega
        }, delay);
    };
}

function search(x) {
    console.log("searching", x);
}

const debouncing = debounce(search, 500);
// debouncing("app");
// debouncing("appl");
// debouncing("apple")
// convert nested object to dot notation
function dotnotation(obj, parentkey = "", result = {}) {
    for (let key in obj) {
        let newkey = parentkey ? parentkey + "." + key : key
        if (typeof obj[key] === 'object') {
            dotnotation(obj[key], newkey, result)
        } else {
            result[newkey] = obj[key];
        }
    }
    return result;
}
// console.log(dotnotation({ a: { b: { c: 10 } } }))
// Find First Non-Repeating Character
let str7 = "aabbcddee"

function nonrepeatingcharacter(str) {
    let map = {};
    for (let char of str) {
        if(map[char]){
             map[char]++;
        }else {
            map[char] = 1;   // FIXED: Pehli baar value set karna
        }
    }
    console.log(map)
    for (let char of str) {
        if(map[char]===1) return char;
    }

 return null;
}
// console.log(nonrepeatingcharacter(str7))
// deepclone object 
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }

  return copy;
}

// Test
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

original.b.c = 100;

console.log(original);  // { a: 1, b: { c: 100 } }
console.log(cloned);    // { a: 1, b: { c: 2 } }
cloned.b.c=22
console.log(original);  // { a: 1, b: { c: 100 } }
console.log(cloned);