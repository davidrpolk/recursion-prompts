// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n === 0) return 1;
  if (n < 0) return null;
  if (n <= 1) return n;
    return n * factorial(n - 1);
};



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (array.length === 1) return array[0];
  if (!array || array.length === 0) return 0;
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  let flattened = [];
  array.forEach(v => {
    if(Array.isArray(v)) flattened.push(...arraySum(v));
    else flattened.push(v);
  });
  return flattened.reduce((a, v)=> a + v);
};

// 4. Check if a number is even.
var isEven = (n) => {
  if(n === 0) return true;
  if(n === 1) return false;
  if(n < 0) return isEven(-n);
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if(n === 0) return n;
  if(n < 0) return (n + 1) + sumBelow(n + 1);
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y, arr = []) {
  if(x === y) return arr;
  if(x === y - 1 || x === y + 1) return arr;
  if(x > y) {
    arr.push(x - 1);
    return range(x - 1, y, arr);
  }
  arr.push(x + 1);
  return range(x + 1, y, arr);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) return 1;
  if(exp === -1) return base;
  if(exp === 1) return base;
  if(exp < 0) return 1 / exponent(base, -exp);
  if(exp > 0) return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n === 1) return true;
  if(n < 1) return false;
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
 if(!string) return string;
 return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};
// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.replace(/\s/g, '');
  if(string.length === 0 || string.length === 1) return true;
  if(string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) return false;
  return palindrome(string.slice(0, string.length - 1).slice(1, string.length));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if(x < y) return x;
  if (x > 0) return modulo(x - y, y);
  if(x < 0) return modulo(x + y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if(y === 1) return x;
  if(y < 0)  return multiply(-x, -y);
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  if(x === 0 || y === 0) return 0;
  if(x === 0 && y === 0) return NaN;
  
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0) return null;
  let least = Math.min(x, y);
  let most = Math.max(x, y);
  if(most % least === 0) return least;
  if(most < least) return 1;
  return gcd(most - least, least);
};
// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(str1.length === 0 && str2.length === 0) return true;
  if(str1[0] == str2[0]) return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
  else return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if(str.length === 1) return Array(str);
  return Array(str[0]).concat(createArray(str.slice(1, str.length)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(array.length === 0) return array;
  return array.slice(array.length -1, array.length).concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length. 
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) { /////// PASSES TESTS BUT DOESNT WORK WITH STRING LENGTH  //////////
  if(length === 1 && !Array.isArray(value)) return Array.of(value);
  if(value.length === length) return value;
  return Array.of(value).concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, c = 0) {
  if(array.length === 0) return c;
  if(array[0] === value) return countOccurrence(array.slice(1, array.length), value, c + 1);
  if(array[0] !== value) return countOccurrence(array.slice(1, array.length), value, c);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function([head, ...array], callback) {
  if(head === undefined) return [];
  
  return [callback(head),...rMap(array, callback)];
  
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;
  for(let k in obj){
    if(typeof obj === 'object') count += countKeysInObj(obj[k], key);
    if(k === key) count += 1;
  } return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let count = 0;
  for(let k in obj){
    if(typeof obj[k] === 'object'){count += countValuesInObj(obj[k], value);}
    if(obj[k] === value) count += 1;
  } return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for(let k in obj) {
    if(typeof obj[k] === 'object') replaceKeysInObj(obj[k], key, newKey);
    if(k === key) {obj[newKey] = obj[k];
      delete obj[k];
    }
  } return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  let arr = [];
    function mathy(n){
    if(n === 0) return;
    arr.unshift((((((1 + Math.sqrt(5)) / 2)**n) - (((1 - Math.sqrt(5)) / 2)**n))) / Math.sqrt(5));
    return mathy(n - 1);
    }; mathy(n)
    arr = arr.map((v) => Math.ceil(v));
    return arr;
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n === 0) return 0;
  if(n < 0) return null;
  if(n > 2) return nthFibo(n - 1) + nthFibo(n - 2);
  else return 1;
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function([head,...rest], callback = v => v.toUpperCase()) {
    if(head === undefined) return [];
    return[callback(head), ...capitalizeWords(rest, callback)];
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function([head,...rest], callback = v => v.charAt(0).toUpperCase() + v.slice(1)) {
    if(head === undefined) return [];
    return [callback(head),...capitalizeFirst(rest, callback)];
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;
  for(let key in obj){
    if(typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
    if(obj[key] % 2 === 0)  sum += obj[key];
  }
   return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  let flattened = [];
  arrays.forEach(v => {
    if(Array.isArray(v)) flattened.push(...flatten(v));
    else flattened.push(v);
  });
  return flattened;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) return obj;
  if(!obj[str[0]]) obj[str[0]] = 1;
   else obj[str[0]]++;
  return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, i = list.length - 1){
  if(i === 0) return list;
  if(list[i] !== list[i - 1]) return compress(list, i - 1);
  if(list[i] === list[i - 1]) list.splice(i - 1, 1);
  return compress(list, i - 1);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function([head,...rest], aug) {
  if(!head) return [];
  return [head.concat(aug),...augmentElements(rest, aug)];
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, i = array.length - 1) { 
  if(i === 0) return array;
  if(array[i] === 0 && array[i - 1] === 0) array.splice(i, 1);
  return minimizeZeroes(array, i - 1);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, i = 0) {
  if(i === array.length) return array;
  if(i % 2 === 0 && array[i] > 0) {return alternateSign(array, i + 1);}
  if(i % 2 === 0 && array[i] < 0) {return  array[i] *= - 1, alternateSign(array, i + 1);}
  if(i % 2 !== 0 && array[i] > 0) {return  array[i] *= - 1, alternateSign(array, i + 1);}
  if(i % 2 !== 0 && array[i] < 0) {return alternateSign(array, i + 1);}
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, i = 0) {
  if (!str[i]) return '';

    if (/\d/g.test(str[i])){
      switch(str[i]) {
    case '1': return 'one' + numToText(str, i + 1);
    break;
    case '2': return 'two'+ numToText(str, i + 1);
    break;
    case '3': return 'three' + numToText(str, i + 1);
    break;
    case '4': return 'four' + numToText(str, i + 1);
    break;
    case '5': return 'five' + numToText(str, i + 1);
    break;
    case '6': return 'six' + numToText(str, i + 1);
    break;
    case '7': return 'seven' + numToText(str, i + 1);
    break;
    case '8': return 'eight' + numToText(str, i + 1);
    break;
    case '9': return 'nine' + numToText(str, i + 1);
    break;
      }
    }

  return str[i] + numToText(str, i + 1);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
