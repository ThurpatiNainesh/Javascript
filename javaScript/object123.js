 
 function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  let p1 = new Person('John', 'Doe');
  let p2 = new Person('Jane', 'Doe');
  
  console.log(p1.getFullName());
  console.log(p2.getFullName());