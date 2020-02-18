//find 2 largest numbers and sum them

let sumLargestNumbers = function(data) {
  // Put your solution here
  //2 loops, one finds the biggest number and next will ignore the spot/index of the large number from the first loop 
  let firstNum = data[0]
  for (let i = 1; i < data.length; i++) {
    if (data[i]>data[i-1]) {
      firstNum = data[i];
    };
  };
  data.splice(data.indexOf(firstNum), 1);
  let num2 = data[0]
  for (let j = 1; j < data.length; j++) {
    if (data[j]>data[j-1]) {
      num2 = data[j];
    };
  };
  return firstNum + num2
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
