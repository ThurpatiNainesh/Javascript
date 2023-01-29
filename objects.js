// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let name = person.name;
// let country = person.country;
// let job = person.job;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer"

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let person1 = {name1: "Sarah", country1: "Nigeria", job1: "Developer"};

// let {name1, country1, job1} = person1;

// console.log(name);//"Sarah"
// console.log(country);//"Nigeria"
// console.log(job);//Developer

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let {name2, country2, job2} = {name2: "Sarah", country2: "Nigeria", job2: "Developer"};

// console.log(name2);//"Sarah"
// console.log(country2);//"Nigeria"
// console.log(job2);//Developer"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let person = {name: "Sarah", country: "Nigeria", job: "Developer"}; 
// let name, country, job;

// {name, country, job} = person;

// console.log(name);// Error : "Unexpected token ="

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
// let name, country, job;

// ({name, country, job} = person);

// console.log(name);//"Sarah"
// console.log(job);//"Developer"

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const personOne={
    name:"ram",
    age:24,
    address:{
        city:"somewhere",
        state:"one of them"
    }
}
const personTwo={
    name:"sita",
    age:23,
    address:{
        city:"somewhere2",
        state:"one of them2"
    },
    favouriteFood:"cupCake"
}
// const{name , age}= personTwo
// console.log(name)
// console.log(age)

// changename 
// const {name:firstName,age}=personTwo
// console.log(firstName)
// setting key val 
// const{name,age,favouriteFood="rice"}=personTwo
// console.log(favouriteFood)

//  using spread operatort 
// const {name:firstName,...rest}=personTwo
// console.log(firstName)
// console.log(rest)

//  if you want access unknow
// const {name:firstName,address:{street}}=personOne
// console.log(street)

// if you want access which is there
// const{address:{city}}=personOne
// console.log(city)

//  if you want to merge two object in one 
const personThree=[{...personTwo}]
console.log(personThree[0].name)

let prop = "name";

let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};

console.log(foo);//"Sarah"





