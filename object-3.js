// dynamic system of an object
// accessing object when the property name is known obj.name
// accession object when the property name is unknown obj['name']
const obj = {
  title: "First todo",
  done: true,
  date: "12/10/2022",
  details: {
    height: "3243",
    width: 3421,
  },
}; // object literal
const objDetails = obj.details;
delete objDetails.height;

// reference

const objA = {};
const objC = objA;
objA.name = "first pointer";
objC.age = "no age";
const objB = {
  oldObj: structuredClone(objA),
};
const strA = "hello";
const strB = "hello";
console.log(strA == strB);
console.log(objA == objB);
console.log(objA == objC);

delete objA.age;
console.log(objC);
console.log(objA);
console.log(objB);
console.log(objB.oldObj.age);

// prototypal inheritance === unending