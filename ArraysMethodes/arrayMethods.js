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

  companies.forEach(function(company) {
    output(company.name);
  });

  const twenty = numbers.filter(data => {
    if (data <= 20) {
      return true;
    }
  });

  const financeCompanies = companies.filter(function(company) {
    if (company.sector === "Finance") {
      return true;
    }
  });

  const seventiesCompanies = companies.filter(
    company => company.founded >= 1970 && company.founded < 1980
  );

  const seventiesCompanies1 = companies.filter(
    tomato => tomato.founded >= 1970 && tomato.founded < 1980
  );
  
  seventiesCompanies.forEach(cucumber => output(cucumber.name));