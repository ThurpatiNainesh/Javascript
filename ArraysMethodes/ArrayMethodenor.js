arr.forEach(function(item, index, array) {
    // ... do something with item
  });
  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });

  let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });
  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2
  let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
  });
  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
  }
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr6 = [ 1, 2, 15 ];
  
  arr6.sort(compareNumeric);
  
  alert(arr6);  // 1, 2, 15 
  [1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b );
    return a - b;
  });
  let arr3 = [ 1, 2, 15 ];

  arr3.sort(function(a, b) { return a - b; });
  
  alert(arr3);  // 1, 2, 15
  arr.sort( (a, b) => a - b );
  let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
let arr1 = [1, 2, 3, 4, 5];
arr1.reverse();

alert( arr1 ); // 5,4,3,2,1

let names = 'Bilbo, Gandalf, Nazgul';

let arr7 = names.split(', ');

for (let name of arr7) {
  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
}
let arr0 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr0); // Bilbo, Gandalf
let str = "test";

alert( str.split('') ); // t,e,s,t

let arr00 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str7 = arr00.join(';'); // glue the array into a string using ;

alert( str7 ); // Bilbo;Gandalf;Nazgul

let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);
// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.
alert(typeof {}); // object
alert(typeof []); // object (same)
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument
