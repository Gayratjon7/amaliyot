// // // forEach()
// let numbers = [1, 3, 4, 9, 8];

// function computeSquare(element) {
//   console.log(element * element);
// }
// numbers.forEach(computeSquare);

// filter()

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function checkEven(number) {
//   if (number % 2 == 0)
//     return true;
//   else
//     return false;
// }
// let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);

// // map()

// let numbers = [2, 4, 6, 8, 10];

// function square(number) {
//   return number ** 2;
// }

// let square_numbers = numbers.map(square);
// console.log(square_numbers);

// // string bilan

// const prices = [1800, 2000, 3000, 5000, 500, 8000];

// let newPrices = prices.map(Math.sqrt);
// console.log(newPrices);

// const string = "JavaScript";
// const stringArr = string.split('');

// let asciiArr = stringArr.map(x => x.charCodeAt(0));

// console.log(stringArr);
// console.log(asciiArr);

// // objectlar bilan

// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// const calcAmt = (obj) => {
//     newObj = {};
//     newObj.name = obj.name;
//     newObj.netEarning = obj.salary + obj.bonus - obj.tax;
//     return newObj;
// };

// let newArr = employees.map(calcAmt);
// console.log(newArr);

// sort()

// let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// let sortedArray = city.sort();
// console.log(sortedArray);

// // some()

// function isEven(element) {
//     return element % 2 === 0;
//   }

//   let numbers = [1, 3, 2, 5, 4];

//   console.log(numbers.some(isEven));

//   // Output: true

// // every()

// function checkAdult(age) {
//     return age >= 18;
// }
// const ageArray = [34, 23, 20, 26, 12];

// let check = ageArray.every(checkAdult);

// // Output: false

// // every() true
// let numbers = [ 1 , 2 , 3 , 4 , 5];

// let result = numbers.every(element => element < 6);
// console.log(result);

// // Output: true

// million

// let billion = 1_000_000_000;

// let billion = 1e10;  // 1 billion, literally: 1 and 9 zeroes

// alert( 7.3e10 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

// alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// toString(base)

// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111

// // toFixed()
// let n = 1.23456;

// alert( n.toFixed(2) ); // 1.23

// let result = 20 * 'nice'

// // output: NaN

// const a = 2 / 0;
// console.log(a); // Infinity

// const a = -2 / 0;
// console.log(a); // -Infinity

// const bigint = 1234567890123456789012345678901234567890n;

// const sameBigint = BigInt("1234567890123456789012345678901234567890");

// const bigintFromNumber = BigInt(10); // same as 10n

// Symbol()

// let id = Symbol();

// Symbol('id')

// id is a symbol with the description "id"

// let id = Symbol("id");

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false

// let id = Symbol("id");
// alert(id); // TypeError: Symbol qiymatini satrga aylantirib bo'lmaydi

// key
// let user = {
//     name: "John"
//   };

//   let id = Symbol("id");

//   user[id] = 5;

//   console.log( user[id] ); // kalit sifatida belgidan foydalanib ma'lumotlarga kirishimiz mumkin

// let id = Symbol("id");

// let person = {
// 	name: "Jack",
// 	age: 25,
// 	[id]: 12
// };

// for (let key in person) {
// 	console.log(key , person);
// }

// // for loop
// let sum = 0;
// const n = 80;

// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
// FOR()
// console.group('About Books')
// for(let i = 0; i < books.length; i++){
//     console.log('Title:', books[i].title, 'Rating:', books[i].rating)
// }
// console.groupEnd()

// forEach()

// books.forEach((item, index , arr) => {
//     console.log( index , 'Title:', item.title, 'Rating:', item.rating)
// })

// some() va every()

// const someMovies = books.some((movie) => {
//     return movie.rating > 5
// })
// console.log(someMovies)

// qisqartirmasi

// const someMovies = books.some(movie => movie.rating > 5)
// console.log(someMovies)

// every()

// const someMovies = books.every((movie) => {
//     console.log(movie)
//     return movie.rating < 3.67
// })
// console.log(someMovies)

// qisqartirmasi

// const someMovies = books.every(movie => movie.rating < 3.67)
// console.log(someMovies)

// for()
// for(let i = 0; i < books.length; i++){
//     console.log('Title:', books[i].title, 'Rating:', books[i].rating)
// }

// filter()

// const filterBooks = books.filter((book) => {
//     return book.rating > 3.5 && book.rating < 4
// })
// console.log(filterBooks)

// // map()

// const mapBook = books.map((book) => {
//         return  {...books, authors: book.authors + ' ' + 'OF', ...books, rating: book.rating - 1, }
// } )
// console.log(mapBook)

// qisqartmasi
// const mapBooks = books.map(book =>book.rating - 1)
// console.log(mapBooks)

// find()

// const findBooks = books.find((book) => {
//     return book.authors ==  'Terry Pratchett', 'Neil Gaiman'
// })
// console.log(findBooks)

// findIndex()

// const findBooks = books.findIndex((book) => {
//     return book.title ==  'Bone: The Complete Edition'
// })
// console.log(findBooks)

// flat() va flatMap()

let arr1 = [10, 20, [30, 40, 50], [60, 70, 80, 90], 100];
let arr2 = [10, 20, [30, [40, 50]], [[60, 70, 80], 90], 100];
let arr3 = [10, 20, [30, [40, 50]], [[[60, 70], 80], 90], 100];

// let arr1Example = arr1.flat()
// console.log(arr1Example)

// let arr2Example = arr2.flat()
// console.log(arr1Example)

// let arr3Example = arr3.flat()
// console.log(arr1Example)

let employee = [
  { id: 101, name: "John", skills: ["HTML", "CSS", "JAVASCRIPT"] },
  { id: 101, name: "John", skills: ["C#", "SQL"] },
  { id: 101, name: "John", skills: ["ANGULAR", "REACT"] },
];

// // flat()
// console.log('map + flat')
// let employee1 = employee.map((employer) => {
//     return employer.skills
// }).flat()
// console.log(employee1)

// // flatMap()
// console.log('flatMap')
// let employee2 = employee.flatMap((employer) => {
//     return employer.skills
// })
// console.log(employee2)

// sort()

// kottasidan kichigiga kopayadi

// let numbers = [5,8,6,4,2,7,0,1,10,80,94,60,40]

// const sortNumber = numbers.sort(( num1 , num2 ) => {
//     return num1 - num2
// })
// console.log(sortNumber)

// kottasidan kichigiga kamayadi

// let numbers = [5,8,6,4,2,7,0,1,10,80,94,60,40]

// const sortNumber = numbers.sort(( num1 , num2 ) => {
//     return num2 - num1})
// console.log(sortNumber)

// const books = [
//     {
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'A Truly Horrible Book',
//     authors: ['Xavier Time'],
//     rating: 2.18,
//     genres: ['fiction', 'garbage']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]

// sort()

// const sortBooks = books.sort((m1, m2) => {
//     return m1.rating - m2.rating
// })
// console.log(sortBooks)

// form()
// tushunmadm

// reduce()

// const array1 = [1,2,3,4,5]

// const reduceArray = array1.reduce(( acc, carVal) => {
//     console.log("Acc" , acc , "Carval", carVal)
//     return acc + carVal
// })
// console.log(reduceArray)

// filter()

// const filterBooks = books.filter((book) => {
//     return book.rating > 3.5 && book.rating < 4
// })
// console.log(filterBooks)

// // map()

// const mapBook = books.map((book) => {
//         return  {...books, authors: book.authors + ' ' + 'OF', ...books, rating: book.rating - 1, }
// } )
// console.log(mapBook)

// Vazifa

// masala 1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const allStudents1 = students.map((student) => {

//   if(student.percent > 85 && student.percent <= 100){
//     console.log( student, 'baho 5' );
//   }else if(student.percent > 70 && student.percent <= 85){
//     console.log(student, 'baho 4'  );
//   }else if(student.percent > 60 && student.percent <= 70 ){
//     console.log(student, 'baho 3' )
//   }

//   return student
// })

// console.log(allStudents1)

// const allStudents = students.filter((student) => {
//   return student.percent > 85 && student.percent <= 100
// })
// console.log(allStudents)

// masala 2

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const animalsGroup = animals.reduce((acc, carVal) => {
//   if(acc[carVal]){
//     acc[carVal] += 1;
//   }else{
//     acc[carVal] = 1;
//   }
//   return acc;
// })
// console.log(animalsGroup)

// masala 3

// const number = [1, 2, 3, 4, 5]

// const allNum = number.map((num) => {
//   return num **2
// })
// console.log(number)
// console.log(allNum)

// masala 4
// Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
// Input: [ 1, -4, 12, 0, -3, 29, -150]
// Output: 42
// tuahunmadim.

// masala 5
// tushunmadim.

// masala 6

// const yoshlar = [
//   {name: 'John', age: 15},
//   {name: 'Mark', age: 56},
//   {name: 'Rachel', age: 45},
//   {name: 'Nate', age: 67},
//   {name: 'Jeniffer', age: 65}
// ];

// const allYosh = yoshlar.sort((yosh) => {

//   if( yoshlar.age > 10 && yoshlar.age <= 20){
//     console.log(yosh , "eng yosh")
//   }else if(yosh.age > 40 && yosh.age <= 50){
//     console.log(yosh ,"o'rta yosh")
//   }else if(yosh.age > 50 && yosh.age <= 70){
//     console.log(yosh , "eng qari")
//   }
// })
// console.log(allYosh)

// masala 9

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const allProducts = products.sort((num1 , num2) => {

//   return num1.id - num2.id
// })
// console.log(allProducts)

// masala 10

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const allProducts = products.sort((num1, num2) => {
//   return num2.rating - num1.rating

// })
// console.log(allProducts)

// masala 11

// const allProducts = products.sort((num1, num2) => {
//   return num1.rating - num2.rating

// })
// console.log(allProducts)

// masala 13

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const allProducts = products.map((mahsulot) => {
//   return mahsulot.name
// })
// console.log(allProducts)

// function testNum(a) {
//   let result;
//   if (a > 0) {
//     result = "positive";
//   } else {
//     result = "NOT positive";
//   }
//   return result;
// }
// console.log(testNum(5));



// break
// let i = 0;

// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i = i + 1;
// }
// console.log(i);

// let text = '';

// continue
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text = text + i;
// }
// console.log(text);

// switch case
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// block scope

// var x = 1;
// let y = 1;

// if (true) {
//   var x = 2;
//   let y = 2;
// }
// console.log(x);
// console.log(y);

// function
// function num(number) {
//   return number * number;
// }


// return
// function hajm(width, height) {
//   if (width > 0 && height > 0) {
//     return width * height;
//   }
//   return 0;
// }
// console.log(hajm(5, 8));


// arrow function

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((material) => material.length));
// // Expected output: Array [8, 6, 7, 9]

// Callback function

// let value = 1;
// (() => {
//   value = 2;
// });
// console.log(value)

// forEach()

// const array1 = ['a', 'b', 'c'];
// array1.forEach((element) => console.log(element));
// // Expected output: "a"
// // Expected output: "b"
// // Expected output: "c"


// amaliyotcha 😂

// function num(son){
//   if(son > 0 && son < 10 ){
//     console.log("seni bahoing 3")
//   }else if(son > 10 && son < 50){
//     console.log("seni bahoing 4")
//   }else if(son > 50 && son < 100){
//     console.log("seni bahoing 5")
//   }
// }
// num()

