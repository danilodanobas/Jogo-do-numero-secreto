//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolah um Número entre 1 e 10';

let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function mensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do Número Secreto');
  exibirTextoNaTela('p', 'Escolha um Número entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O numero secreto é menor');
    } else {
      exibirTextoNaTela('p', 'Numero secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosDaLista = listaNumeroSorteados.length;

  if (quantidadeDeElementosDaLista == 10) {
    listaNumeroSorteados = [];
  }

  if (listaNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumero();
  } else {
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumero();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}





//https://www.alura.com.br/artigos/html-css-e-js-definicoes?_gl=1*1b6iwjp*_ga*MTkxMjc4NTYwMy4xNjc2OTA2MDU2*_ga_1EPWSW3PCS*MTcwNjMxODM2Mi4xNC4xLjE3MDYzMjEyODMuMC4wLjA.*_fplc*MVpibFI4aElOUllUZHNtJTJGOVBhOEFXR25heXclMkJuYkl5aWJEbnJPQzRUWmNkekVucVpxSlQ3NlhsU0JVMTl5cnJJNVJPb0xxYUt0THh1V1k2OVFZZ3JXYnJJNHdzRklCUnJOczVzakhXaVR4alFaRmQ3a2xuU24xTEwwY1dIdyUzRCUzRA..
//https://github.com/alura-cursos/js-curso-2/tree/desafio_2
//https://github.com/alura-cursos/js-curso-2/tree/desafio_3