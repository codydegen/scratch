
grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];

var maxIncreaseKeepingSkyline = function(grid) {
  // To accomplish this we want to find the minimum height of the maximum height in the x or y directions.
  // First, we run through the grid to create an array of the maximum heights in the X and Y directions.
  // Then, we iterate back through the array and sum up the differences in height for each building. 

  let numIncrease = 0;
  let maxX = []; //Array is just getting pushed to so no size declaration needed.
  let maxY = new Array(grid[0].length).fill(0); //Array will change over time so need to set values to start.

  for (let i = 0; i < grid.length; i++) {
    maxX.push(Math.max(...grid[i])); // Use spread operator to find max of array in x direction.  Easy to do because X-direction is self-contained vs. Y-direction which spans multiple arrays.
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > maxY[j]) { // in Y direction, need to look across multiple arrays.  Check for maximum value.
        maxY[j] = grid[i][j];
      }
    }
  }

  let maxHeight = 0; //Temporary max allowable height of building for a given square.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxHeight = maxX[i] < maxY[j] ? maxX[i] : maxY[j]; // Set the max allowable height to the lesser of the two maxes.
      numIncrease += (maxHeight-grid[i][j]); // Increment the height increase by the difference between the two.
    }    
  }

  return numIncrease;
};

let x = maxIncreaseKeepingSkyline(grid);
console.log(x);