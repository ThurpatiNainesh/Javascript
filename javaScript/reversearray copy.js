//  reverseing array
 function reverse(n){
    arr=[]
    for(let i=n;i>=0;i--){
        arr.push(i)
    }
return arr
}
console.log(reverse(6))

// common array
let arr1= [1,2,3,4,5]
 function multiply(n){
     let arr2=[]
     for(let i=0;i<=n.length-1;i++){
         arr2.push(n[i])
     }
     return arr2
 }
 console.log(multiply(arr1))

// adding 
 var arr4=[1,2,3,4];
 var total1=0;
 for(var i in arr4){
     total1 +=arr4[i]
 }
 console.log(total1)


// adding with function 
 function max(n){
    total2=0
    for(var i in n){
        total2 +=n[i]
    }
    return total2
}
console.log(max(arr4))


// muliply with function 
function max1(x){
    total22=1
    for(var i in x){
        total22 *=x[i]
    }
    return total22
}
console.log(max1(arr4))