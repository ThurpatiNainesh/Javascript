let start=10
// you may not tell truth to your wife atleast tell it to whileloop
// here expression is true
while(0!==start){
    console.log(start)
    start--
    
}
// continue
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 3; j++) {
      console.log(i, j);
    }
  }
  outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (i + j == 3) continue outer;
      console.log(i, j);
    }
  }
  // break
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
      break;
    }
  }
  // 0 1 2

  // comma
  let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = '';
for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}
// 1 2 3
// 4 5 6
// 7 8 9
var moveZeroes = function(nums) {
  let index =0
  for(let i=0;i<nums.length;i++){
      const num= nums[i]
      if(num !==0){
          nums[index]=num;
          index++
      }
  }
  for(let i=index;i<nums.length;i++){
      nums[i]=0
  }
};
console.log(moveZeroes([1,0,0,2,3,4,5]))