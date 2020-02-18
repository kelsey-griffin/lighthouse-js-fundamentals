let numberOfVowels = function(data) {
  let counter = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" ||data[i] ===  "e" ||data[i] ===  "i" ||data[i] ===  "o" ||data[i] ===  "u" ) {
      counter ++
    };
  };
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));