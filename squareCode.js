const squareCode = function(message) {
  let noSpaces = message.replace( /\s/g, '')
  
  let encoded = ""

  let cols = Math.ceil(Math.sqrt(noSpaces.length))
  let rows = Math.floor(Math.sqrt(noSpaces.length))

  for (let k = 0; k < cols; k++) {
    for (let i = 0; i < cols; i++) {
      if (noSpaces[((i * cols) + k)]) {
        (encoded = encoded + noSpaces[((i * cols) + k)])
      }
    }
    encoded = encoded + " "
  }
  return encoded
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

