const valueElement = document.getElementById('value');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
  
// declarando a variavel com o valor inicial
let currentValue = 5;

// 1- Ao clicar no botão subtrair ou somar esse evento é escurado pelo addEventListener
/*2- Com a arrowfunction executamos a condicional if onde verifica o valor atual
 e atualiza no HTML com a funçao updateValue */
subtractButton.addEventListener('click', () => {
    if (currentValue > 0) {
      currentValue--;
      updateValue();
    }
});
  
addButton.addEventListener('click', () => {
    if (currentValue < 5) {
      currentValue++;
      updateValue();
    }
});
  
/* 1- valueElement se refere ao elemento HTML que contém o valor que está sendo exibido na página.
   2-textContent é uma propriedade dos elementos HTML que define ou recupera o texto que está dentro do elemento.
   3- A função updateValue() é responsável por atualizar o elemento HTML que exibe o valor na página com o valor atualizado (currentValue)
*/
function updateValue() {
    valueElement.textContent = currentValue;
}