/* 
let concat = function(array1, array2) {
  for (let i = 0; i <= array2.length-1; i++) {
    array1.push(array2[i]);
  };
  return array1
};

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
*/
let merge = function (array1, array2) {
  //first join 2 lists together
  for (let i = 0; i <= array2.length-1; i++) {
    array1.push(array2[i]);
  };
  //then sort the combined array with all numbers
  let done = false
  while (!done) {
    done = true
    for (let k = 1; k < array1.length; k++) {
      if (array1[k-1] > array1[k]) {
        done = false
        let tmp = array1[k-1]; 
        array1[k-1] = array1[k];
        array1[k] = tmp;
      }
    }
  }
  return array1;
};

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);