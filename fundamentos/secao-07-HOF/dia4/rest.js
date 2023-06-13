const countParams = (...args) => {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
  console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(countParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88
//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});

//---------------//----------------////---------------//----------------////---------------//----------------////---------------//----------------//
const sums = (...numbers) => {
   return numbers.reduce((acc, curr) => acc + curr,0)
}
console.log(sums(4,5,6));