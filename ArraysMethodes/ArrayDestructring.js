function array() {  
    return [100, 200, 300];  
}  
   
var [x, y, z] = array();  
   
console.log(x); // 100  
console.log(y); // 200  
console.log(z); // 300

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var x = 100, y = 200;  
[x, y] = [y, x];  
console.log(x); // 200  
console.log(y); // 100  

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring assignment  
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let [greeting,,,name1] = ["Hello", "I" , "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(name1);//"Sarah"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let [greeting1 = "hi",name3 = "Sarah"] = ["hello"];

console.log(greeting1);//"Hello"
console.log(name3);//"Sarah"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





