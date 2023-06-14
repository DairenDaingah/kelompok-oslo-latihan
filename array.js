// //1. 
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// //2.
// let people = ["Greg", "Mary", "Devon", "James"];

// people.forEach(function(person) {
//   console.log(person);
// });

//3.
// let people = ["Greg", "Mary", "Devon", "James"];
// let index = people.indexOf("Greg");

// if (index !== -1) {
//   people.splice(index, 1);
// }

// console.log(people);

//4.
// let people = ["Greg", "Mary", "Devon", "James"];
// let index = people.indexOf("James");

// if (index !== -1) {
//   people.splice(index, 1);
// }

// console.log(people);

//5.
// let people = ["Greg", "Mary", "Devon", "James"];
// people.push("Reynaldo Daingah");

// console.log(people);

//6.
// let people = ["Greg", "Mary", "Devon", "James"];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
  
//   if (people[i] === "Mary") {
//     break;
//   }
// }

//8.
// let people = ["Greg", "Mary", "Devon", "James"];

// let copy = people.slice();
// copy = copy.filter(person => person !== "Mary" && person !== "Matt");

// console.log(copy);

//9.
// let people = ["Greg", "Mary", "Devon", "James"];

// // Remove "Devon" using splice()
// let index = people.indexOf("Devon");
// if (index !== -1) {
//   people.splice(index, 1);
// }

// // Add "Elizabeth" and "Artie" using splice()
// people.splice(1, 0, "Elizabeth", "Artie");

// // Add "Your Name" at the end
// people.push("Enal");

// console.log(people);

//10.
// let people = [ 'Artie', 'Elizabeth', 'Enal', 'Mary', 'Matt' ]
// let withBob = people.concat("Bob");

// console.log(withBob);