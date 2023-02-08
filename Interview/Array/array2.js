const users=[
    {
        id:1,
        name:"Jack",
        isActive:true,
        age:1
        
    },
    {
        id:2,
        name:"John",
        isActive:true,
        age:2
    },
    {
        id:3,
        name:"mike",
        isActive:true,
        age:7
    },
    {
         id:4,
         name:"Jane",
        isActive:false,
        age:56
    },
]
//  const names=[];
//  for(let i=0;i<users.length;i++){
//     names.push(users[i].name)
//  }
 

//  for(let user of users){
//     names.push(user.name)
//  }
 
// let arr = users.map(user => user.name)

// let arr =users.forEach((user)=>{
//     names.push(user.name)
// })
const names=users
        .sort((user1,user2)=>(user1.age<user2.age?1:-1))
        .filter((user)=>user.isActive)
        .map((user)=>user.name)
console.log(names)
