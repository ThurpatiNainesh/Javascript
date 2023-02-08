// let name="raju"
// function kaju(){
//     console.log(name)
//     let name="raju"
//   }
//   kaju()
  
//   // console.log(name)

//   let text = 'abcde'
// text[0] = 'z'

// console.log(text) //ans: abcde

// var variable = 10;
// (() => {
// 	variable2 = 100;
// 	console.log(variable);
// 	console.log(variable2);
// 	variable = 20;
// 	var variable2 = 50;
// 	console.log(variable);
// })();
// console.log(variable);
// var variable = 30
// // console.log(variable2);
// // error
// var w=2000;
// console.log(w)
// w=100000

// 3) Accidental Global Variable
//Q6
function foo() {
  let a = b = 0;
  a++;
  return a;
}
foo();
typeof b; // => number
typeof a; // => undefined

console.log(a) //error: ReferenceError: a is not defined
// var is a functional scoped variable and let is a block-scoped variable. Although it seems that a and bare declared using let in let a = b = 0, the reality is variable b is declared as a global variable and assigned to a window object. In another word, it is similar as

function foo() {
  window.b = 0
  let a = b;
  a++;
  return a;
}

// 4) Closure
//Q7
const length = 4;
const fns = [];
const fns2 = [];
for (var i = 0; i < length; i++) {
	fns.push(() => console.log(i));
}
for (let i = 0; i < length; i++) {
	fns2.push(() => console.log(i));
}
fns.forEach(fn => fn()); // => 4 4 4 4
fns2.forEach(fn => fn()); // => 0 1 2 3
// Closure is a preservation of a variable environment even though the variable is already changed or garbage collected. In the above question, the difference here is in the variable declaration, where the first loop is using var and the second loop is using let. var is a functional scoped variable, so when it’s declared inside a for loop block, the var is considered a global variable instead of an internal block variable. On the other hand, let is a block-scoped variable, similar to the variable declaration in other languages such as Java and C++.

// In this case, closure is only happening in let variable. Each of the functions pushed to the fns2 array remembers the current value of the variable, no matter if the variable is changed in the future. Oppositely, the fns do not remember the current value of the variable, it uses the future or final value of the global variable