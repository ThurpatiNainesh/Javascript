
let data =[1,2,3,4,5,6];
function replace(arr){
let newEl=70
let position =2
for(let i=arr.length-1;i>=0;i--){
    if(i>=position){
      // here replacement will stop at second position 
        arr[i+1]=arr[i]
        if(i==position){
    // here we are replacing the element 
            arr[i]=newEl
        }
    }
}
return data
}
let x=console.log(replace(data))