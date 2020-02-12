let ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}
console.log(ageCalculator("Kelsey", 1995, 2020))
