// Desafio - Faça um botão que ao ser clicado muda a cor de fundo da sua página.

const changeColorButton = document.getElementById('change-color-button');
const resetColorButton = document.getElementById('reset-color-button');
    
/* escutando os eventos de click dos botões*/
changeColorButton.addEventListener('click', changeBackgroundColor);
resetColorButton.addEventListener('click', resetBackgroundColor);

/* acessando o estilo do body atraves do document.body.style*/
const defaultBackgroundColor = document.body.style.backgroundColor;


//criando o array de cores
//criando a variavel let para monitorar a posição do array 
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
let currentColorIndex = 0;

// Reinicia para a primeira cor quando todas as cores foram usadas
function changeBackgroundColor() {
  if (currentColorIndex >= colors.length) {
    currentColorIndex = 0;
  }

  const currentColor = colors[currentColorIndex];
  document.body.style.backgroundColor = currentColor;

  currentColorIndex++; //Avança para a próxima cor na próxima vez que a função for chamada
}

// chamando o reset da cor armazenado no defaultBackgroundColor
function resetBackgroundColor() {
  document.body.style.backgroundColor = defaultBackgroundColor;
}