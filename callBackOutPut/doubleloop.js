function multiply(arr){
    let product=1
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
             product*=arr[i][j]
             console.log(arr[i][j])
        }
       } 
       return product
}
console.log(multiply([[1,2],[3,4],[5,6,7]]))

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let array=[7,4,3,2]
 function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
     let swap = false;
     for(let j=0;j<arr.length;j++){
      if(arr[j]>arr[j+1]){
           let temp = arr[j]
           arr[j]=arr[j+1]
           arr[j+1] = temp
             swap=true;
      }
     }
    if(swap===false)break;
  }
  return arr
 }
 console.log(bubbleSort(array))
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //  takes smallest element
function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
       var lowest=i;
       for(var j=i+1;j<arr.length;j++){
           // console.log(arr[lowest],arr[j])
           // here we are checkin the lowest 
           if(arr[j]<arr[lowest]){
               lowest=j
               // console.log(arr)
           }

       }
       // here we are swaping current lowest and previous lowest 
       var temp = arr[i]
       arr[i]= arr[lowest]
       arr[lowest] = temp
    }
    return arr
}
let y= selectionSort(arr1)
console.log(y)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 function insertinSort(arr){
    for(var i=1;i<arr.length;i++){
        var curtrentVal = arr[i]
        //   starting play a biggy role
        for(var j=i-1;j>=0&&arr[j]>curtrentVal;j--){
            arr[j+1]= arr[j]
     //        [ 5, 5, 3, 2, 1 ]
        //     [ 4, 5, 5, 2, 1 ]
        //     [ 4, 4, 5, 2, 1 ]
        //     [ 3, 4, 5, 5, 1 ]
        //     [ 3, 4, 4, 5, 1 ]
        //     [ 3, 3, 4, 5, 1 ]
        //     [ 2, 3, 4, 5, 5 ]
        //     [ 2, 3, 4, 4, 5 ]
        //     [ 2, 3, 3, 4, 5 ]
        //     [ 2, 2, 3, 4, 5 ]
        //     [ 1, 2, 3, 4, 5 ]

            
        }
        arr[j+1]= curtrentVal
    }
    return arr
}
 let x = insertinSort(array)

 let arr1 =[8,7,5,6,4]

 

