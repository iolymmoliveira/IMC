/* Variável de escopo global referente ao botão calcular */
const calcular = document.getElementById('calcular');

function calcIMC() {
  /*Pegar os dados nos inputs e armazenar em uma variável*/
  const select = document.getElementById('sexo');
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const sexo = select.options[select.selectedIndex].value;
  const resultadoNum = document.getElementById('resultadoNum');
  const resultadoTexto = document.getElementById('resultadoTexto');

  calculaIMCeValidaInputs();
}

/* Função para validar se os campos estão preenchidos*/
function calculaIMCeValidaInputs() {
  if (peso.value !== '' && altura.value !== '') {
  
    /* Realiza o cálculo do imc e armazena na variável */
    const resultadoIMC = (peso.value / (altura.value * altura.value)).toFixed(2);

    let img = document.getElementById('image');
    let texto = '';

    if (resultadoIMC >= 30) {
      if (sexo.value == 'Feminino') {
        img.src = 'assets/imgs/lisa-simpson.png';
      } else {
        img.src = 'assets/imgs/clancy-simpson.png';
      }
      texto = 'Peso Pesadoo!';
      document.querySelector('.container-right').style.backgroundColor = 'rgba(245, 35, 35, 0.986)';
    }
    else if (resultadoIMC >= 25) {
      if (sexo.value == 'Feminino') {
        img.src = 'assets/imgs/cletus-spuckler.png';
      } else {
        img.src = 'assets/imgs/homer-simpson.png';
      }
      texto = 'Táa gordinhooo(aaa)!';
      document.querySelector('.container-right').style.backgroundColor = 'rgb(255, 255, 0)';
    }
    else if (resultadoIMC >= 19) {
      if (sexo.value == 'Feminino') {
        img.src = 'assets/imgs/marge-simpson.png';
      } else {
        img.src = 'assets/imgs/waylon-smithers.png';
      }
      texto = 'Normalzãoo!';
      document.querySelector('.container-right').style.backgroundColor = 'rgb(81, 243, 81)';
    }
    else {
      if (sexo.value == 'Feminino') {
        img.src = 'assets/imgs/olivia-palito.png';
      } else {
        img.src = 'assets/imgs/shaggy-rogers.png';
      }
      texto = 'Chassi de Grilo, muito baixo!';
      document.querySelector('.container-right').style.backgroundColor = 'rgb(245, 158, 100)';
    }

    resultadoNum.textContent = `${resultadoIMC}`;
    resultadoTexto.textContent = `${texto}`;
  }
  else {
  resultadoNum.textContent = 'Todos os campos devem ser preenchidos!';
  }
}

/* O botão calcular recebe a propriedade de escutar o evento de click e ao ocorrer executa a função passada */
calcular.addEventListener('click', calcIMC);

document.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    const botao = document.querySelector('#calcular');
    botao.click();
  }
})
