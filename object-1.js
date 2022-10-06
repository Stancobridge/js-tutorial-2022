// /**
//  *
//  * OBJECT LITERAL
//  */
// const items = [1, 2, 34, 45];
// const person = {
//   name: "stanley",
//   age: 12,
//   height: 40,
//   weight: 4000,
//   school: {
//     name: "Federal Polytechnic Oko",
//     department: "Computer Science",
//     location: "Atani, Anambra",
//     country: "Nigeria",
//   },
// };

// // console.log(person);
// // console.log(`Hello your name is ${person.name}`);

// // console.log(`Hello your height is ${person.height}`);

// // Object is very Dynamic
// // console.log(`Hello your age is ${person.age}`);
// person.age = 60;
// person.age = "Somtochukwu";
// person.dob = "1992/21/3";

// // console.log(`Hello your age is ${person.age}`);
// // console.log(`Hello your dob is ${person.dob}`);
// // console.log(`Hello your school name is ${person.school.name}`);
// person.profile = {};
// // console.log(person["age"]);
// person.profile.gender = "male";
// person.hubbies = [
//   {
//     name: "Swimming",
//     percentage: 50,
//   },
//   {
//     name: "Coding",
//     percentage: 30,
//   },
// ];

// for (let hubby of person.hubbies) {
//   // console.log(hubby);
// }

// for (let personProp in person) {
//   // console.log(person[personProp]);
// }

// // console.log(person.hubbies["0"]);

// /** SCHEMA - EXACT
//  * name
//  * age
//  * class
//  * gender
//  */

// const students = [];

// function addStudent(student) {
//   // Dont accept none object type
//   if (typeof student !== "object" || !student) {
//     console.log("Please enter a valid student schema");
//     return false;
//   }

//   // make sure student matches our schema
//   if (
//     !student.hasOwnProperty("age") ||
//     !student.hasOwnProperty("class") ||
//     !student.hasOwnProperty("name") ||
//     !student.hasOwnProperty("gender")
//   ) {
//     console.log("Sorry you failed our student schema match");
//     return false;
//   }

//   const acceptedSchemas = ["age", "class", "name", "gender"];

//   for (const prop in student) {
//     if (!acceptedSchemas.includes(prop)) {
//       console.log(`${prop} not accepted`);
//       return false;
//     }
//   }

//   // make sure student doesnt exist before by name;
//   for (let oldStudent of students) {
//     if (oldStudent.name === student.name) {
//       console.log(`Student with the name ${student.name} already exist`);
//       return false;
//     }
//   }

//   // const alreadyExist = students.find((oldStudent) => {
//   //   if (oldStudent.name === student.name) {
//   //     return true;
//   //   }
//   // });

//   // if (alreadyExist) {
//   //   console.log(`Student with this ${student.name} name already exist`);
//   //   return false;
//   // }

//   students.push(student);
//   return student;
// }

// function getStudent(name) {
//   if (!name) {
//     console.log("Name cannot be empty");
//     return false;
//   }
//   const student = students.find(
//     (oldStudent) => oldStudent.name.toLowerCase() === name.toLowerCase()
//   );
//   if (!student) {
//     console.log(`Student with name ${name} not found`);
//     return false;
//   }

//   return student;
// }
// addStudent({
//   name: "Stanley",
//   age: 23,
//   class: "Primary 2",
//   gender: "male",
// });

// addStudent({
//   name: "Stanley",
//   age: 23,
//   class: "Primary 2",
//   gender: "male",
// });

// addStudent({
//   name: "David",
//   age: 23,
//   class: "Primary 2",
//   gender: "male",
// });

// console.log(getStudent(false));
// console.log(students);

// /**
//  *
//  * TODO APP - Codebase
//  * addTodo - add to todo lists
//  * getTodo - get a todo by title
//  * updateTodo - get a todo by title and update any part of the todo
//  * deleteTodo - delete to by title
//  */
// /**
//  *
//  * title
//  * date
//  * done
//  */

// const cookTodo = {
//   title: "cook",
//   date: "2022",
//   done: false,
// };

// updateTodo("cook", {
//   done: true,
// });
// console.log(todos);

