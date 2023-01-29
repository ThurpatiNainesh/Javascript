const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
  }
}

addOne(numbers);
//  forEach
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((number) => console.log(number + 1))

const nums4 = [1, 2, 3, 4, 5];
// map creates new array but for each don't
const newArray = nums4.map((number) => number + 1);
console.log(newArra);

// find odd number in an array 
function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}
const num = [1, 2, 3, 4, 5];
const oddArray = isOdd(num);
console.log(oddArray);
// finding odd number in an array through filter 
const nums = [1, 2, 3, 4, 5];

const oddArray2 = nums.filter((number) => number % 2 !== 0);
console.log(oddArray2);


// adding all numbers
function getTotalValue(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

const totalValue = getTotalValue(nums);
console.log(totalValue);

const totalValue1 = nums.reduce((sum, number) => sum + number);
console.log(totalValue);

