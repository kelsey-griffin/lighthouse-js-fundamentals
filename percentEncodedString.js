const urlEncode = function(text) {
  // Put your solution here
  if (text[0] === " ") {
    text = "" + text.substring((1),text.length);
  };
  for (let i = 1; i < text.length-1; i++) {
    if (text[i] === " ") {
      text = text.substring(0,i) + "%20" + text.substring((i+1),text.length);
    };
  };
  return text
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));