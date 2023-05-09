function percorreNumeros(numbers, numero) {
    let contador = 0;
    for (let index = 0; index <= numbers.length; index += 1) {
      if (numero === numbers[index]) {
        contador += 1;
      }
    }
    return contador;
  }
  
  function maisRepetido(numbers) {
    let repetido = 0;
    let contador1 = 0;
    for (let numero of numbers) {
      let contador2 = percorreNumeros(numbers, numero);
      if (contador2 > contador1) {
        contador1 = contador2;
        repetido = numero;
      }
    }
    return repetido;
  }
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))