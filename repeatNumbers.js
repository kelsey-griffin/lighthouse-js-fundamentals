let repeatNumbers = function(data) {
  let num = "";
  let list = "";
  for (let i = 0; i < data.length; i++) {
    num = data[i][0].toString();
    for (let j = 0; j < data[i][1] - 1; j++) {
      num = num + data[i][0];
    };
    list = list + num;
    if (i <= data.length-2){
      list = list + ",";
    }
  }
  return list;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));