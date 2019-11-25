// var numJewelsInStones = function(J, S) {
//   let numStones = 0;
//   let jewels = J.split('');
//   let jewelsMaster = [];
//   let jewelsContainsList = S.split('');
//   for(let i = 0; i < jewels.length;i++){
//     if (!jewelsMaster.includes(jewels[i])){
//       jewelsMaster.push(jewels[i]);
//     }
//   }

//   for(let i = 0; i < jewelsContainsList.length; i++){
//     if(jewelsMaster.includes(jewelsContainsList[i])) {
//       numStones++;
//     }
//   }
//   return numStones;
// }

var numJewelsInStones = function(J, S) {
  let numStones = 0;
  //let jewels = J.split('');
  //let jewelsMaster = new Set(J);
  let jewelsContainsList = S.split('');
  //console.log(jewelsMaster);

  for(let i = 0; i < jewelsContainsList.length; i++){
    if(J.includes(jewelsContainsList[i])) {
      numStones++;
    }
  }
  return numStones;
}

numJewelsInStones('aaaaBBBBssss','absBBSSS')