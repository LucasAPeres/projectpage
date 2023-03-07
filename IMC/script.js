let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');
let classificacao = '';

function imc() {

  let nome = document.getElementById('nome').value;
  let altura = document.getElementById('altura').value;
  let peso = document.getElementById('peso').value;

  if (nome !== '' && altura !== '' && peso !== '') {
    let valorImc = ((peso / (altura * altura)) * 10000).toFixed(0);
    if (valorImc < 18) {
      classificacao = ' Você está abaixo do peso.';
    }
    if (valorImc >= 18) {
      classificacao = ' Você está no seu peso ideal! ';
    }
    if (valorImc > 25) {
      classificacao = ' Você está acima do peso. '
    }
    resultado.textContent = (nome[0].toUpperCase() + nome.substring(1) + ', seu IMC é de: ' + valorImc + '! ' + classificacao);
  }
  else {
    alert('PREENCHA TODOS OS CAMPOS, POR FAVOR! ');
  }
}
calcular.addEventListener('click', imc);
