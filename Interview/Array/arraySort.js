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
  let car = cars.find(car => car.color === "red");

  let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars);
// output:
// [
//   {
//     color: 'purple',
//     type: 'minivan',
//     registration: 'Wed Feb 01 2017 00:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 7
//   },
//   {
//     color: 'red',
//     type: 'station wagon',
//     registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//     capacity: 5
//   },
//   ...
// ]