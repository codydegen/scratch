var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

// window.addEventListener('storage', function(e) {
//   console.log(e.key);
//   console.log(e.newValue);
//   console.log(e.oldValue);

// });



function handle_storage(e) {
  if (!e) { e = window.event; }
  console.log('hey');
  console.log(e.key);
  console.log(e.newValue);
  console.log(e.oldValue);
  alert(e);
}

localStorage.setItem("test4", "testItem2");

let posOps = {
  enableHighAccuracy: true,
  timeout: 2000,
  maximumAge: 1000,
}

// function logStorageChange(changes, area) {
//   console.log("Change in storage area: " + area);
 
//   var changedItems = Object.keys(changes);
 
//   for (var item of changedItems) {
//     console.log(item + " has changed:");
//     console.log("Old value: ");
//     console.log(changes[item].oldValue);
//     console.log("New value: ");
//     console.log(changes[item].newValue);
//   }
// }
// browser.storage.onChanged.addListener(logStorageChange);



function get_location() {
  // console.log('prior to request');
  navigator.geolocation.getCurrentPosition(show_map, handle_error, posOps);
  // console.log('following request');
}

function show_map(position) {
  // console.log('inside show_map');
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  let speed = position.coords.altitude;
  // let's show a map or do something interesting!
  // console.log(latitude, longitude,speed);
}

function handle_error(err) {
  // console.log(err.code);
  // console.log(err.message);
}
get_location();

localStorage["test3"] = "testValue";
localStorage.setItem("test4", "testItem2");

console.log('local storage length ' + localStorage.length);
console.log('local storage first key: ' + localStorage.key(1));