const numbers = [32, 15, 20, 16, 52, 54, 11, 49, 31, 19, 75, 42, 45, 68, 30];
let twenty = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] <= 20) {
    twenty.push(numbers[i]);
  }
}

const twenty1 = numbers.filter(num => num <= 20);
console.log(twenty1)
const totalValue1 = numbers.reduce((sum, number) => sum + number);
console.log(totalValue);
const powerTwo = numbers.map(num => Math.pow(num, 2));

powerTwo.forEach(num => output(num));
const sortInts = numbers.sort((a, b) => a - b);
  
sortInts.forEach(n => output(n)) 
const numSum = numbers.reduce((total, num) => total + num, 0);

const combined = numbers
  .map(num => num * 3)
  .filter(num => num >= 70)
  .sort((a, b) => a - b);

combined.forEach(c => output(c));
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

