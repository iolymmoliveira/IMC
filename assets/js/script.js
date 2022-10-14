const calcularIMC = document.getElementsByClassName('calcular');

function calcIMC() {

  /*Pega os dados nos inputs e armazena em uma variável*/
  const peso = document.getElementsByClassName('peso').value;
  const altura = document.getElementsByClassName('altura').value;
  const sexo = document.getElementsByClassName('sexo').value;
  const resultadoNum = document.getElementsByClassName('resultadoNum');
  const resultadoTexto = document.getElementsByClassName('resultadoTexto');

  /*No caso dos campos estarem preenchidos o calculo é feito*/
  if(peso !== '' && altura !== '') {
    
    const valorIMC = ( peso / (altura * altura)).toFixed(2);

    let img = document.getElementsByClassName('image');
    let texto = '';

    if (valorIMC >= 30) {
      img.src = './imgs/01.png';
      texto = 'Peso Pesadoo!';
      document.body.style.backgroundColor = '#red';
    } 
    else if (valorIMC >= 25) {
      img.src = './imgs/homer-simpson.png';
      texto = 'Táa gordinhooo(aaa)!';
      document.body.style.backgroundColor = '#yellow';
    } 
    else if (valorIMC >= 19) {
      img.src = './imgs/popeye.png';
      texto = 'Normalzãoo!';
      document.body.style.backgroundColor = '#green';
    } 
    else {
      img.src = './imgs/magrela.jpg';
      texto = 'Chassi de Grilo, muito baixo!';
      document.body.style.backgroundColor = '#orange';
    }

    resultadoNum.textContent = `${valorIMC}`;
    resultadoTexto.textContent = `${texto}`;
  }
  else {
    resultadoNum.textContent = 'Todos os campos devem ser preenchidos!';
  }
}

calcularIMC.addEventListener('click', calcIMC);

document.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    const botao = document.querySelector('.calcular');
    botao.click();
  }
})
