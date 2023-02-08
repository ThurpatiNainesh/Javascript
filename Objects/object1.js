let instructor ={
    firstName:"kelly",
    isInstructor:true,
    favoriteNumber:[1,2,3,4]
}
 let x= Object.keys(instructor)
 console.log(x)
 let y = Object.values(instructor)
 console.log(y)
 let z = instructor.hasOwnProperty("firstName")
//  only key not values
 console.log(z)
 let w = Object.entries(instructor)
//  return array of key and values
 console.log(w)