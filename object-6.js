/**
 * Javascript Object Notation => defines the model to share data between platforms/languages
 * JSON and Function Constructor
 */
const house = {
  _rooms: 14,
  _windows: 32,
  _doors: 18,
  _flats: 2,
  _palours: 2,
  get flats() {
    return this._flats;
  },

  set flats(value) {
    this._rooms = 7 * value;
    this._doors = 9 * value;
    this._palours = 1 * value;
    this._windows = 16 * value;
    this._flats = value;
  },
  set palours(value) {
    throw new Error("Sorry you cannot update palours");
  },
  set rooms(value) {
    throw new Error("Sorry you cannot update rooms");
  },
  get rooms() {
    return this._rooms;
  },
  set doors(value) {
    throw new Error("Sorry you cannot update doors");
  },
  set windows(value) {
    throw new Error("Sorry you cannot update windows");
  },
};

let obj = {
  name: "Stanley",
};
let bigNumber = 500;
let a = "Hello";
let arr = [1, 32, 43, 5, 6, 7, 7];
let str = "Hello";

let obj2 = '{"name": "stanley"}'; // JSON
let obj3 = JSON.parse(obj2);
let obj4 = JSON.stringify(obj);
let obj5 = JSON.stringify(arr);
let obj6 = JSON.stringify(str);
let obj7 = JSON.parse(obj6);
//
const obj8 = JSON.stringify(house);

console.log(obj);
console.log(obj3);
console.log(obj4);
console.log(arr);
console.log(obj5);
console.log(obj6);
console.log(console);
console.log(JSON.stringify(console));
console.log(obj8);
console.log(JSON.parse(obj8));
// FUNCTION CONSTRUCTOR
function School(name, location) {
  this.name = name;
  this.location = location;

  this.getName = function () {
    return this.name;
  };

  this.getLocation = function () {
    return this.name;
  };
}

const school = {
  name: "dsdf",
};
const hisSchool = school;
const herSchool = school;
hisSchool.name = "United";
herSchool.name = "Harvard";

//
console.log(hisSchool.name);
console.log(herSchool.name);
console.log(herSchool === hisSchool);

const mySchool = new School("United Christian", "Apapa Lagos"); // instantiation
const yourSchool = new School("Harvard University", "London");

console.log(mySchool.getName());
console.log(yourSchool.getName());
console.log(mySchool === yourSchool);

// User story
