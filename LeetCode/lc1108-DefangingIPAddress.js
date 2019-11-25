var defangIPaddr = function(address) {
  let returnString = address.split('.');
  returnString = returnString.join('[.]');
  return returnString;
}
let test = "1.1.1.1";
console.log(defangIPaddr(test));