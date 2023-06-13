// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'uva', 'pitaya'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['aveia', 'castanha', 'damasco'];

const fruitSalad = (fruit, additional) => {
  return [
    ...fruit,
    ...additional,
  ]

};

console.log(fruitSalad(specialFruit, additionalItens));