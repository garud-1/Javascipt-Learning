var name = "Hitesh";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. H";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. HC";
    console.log("Line number 12", name);
  }
}

sayName();

// what does it mean by deprecated values
// deprecated values are those values which are no longer in use
// but still present in the code
// these values are not recommended to use
// these values are not removed from the code