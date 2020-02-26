//convert a normal string to camelCase

let camelCase = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      input = input.substring(0, i) + input[i + 1].toUpperCase() + input.substring((i+2), input.length);
    }
  };
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
