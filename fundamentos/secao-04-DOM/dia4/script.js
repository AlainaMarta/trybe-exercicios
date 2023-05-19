const preference = document.querySelector(".preferences");
console.log(preference);
const options = document.getElementsByClassName('options');
const background = document.getElementById('background-color');
const fontColor = document.getElementById('font-color');
const fontSize = document.getElementById('font-size');
const spaceBetween =  document.getElementById('line-height');
const main = document.getElementsByTagName('main');
// As pessoas devem ter o poder de alterar:
window.onload = () => {
// Cor de fundo da tela;
const btnColor = document.getElementsByClassName('btnColor')
 btnColor.addEventListener('click' () => {
    main[0].backgroundColor = btnColor.innerText;
 })
};
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
