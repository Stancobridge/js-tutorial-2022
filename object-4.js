/**
 *
 * OBJECT METHOD AND 'this'
 */
const count = 8;
// 'this' points to the object in its scope; 'this' point to the closest scope in the prototype chain; 'this' points to the caller scope

const student = {
  name: "stanley", // property holds string
  age: 5, // property hold number
  options: {
    // property thats holds object
    is_active: true, // property
  },
  getName: () => {
    return this;
  },
  sayAge() {},
  sum(x, y) {
    console.log(x, y);
  },
};
student.sum(10, "Hello")

const school = {
  name: "FPO",
  getName() {
    return this;
  },
};

const myName = function (number) {
  console.log(number + 5);
};
myName(10);

// school.getName();
// function myAge() {
//   console.log(this);
// }
// console.log(student.age);
// const getName = student.getName.apply(student);
// console.log(getName);

// // METHODS
// // console.log("ANYTHING"); // method
// // console.log(student.age); //
// // student.name = "Okechukwu";
// // student.getName();
// // school.getName.call(student);
