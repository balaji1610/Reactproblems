//Optional Chaining

const Optionalchaining = {
  //   Name: "Balaji",
};

console.log(Optionalchaining.Name);
var Chain = "No Data";
console.log(Optionalchaining?.Name ?? Chain);
// https://i.stack.imgur.com/6I1Ng.gif
// Exampl of Seal

// seal
//Not add propertiy & delete element
const Myobject = {
  name: "xyz",
  age: "40",
};

//Sel
Object.seal(Myobject);

Myobject.Lastname = "gd"; //add -- NO

Myobject.name = "SealUpdate"; //Update

delete Myobject.age; //Delete --N0

console.log(Myobject, "SEALMETHOD");

const MyobjectTwo = {
  name: "xyz",
  age: "40",
};

//Freeze

Object.freeze(MyobjectTwo);

MyobjectTwo.Lastname = "Freeze"; //add -- NO

MyobjectTwo.name = "Update"; //Update

delete MyobjectTwo.age; //Delete --N0

console.log(MyobjectTwo, "FREEZEMETHOD");
