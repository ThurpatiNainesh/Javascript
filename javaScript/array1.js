
// aggregat arry operation
var nums=[];
for(var i=0;i<10;i++){
    nums[i]= i+1
}
var samenums= nums
console.log(nums)
nums[0]=400
nums[1]=500
console.log(samenums[0])
console.log(samenums)

function copy(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
        arr2[i]=arr1[i]
    }
}
var nums=[]
for(var i=0;i<100;i++){
    nums[i]=i+1
}
var samenums=[]
copy(nums,samenums)
nums[0]=400;
console.log(samenums[0])