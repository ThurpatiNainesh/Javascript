// iteratio = one by one 
 // while loop
var myArray =[];
var i=1;
while(i<=5){
    myArray.push(i);
      i++
}
// return empty array
console.log(myArray)

// Do while loop
do{
 myArray.push(i)
}while(i<5)
// return 1o
console.log(myArray)

// for of loop
const names=["max","raja","kaja"]
var sos=[]
for(const name of names){
    // name return each element of array
    // names return complete array
     sos.push(name)

}
// sos returns three times the array if we push names
//  sos returns array if we push name 
console.log(sos)

// recursion
 function drunkenMaster(n,total=1){
    if(n<=0){
       return total
    }else{
         return drunkenMaster(n-1,total*n)
    }

}
  let result =drunkenMaster(3);
  console.log(result)

// filter
const arr=[1,2,34,56,78]
const ass=[23,63,78,84,45]
const chumma=[...arr,...ass];
const as =chumma.filter((chum)=>(chum>=20));
console.log(as)


let joy = "hello"

for(let i=0;i<joy.length;i++){
    
       for(let j=i+1;j<joy.length;j++){
             if(joy[i]===joy[j]){
                console.log("yes")
             }else{
                console.log("no")
             }
       }
}


let arr1=[1,2,3,4]
let arr2=[1,4,9,16]

function checking(a,b){
    for(let i=0;i<a;i++){
        if(a[i]*a[i]===b[i]){
            return true;
        }else{
            return false; 
        }
    }
}
 let arr3=checking(arr1,arr2)
 console.log(arr3)


