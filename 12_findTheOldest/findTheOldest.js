const findTheOldest = function(arr) {
    let highestAge = 0;
    let oldest;
    arr.forEach(element => {
        if(element.yearOfDeath === null || element.yearOfDeath === undefined){
            element.yearOfDeath = currentYear;
        }
        let age = element.yearOfDeath - element.yearOfBirth;
        // console.log(`${element.name} is ${age} old`);
        if (age > highestAge) {
          highestAge = age;
          oldest = element;
        } 
    });
    return oldest;

};
const currentYear = new Date().getFullYear();

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
    
findTheOldest(people)
// Do not edit below this line
module.exports = findTheOldest;
