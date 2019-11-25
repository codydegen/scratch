let T = [73,74,75,71,69,72,76,73];

// var dailyTemperatures = function(T) {
//   let returnList = Array.from({length:T.length},x=>0);
    
//   for (let i = 0; i<T.length-1;i++){
//       let numDays = 0;
//       for (let j = 0; j<T.length-i;j++){
//           if (T[i] < T[j+i]) {
//               numDays = j;
//               break; 
//           }
      
//       }
//       returnList[i]=numDays;
//   }

//   return returnList;
// };

var dailyTemperatures = function(T) {
    let returnList = new Array(T.length).fill(0);
    console.log(returnList);
    console.log(T);
    let stack = [];
    for (let i = 0; i<T.length;i++) {
        let currentTemp = T[i];
        //console.log(T[stack[stack.length]])
        while(stack.length > 0 && T[stack[stack.length-1]] < currentTemp) {
            let index = stack.pop();
            returnList[index] = i - index;
        }



        stack.push(i)
        //console.log(stack);
    }
    return returnList;
}

//dailyTemperatures(T);

















// console.log(Math.random());
// var dailyTemperatures = function(T) {
//     const returnArr = new Array(T.length).fill(0);
//     const stack = [0];
//     for (let i = 1; i < T.length; i++) {
//         const el = T[i];
//         while (stack.length && T[stack[stack.length-1]] < el ) {
//             const index = stack.pop();
//             returnArr[index] = i - index;
//         }
//         stack.push(i);
//     }
//     return returnArr;
// };

console.log(dailyTemperatures(T));