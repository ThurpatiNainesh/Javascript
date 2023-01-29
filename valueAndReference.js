// its all dependenton how datatypes stored
// primitiv= strings, number, boolean , undefined,null
// non-primitive = array ,object , function , date , Regex
// value type(stack)
// indepedent memory
// immutable
// deep copy
var name = "maya";
//  both of then have new memory locatiom
var newName = name 
var newName="jaya"
// console.log(newName);
// console.log(name)

// reference type
// dependent
// mutable
// shallow copy
var person={
    name:"maya",
    age:29
}
var newPerson = person
newPerson.name="its me"
// console.log(person)

const deepCopy = JSON.parse(JSON.stringify(person))
deepCopy.age=55
// console.log(person)
// console.log(deepCopy)

// ARRAYS
const a =[1,2,3,4]
// paasing by reference
const b = a
// deep copy 
const d = [...a]
b.push("hi")
// console.log(a)
// console.log(d)

const g =[1,2,[3,4]];
const r = [...g]
r[0]=0;
// nested array doesn't support deep copy  ex . map,slice,forEach
r[2][1]=null;
console.log(g)
console.log(r)

const y = [1,2,[3,4]]
const x = []
y.forEach(ele => x.push(ele))
// partial deep copy
const employee = {
    name: 'Siddharth',
    age: 30,
    salary: {
        annual: '100K',
        hourly: '$50'
    }
};
// nested object and array support partial deepCopy
const parialDeepCopy3= Object.assign({},employee)
const parialDeepCopy4=Object.create(employee);
const parialDeepCopy5 = {...employee}

//  deep copy'
const deepCopy6 = JSON.parse(JSON.stringify(employee))
const deepCopy7 = {...employee,salary:{...employee.salary}}








