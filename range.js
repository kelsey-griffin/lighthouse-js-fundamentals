let range = function(start, end, step) {
  let myArray = [];
  if (start != undefined && step != undefined && end != undefined && start < end && step > 0) {
    for (let i = start; i <= end; i += step) {
      myArray.push(i)
    };
  };
  return myArray
 };

 console.log(range(10,30,5));
