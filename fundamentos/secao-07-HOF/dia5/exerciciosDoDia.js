// const myList = [5, 2, 3];

// const swap = ([number1, number2, number3]) => [number1, number2, number3] = [number3, number2, number1];

// console.log(swap(myList));

//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([carName, marca, year]) => {
//     return {
//         carName,
//         marca,
//         year,
//     }
// }
// console.log(toObject(chiron));

//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//

// // escreva greet abaixo
// const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;
// // Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
// const student1 = {
//     name: `Claudia`,
//     lastName: `Farias`,
//     age: 23,
//   }
  
//   const student2 = {
//     name: `Vitor`,
//     age: 20,
//   }
  
//   const getLastName = ({name, lastName = 'lastName não preenchido', age}) => {
//     return {
//         name,
//         lastName,
//         age,
//     }
//   }
//   // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  
//   console.log(getLastName(student1));
//   console.log(getLastName(student2));

//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student1, [student2, student3], [student4, student5] ] = moreStudents;

console.log(student1, student2, student3, student4, student5);