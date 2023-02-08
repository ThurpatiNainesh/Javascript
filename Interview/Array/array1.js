let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "capacity": 5
    },
    {
        "color": "purple",
        "type": "minivan",
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "capacity": 5
      },
      {
        "color": "purple",
        "type": "minivan",
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "capacity": 5
      },
  ]

  let car = {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
  }
  cars.unshift(car)
  
  let car2 = {
    "color": "red",
    "type": "cabrio",
    "capacity": 2
   }
   cars.push(car2);

   let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
// [
//     { color: 'red', type: 'cabrio', capacity: 2 },
//     { color: 'red', type: 'station wagon', capacity: 5 },
//     { color: 'red', type: 'station wagon', capacity: 5 },
//     { color: 'red', type: 'station wagon', capacity: 5 },
//     { color: 'red', type: 'cabrio', capacity: 2 }
// ]

let sizes = cars.map(car => {
    if (car.capacity <= 3){
      return "small";
    }
    if (car.capacity <= 5){
      return "medium";
    }
    return "large";
  });
//   console.log(sizes);
//   [
//     'small',  'large',
//     'medium', 'large',
//     'medium', 'large',
//     'medium', 'small'
//   ]

  let carsProperties = cars.map(car => {
    let properties = {
      "capacity": car.capacity,
      "size": "large"
    };
    if (car.capacity <= 5){
      properties['size'] = "medium";
    }
    if (car.capacity <= 3){
      properties['size'] = "small";
    }
    return properties;
   });
//    console.log(carsProperties);

//    [
//     { capacity: 2, size: 'small' },
//     { capacity: 7, size: 'large' },
//     { capacity: 5, size: 'medium' },
//     { capacity: 7, size: 'large' },
//     { capacity: 5, size: 'medium' },
//     { capacity: 7, size: 'large' },
//     { capacity: 5, size: 'medium' },
//     { capacity: 2, size: 'small' }
//   ]

cars.some(car => car.color === "red" && car.type === "cabrio");
// output: true

cars.every(car => car.capacity >= 4);
// output: false