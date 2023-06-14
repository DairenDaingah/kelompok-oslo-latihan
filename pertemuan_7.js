ls//Const pada Array & Object

// const numbers = [1, 2, 3, 4, 5];
// numbers[3] = 10;
// console.log(numbers);

// const john = {
//   firstName: "john",
//   age: 33,
//   status: "active",
// };

// john.status = "not active";
// console.log(john);

// var grade = 100;

// var grade = 90;

// console.log(grade);

//String Literal

// const john = {
//   firstName: "john",
//   lastName: "doe",
//   age: 33,
//   status: "active",
// };

//Halo nama saya john doe, umur saya 33 tahun dan status saya active
// const kalimat5 =
//   "Halo nama saya " +
//   john.firstName +
//   " " +
//   john.lastName +
//   ", umur saya " +
//   john.age +
//   " tahun dan status saya " +
//   john.status;

// console.log(kalimat5);

// const kalimat6 = `Halo nama saya ${john.firstName} ${john.lastName}, umur saya ${john.age} tahun dan status saya ${john.status}`;
// console.log(kalimat6);

//Arrow Function

// function greetings() {
//   return `Hello world`;
// }

// const greetings2 = (fullName) => `Hello ${fullName} this is arrow function`;

// console.log(greetings2("John Doe"));

// let numbers = [1, 2, 3, 4, 5];

// let res1 = numbers.map(function (element) {
//   return element;
// });
// let res2 = numbers.map((element) => element);
// console.log(res);

//Default Parameter
// const greetings5 = (fullName, age) => {
//   if (fullName === undefined) {
//     fullName = "John Doe";
//   }
//   if (age === undefined) {
//     age = 33;
//   }

//   return `Hello nama saya ${fullName}, dan umur saya ${age} tahun`;
// };

// const greetings6 = (fullName = "JohnDoe", age = 33) =>
//   `Hello nama saya ${fullName}, dan umur saya ${age} tahun`;

// console.log(greetings6("Stenly Adam", 35));

//Rest Parameter
// const penjumlahan = (a, b, c, ...params) => {
//   let hasil = 0;
//   params.forEach((element) => {
//     hasil += element;
//   });
//   return hasil;
// };

// console.log(penjumlahan(1, 2, 3, 4, 5, 6));

//Spread Operator
// let numbers = [1, 2, 3, 4, 5];
// console.log(...numbers);

//Duplikasi Array
// let numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = [...numbers1];

// numbers1.push(6);
// numbers2.push(7);

// console.log("numbers1 : ", numbers1);
// console.log("numbers2 : ", numbers2);

//Menggabungkan Array
// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combineNumbers5 = numbers1.concat(numbers2, numbers3);
// console.log(combineNumbers5);

// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
// console.log(combineNumbers6);