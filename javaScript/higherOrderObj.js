const students =[
    {name:"John", course:"Medicine"},
    {name:"Jane", course:"Law"},
    {name:"Erick", course:"Law"},
    {name:"June", course:"Medicine"},
  ]
  let lawStudents=[]
  function filterStudents(arr){
    for (let i = 0; i < students.length; i++){
      if(arr[i].course === "Law"){
        lawStudents.push(arr[i].name)
      }
    }
  }
  filterStudents(students)
  console.log(lawStudents)
  
  let lawStudents1 = students.filter(function(value){
    return value.course === "Law"
  })
  
  console.log(lawStudents1)
//   /*Output:
// [ { name: 'Jane', course: 'Law' },
// { name: 'Erick', course: 'Law' } ]

const add = (a, b) => a + b;
const isEven = num => num % 2 === 0;

const data = [2, 3, 1, 5, 4, 6];

const evenValues = data.filter(isEven); // [2, 4, 6]
const evenSum = data.filter(isEven).reduce(add); // 12

//  Array of objects
const companies = [
    { id: 1, name: "Square", sector: "Finance", founded: 2009 },
    { id: 2, name: "Disney", sector: "Media", founded: 1923 },
    { id: 3, name: "Ford", sector: "Auto", founded: 1903 },
    { id: 4, name: "Netflix", sector: "Media", founded: 1997 },
    { id: 5, name: "Apple", sector: "Technology", founded: 1976 },
    { id: 6, name: "Visa", sector: "Finance", founded: 1958 },
    { id: 7, name: "Tesla", sector: "Auto", founded: 2003 },
    { id: 8, name: "Microsoft", sector: "Technology", founded: 1975 },
    { id: 9, name: "Roku", sector: "Media", founded: 2002 }
  ];
  
  //  Array of numbers
  const numbers = [32, 15, 20, 16, 52, 54, 11, 49, 31, 19, 75, 42, 45, 68, 30];


  for (let i = 0; i < companies.length; i++) {
    output(companies[i].name);
  }

  companies.forEach(function(company) {
    output(company.name);
  });

  for (let company of companies) {
    output(company.name);
  }
  for (let property in companies[3]) {
    output(property + ": " + companies[3][property]);
  }
  const financeCompanies = companies.filter(function(company) {
    if (company.sector === "Finance") {
      return true;
    }
  });

financeCompanies.forEach(data => output(data.name));
// filter with foreach
const financeCompanies1 = companies.filter(function(company) {
    if (company.sector === "Finance") {
      return true;
    }
  });
  
  financeCompanies1.forEach(data => output(data.name));
// filter with forEach
  const seventiesCompanies = companies.filter(
    company => company.founded >= 1970 && company.founded < 1980
  );
  
  seventiesCompanies.forEach(company => output(company.name));
// filter with forEach
const fortyYears = companies.filter(company => 2019 - company.founded >= 40);

fortyYears.forEach(company => output(company.name));
// map withorEach
const newArray = companies.map(company => company.name);

newArray.forEach(company => output(company));
// map with forEach
const description = companies.map(
    company =>
      `${company.name} was founded in ${company.founded} and is in the  ${
        company.sector
      } business`
  );
  
  description.forEach(d => output(d));
//   sorting companies
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.founded > c2.founded) {
      return 1;
    } else {
      return -1;
    }
  });
  
  sortedCompanies.forEach(c => output(c.name));

//   You can accomplish the same result with this much more terse code which uses the ternary operator like so.

  const sortedCompanies1 = companies.sort((c1, c2) =>
    c1.founded > c2.founded ? 1 : -1
  );
  
  sortedCompanies1.forEach(c => output(c.name));

  // reduce
  const totalYears = companies.reduce(function(total, company) {
    return total + (2019 - company.founded);
  }, 0);
  
  output(totalYears);
//   reduce
const totalYears1 = companies.reduce(
    (total, company) => total + (2019 - company.founded),
    0
  );

