/**
 * to reverse a string  using stack
 */

const testString = "helloworld";

const reverseString = function (str) {

    let res = "";
    let input = str.split("");

    while (input.length > 0) {
        res += input.pop();
    }
    return res;

}

console.log("using stack: ", reverseString(testString));

/**
 * to reverse a string  using for loop
 */
const reverseString2 = function (str) {

    let res = "";
    let input = str.split("");

    for (let i = input.length - 1; i >= 0; i--) {
        res += input[i];
    }
    return res;

}

console.log("using for loop: ", reverseString2(testString));

/*************************/

/**
 * find the longest word from a sentences
 */

const longestWord = "I love coding in Javascript";

const findLongestWord = function (str) {

    let words = str.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
/*
const findLongestWord2 = function (str){

    let input = str.toLowerCase().split(" ");
    let map = new Map();

    for(let i=0; i < input.length; i++){
        map.set(input[i],input[i].length);
    }
    const max = Math.max(...map.values());

    for (let [key, value] of map.entries()) {
        if (value === max) {
          return key;
        }
    }

}
*/

console.log("longest word: ", findLongestWord(longestWord));

/**
 * find duplicate words from a sentence
 */

const duplicateString = "I love india I love my country";

const findDuplicateWord = function (input) {
    let words = input.split(" ");
    let set = new Set();
    let res = [];

    for (let word of words) {
        if (set.has(word)) {
            res.push(word);
        }
        else {
            set.add(word)
        }
    }
    return res;


    /*by using map
    {
    let map = new Map();
    for(let i =0; i < words.length; i++){
        if(map.has(words[i])) {
            map.set(words[i], map.get(words[i])+1)
        }else{
            map.set(words[i], 1)
        }
    }
    return map
    }*/


}

console.log("duplicate words: ", findDuplicateWord(duplicateString))

/**
 * remove duplicates from an array
 */
const duplicateArray = [1, 2, 3, 4, 5, 4, 5, 9, 0, 6, 7];

const removeDuplicate = function (input) {

    return [...new Set(input)]

    // {
    // const set = new Set(); //set accepts only unique values
    // input.forEach(x => {
    //     set.add(x)
    // });
    // return Array.from(set)
    // }


}

console.log("remove duplicates: ", removeDuplicate(duplicateArray))

/**
 * move zeroes to the end
 */
const zeroes = [0, 1, 0, 2, 4, 5];

const moveZeroes = function (nums) {

    nums.sort((a, b) => (b - a));

    // let left =0;
    // let right =0;
    // while(right < nums.length){

    //    if(nums[right] != 0){
    //     [nums[left], nums[right]] = [nums[right], nums[left]];
    //     left ++;
    //    }
    //    right ++;

    // }
    return nums

}

console.log("move zeroes to the end: ", moveZeroes(zeroes));


/**
 * check two string is anagram are not
 */

const isAnagram = function (firstWord, secondWord) {

    let map = new Map();

    if (firstWord.length !== secondWord.length) {
        return false;
    }

    for (let char of firstWord) {
        if (!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    }

    for (let char of secondWord) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1)
        }
        else {
            return false;
        }
    }

    return Array.from(map.values()).every(count => count === 0);

}
console.log(isAnagram("listent", "silenttm"))

/**
 * no of vowels in a string
 */

const noOfVowels = function (input) {

    //let words = input.replace(/\s/g, '');//remove space only
    let words = input.replace(/\s/g, '');

    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of words) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;

}

console.log("no of vowels: ", noOfVowels("Hello , world"))

/**
 * chech if a no is prime or not
 */

const isPrime = function (num) {

    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("is prime: ", isPrime(7))

/**
 * factorial of a no
 */

const findFactorial = function (num) {

    if (num == 0) {
        return 1;
    }
    else {
        return num * findFactorial(num - 1);
    }
}
console.log("factorial: ", findFactorial(5))

/**
 * remove white spaces from a sentences using for loop
 */

const removeAllSpace = function (words) {

    let result = "";

    for (let char of words) {
        if (char !== " ") {
            result += char;
        }
    }
    return result;
}

console.log("remove space using for loop: ", removeAllSpace("hello, world from js"));

/**
 * Find the most frequently used no
 */

const arr =[1,2,3,4,4,5,5,1,1,11]


const findMostUsedNo = (arr) =>{
    let mostUsedNo = new Map();
    for(let i=0; i< arr.length; i++){
        if(mostUsedNo.has(arr[i])){
            mostUsedNo.set(arr[i], (mostUsedNo.get(arr[i])+1 ));
        }
        else{
            mostUsedNo.set(arr[i], 1);
        }
    }

    //let sortData = Array.from(mostUsedNo.values()).sort();
    // let maxVal = Math.max(...(Array.from(mostUsedNo.values())));
    // console.log("maxVal: ",maxVal)

    const max = Math.max(...mostUsedNo.values());
    for (let [key, value] of mostUsedNo.entries()) {
        if (value === max) {
          return key;
        }
    }

    

    

}

console.log("Most frequently used no from the array: ",findMostUsedNo(arr));

