// functionFactory.js
// Author: Howard Smith

// --------------------------

function cube(num) {
  return num * num * num;
}

// console.log(cube(5));

// --------------------------

function absolute(num) {
  if(num < 0) {
    return num * -1;
  } else {
    return num;
  }
}

// console.log(absolute(0));

// --------------------------

var nameArray = ["Anne", "Bob", "Carl", "Doug", "Emily"];

function addY(name) {
  return name + "y";
}

var nickNameArray = nameArray.map(addY);

// console.log(nickNameArray);

// --------------------------

function makeKiaOra(name) {
  var myFunc = function() { console.log("Kia ora, " + name); }
  return myFunc;
}

var kiaOraJoe = makeKiaOra('Joe');
kiaOraJoe();

// --------------------------

