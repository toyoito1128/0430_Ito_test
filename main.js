const array = [2, 4, 7, 5, 4, 3, 8];
const newarray = array.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});
console.log(newarray);


function isLeapYear(year){
  if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    return "うるう年";
  } else {
    return "うるう年ではない";
  }
};

console.log(isLeapYear(2020));
console.log(isLeapYear(2021));