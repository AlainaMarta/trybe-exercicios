// let soma = 0;
// let media = 0;
// for(let index = 0; index < numbers.length; index += 1){
    //    soma += numbers[index];
    //    media = soma / numbers.length;
    // }
    // if(media > 20){
        //  console.log('O valor da média aritmética é maior que 20');
        // }else{
//  console.log('O valor da média aritmética é menor ou igual a 20');
// };
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];  
// let higherNumber =0;
// for(let index = 0; index < numbers.length; index += 1){
//    if(higherNumber < numbers[index]){
//        higherNumber = numbers[index];
//        }
//     }
//     console.log(higherNumber);


// for(let index = 0; index < numbers.length;index += 1 ){
//     let impar = 0;
//     if(numbers[index] % 2 !== 0){
//         impar = numbers[index] ;
//         console.log(impar);
//     }
// }
let lowerNumber = [];
for(let index = 0; index > numbers.length; index += 1){
   if(lowerNumber > numbers[index] ){
       lowerNumber = numbers[index];
       }
    }
 console.log(lowerNumber);
