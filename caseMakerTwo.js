const makeCase = function(input, cases) {
  let caseArray = cases
  if (!Array.isArray(caseArray)) {
    caseArray = Array(cases);
  };
  for (i in caseArray) {
    if (caseArray[i] === "camel") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === " ") {
          input = input.substring(0, idx) + input[idx + 1].toUpperCase() + input.substring((idx + 2), input.length);
        }
      };
    } else if (caseArray[i] === "pascal") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === " ") {
          input = input[0].toUpperCase() + input.substring(1, idx) + input[idx + 1].toUpperCase() + input.substring((idx + 2), input.length);
        }
      };
    } else if (caseArray[i] === "snake") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === " ") {
          input = input.substring(0, idx) + "_" + input.substring((idx + 1), input.length);
        }
      };  
    } else if (caseArray[i] === "kebab") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === " ") {
          input = input.substring(0, idx) + "-" + input.substring((idx + 1), input.length);
        }
      };
    } else if (caseArray[i] === "title") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === " ") {
          input = input[0].toUpperCase() + input.substring(1, (idx + 1)) + input[idx + 1].toUpperCase() + input.substring((idx + 2), input.length);
        }
      };  
    }
  };    
  for (j in caseArray) {
    if (caseArray[j] === "vowel") {
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] === "a" || input[idx] === "e" || input[idx] === "i" || input[idx] === "o" || input[idx] === "u" || input[idx] === "y") {
          input = input[0].toUpperCase() + input.substring(1, idx) + input[idx].toUpperCase() + input.substring((idx + 1), input.length);
        }
      };  
    }else if (caseArray[j] === "consonant") {
      //consonants
      for (let idx = 0; idx < input.length; idx++) {
        if (input[idx] !== "a" && input[idx] !== "e" && input[idx] !== "i" && input[idx] !== "o" && input[idx] !== "u" && input[idx] !== "y") {
          input = input.substring(0, idx) + input[idx].toUpperCase() + input.substring((idx + 1), input.length);
        }
      };  
    };
  };
  for (k in caseArray) {
    if (caseArray[k] === "upper") {
      input = input.toUpperCase();
    } else if (caseArray[k] === "lower") {
      input = input.toLowerCase();
    };
  };
  return input;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
