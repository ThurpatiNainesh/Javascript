// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

// arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

alert( arr1 ); // ["I", "JavaScript"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");

alert( arr2 ) // now ["Let's", "dance", "right", "now"]

let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr3.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements
let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

alert( arr4 ); // "I", "study", "complex", "language", "JavaScript"

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

alert( arr5 ); // 1,2,3,4,5

arr.slice([start], [end])
let arr6 = ["t", "e", "s", "t"];

alert( arr6.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr6.slice(-2) ); // s,t (copy from -2 till the end)

arr.concat(arg1, arg2)
let arr7 = [1, 2];

// create an array from: arr and [3,4]
alert( arr7.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr7.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add
let arr8 = [1, 0, false];

alert( arr8.indexOf(0) ); // 1
alert( arr8.indexOf(false) ); // 2
alert( arr8.indexOf(null) ); // -1

alert( arr8.includes(1) ); // true

let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

const arr9 = [NaN];
alert( arr9.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr9.includes(NaN) );// true (correct)


