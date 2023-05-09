let motor = `ligado`
const ligaDesliga = () => (
    motor == `ligado` ?`Motor está ligado!`: `Motor está desligado` 
);
console.log(ligaDesliga());


const valorPi = 3.14;
const circleArea = (valorRaio) => (
    area = valorPi * valorRaio ** 2 ,
    area ? `Essa é a área do círculo: ${area}`: `O parâmetro radius deve ser um número`
);

console.log(circleArea(5));



const longestWord = (frase) => {
    let fraseSplit = frase.split(' ');
    let maiorPalavra = [0];
    for (let index = 0; index < fraseSplit.length; index += 1){
        fraseSplit[index].length > maiorPalavra.length ?  maiorPalavra = fraseSplit[index] : false 
    }
    return maiorPalavra
};
console.log(longestWord(`Antônio foi ao banheiro e não sabemos o que aconteceu`));