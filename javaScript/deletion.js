let data = [1,2,3,4,5,6,7]
let position=2
function remove(arr){
for (let i=position;i<arr.length-1;i++){
         arr[i]=arr[i+1]
    }
    arr.length = arr.length-1
    console.log(arr)
}
let x = remove(data )
