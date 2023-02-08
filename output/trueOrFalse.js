// TRUTHY AND FALSY VALUES
console.log(!null)
// true
console.log(!!null)
// false
console.log(!!"")
// FALSE
console.log(!!7)
// TRUE
let a=1;
let b=1;
let c=2
console.log(a===b===c)
// first two true now compareing between true===c itwill be false
let data=true;

console.log(!data)
// false
console.log(data)
// true
console.log(!!data)
// true
let bata=false;
// !danda === change !! danda ====no change
console.log(!bata)
// true
console.log(bata)
// false
console.log(!!bata)
// false

let obj={name:"anil"}
console.log(delete obj.name)
// true
console.log(delete obj)
// false

let g=[]
let h=[]
console.log(g===h)
console.log(g==h)
// both return false
let z=[10]
let y=[10]
console.log(z[0]===y[0])
console.log(z[0]==y[0])
// both return true due ovalue not memory
console.log(isNaN(null))
// FALSE
console.log(isNaN("STRING"))
// TRUE
console.log(isNaN(45))
// FALSE
console.log(isNaN(undefined))
// TRUE
console.log(isNaN(true))
// FALSE
console.log(isNaN(false))
// FALSE
console.log(undefined===null)
// FALSE
console.log(undefined==null);
// true
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FIRST NOT IMPOTNT LAST IS
console.log(1<2>3)
// FALSE
console.log(1>2<3)
// RETURN TRUE
console.log(isNaN(undefined))
// TRUE
console.log(isNaN(""))
// CONSIDERED 0
// FALSE
console.log(1>2==false)
// true
console.log(1<2+null)
// 1+0=1
console.log(1<2+false)
// -*- +
console.log(1<2+null+false+true)
console.log(1>2*false)
console.log(1<2+null+false)
console.log(3<2<1)
console.log(1<2+null+true)
// true
console.log(1>2+NaN)
console.log(1<2+NaN)
console.log(1>2+null)
console.log(1<2+undefined)
console.log(1>2+undefined)
console.log(1>2+false)
console.log(1>2/false)
console.log(1>2%false)
console.log(1>2+false)
console.log(3>2>1)
console.log(1<2+null+false-true)
// false

