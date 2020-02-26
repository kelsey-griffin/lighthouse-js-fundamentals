const blocksAway = function(directions) {
  let startPosition = [0,0];
  let finalPosition = [0,0];
  let subDirections = [];

  //break list of directions down into pairs of direction + distance. 
  for (let i = 0; i < directions.length; (i += 2)) {
    subDirections[(i / 2)] = Array(directions[i], directions[i + 1]);
  };

  let orientation = "north";
  //update final position according to directions
  for (let j = 0; j < subDirections.length; j++) {
    //movements in the list start with x axis. therefore subdirections in even indices are lateral/x-axis 
    if (j % 2 === 0) {
      if (subDirections[j][0] === "left") {
        if (orientation === "north") {
          finalPosition[0] = finalPosition[0] - subDirections[j][1];  
          orientation = "west";
        } else if (orientation === "south") {
          finalPosition[0] = finalPosition[0] + subDirections[j][1];
          orientation = "east";
        }    
      } else if (subDirections[j][0] === "right") {
        if (orientation === "north") {      
          finalPosition[0] = finalPosition[0] + subDirections[j][1];
          orientation = "east";
        } else if (orientation === "south") {
          finalPosition[0] = finalPosition[0] - subDirections[j][1];
          orientation = "west";
        }    
      }
    //following the logic above, subdirections in odd positions are the vertical/ y-axis movements
    } else {
      if (subDirections[j][0] === "left") {
        if (orientation === "east") {      
          finalPosition[1] = finalPosition[1] + subDirections[j][1];
          orientation = "north";
        } else if (orientation === "west") {
          finalPosition[1] = finalPosition[1] - subDirections[j][1];
          orientation = "south";
        }        
      } else if (subDirections[j][0] === "right") {
        if (orientation === "east") {      
          finalPosition[1] = finalPosition[1] - subDirections[j][1];
          orientation = "south";
        } else if (orientation === "west") {
          finalPosition[1] = finalPosition[1] + subDirections[j][1];
          orientation = "north";
        }        
      }
    };
  } 

  let n;
  let s;
  let e;
  let w;

  if (n === undefined) {
    n = 0;
  } else if (e === undefined) {
    e = 0;
  } else if (s === undefined) {
    s = 0;
  } else if (w === undefined) {
    w = 0;
  }
  if (finalPosition[0] > startPosition[0]) {
    e = Math.abs(finalPosition[0] - startPosition[0]);
  } else {
    w = Math.abs(finalPosition[0] - startPosition[0]); 
  }
  if (finalPosition[1] > startPosition[1]) {
    n = Math.abs(finalPosition[1] - startPosition[1]);
  } else {
    s = Math.abs(finalPosition[1] - startPosition[1]);
  }

  const location = {
    north : n,
    south : s,
    east : e,
    west : w
  };

  let finalCoord = {}
  for (let key in location) {
    if (location[key] !== undefined) {
        finalCoord[key] = location[key];
    }
  };
  return finalCoord;
}
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));