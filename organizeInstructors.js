const organizeInstructors = function(instructors) {
  let obj = {}
  for (let i = 0; i < instructors.length; i++) {
    obj[instructors[i].course] = [];
  };
  for (let j = 0; j < instructors.length; j++) { 
    for (let k = 0; k < Object.keys(obj).length; k++) {  
      if (Object.keys(obj)[k] === instructors[j].course) {
        let key = Object.keys(obj)[k];
        obj[key].push(instructors[j].name);
      }
    }
  };  
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
