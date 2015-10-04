console.log("first line");


var timeoutID;

function delayedAlert() {
  timeoutID = setTimeout(slowAlert, 2000 * i);
}

function slowAlert() {
  console.log("delayed line");
}

function clearAlert() {
  clearTimeout(timeoutID);
}

for (var i = 0; i < 5; i++) {
  delayedAlert();
}

console.log("last line");
