
// let arr=[]


// function minimumSwaps(arr) {
//     let i=0
//      for(let i=0;i<arr.length-1;i++){
//          let swap=false;
//          for(let j=0;i<arr.length-1;j++){
//              if(arr[j]>arr[j+1]){
//                  let temp=arr[j]
//                  arr[j]=arr[j+1]
//                  arr[j+1]=temp
//                  swap=true
//                  i++
//              }
//          }
//          if(swap==false)break;
//      }
//      return i

// }
// console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]) )


// "QUESTION 1

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// END

// QUESTION 2

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// END

// QUESTION 3

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }


// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// const member = new Person('Lydia', 'Hallie');

// console.log(member.getFullName());

// END

// QUESTION 4

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// END

// QUESTION 5

// async function getData() {
//     return await Promise.resolve('I made it!');
// }

// const data = getData();
// console.log(data);

// END

// QUESTION 6
// function addToList(item, list) {
//     return list.push(item);
// }

// const result = addToList('apple', ['banana']);
// console.log(result);

// END

// QUESTION 7

// const add = () => {
//     const cache = {};
//     return num => {
//         if (num in cache) {
//             return `From cache! ${cache[num]}`;
//         } else {
//             const result = num + 10;
//             cache[num] = result;
//             return `Calculated! ${result}`;
//         }
//     };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));

// END

// QUESTION 8 

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))

// END"