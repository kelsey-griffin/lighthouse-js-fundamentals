const urlDecode = function(text) {
  let keys = []
  let values = []
  let obj = {}
//split key-value pairs, if multiple i.e. remove "&"
  let pairs = text.split("&")
  for (let i = 0; i < pairs.length; i++) {
    pairs[i] = pairs[i].split("=")
  };
//flatten nested arrays
  let merged = Array.prototype.concat.apply([], pairs)
 //split keys and values into respective arrays
  for (let i = 0; i < merged.length; i++) {
    if (i % 2 === 0) {
      keys.push(merged[i])
    } else {
      values.push(merged[i])
    }
  };
//remove "%20" from value strings
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      if (values[i].substring(j,j + 3) === "%20") {
        values[i] = values[i].substring(0, j) + " " + values[i].substring((j + 3), values[i].length);
      }
    }
  };
// build object with keys and values  
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i]
  }
  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
