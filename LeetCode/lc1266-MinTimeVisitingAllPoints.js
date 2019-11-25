/**
 * @param {number[][]} points
 * @return {number}
 */

points = [[1,1],[3,4],[-1,0]];
var minTimeToVisitAllPoints = function(points) {
  // let time = 0;
  // let distX = 0;
  // let distY = 0;
  // let totalDist = 0;

  // for(let i = 0; i < points.length - 1; i++){
  //   distX = Math.abs(points[i][0] - points[i+1][0]);
  //   distY = Math.abs(points[i][1] - points[i+1][1]);
  //   totalDist = distX > distY ? distX : distY;
  //   time += totalDist;
  // }

  let time = 0;
  for(let i = 0; i < points.length - 1; i++) {
    time+= Math.max(Math.abs(points[i][0] - points[i+1][0]),Math.abs(points[i][1] - points[i+1][1]));
  }

  return time;
};

console.log(minTimeToVisitAllPoints(points));