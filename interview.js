// let arr=[1,2,3,4]
// arr.length = 3
// arr.length =5
// console.log(arr)

// console.log("Hello, World!");
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 +i);
// }
// // 3 3 3
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() { console.log(i); }, 1000 +i);
// }
// // 0 1 2

// What is chaining process in node JS?
// There are two most commonly used methods for chaining functions provided by the async module: parallel(tasks, callback): The tasks is a collection of functions that runs parallel in practice through I/O switching. series(tasks, callback): Each function in tasks run only after the previous function is completed.
let arr1=[
	{
		userId : "054",
		comment : "Amazing!"
	},
	{
		userId : "034",
		comment : "Great Going!"
	},
	{
		userId : "054",
		comment : "Changed my mind. Not good!"
	}
]

let y=arr1.forEach(function(company) {
    let set = new Set()
    let unique=company.userId
     if(set.has(unique)){
         set.add(unique)
     }else{
        set.add(unique)
     }
     return set 
  });
console.log(y)


