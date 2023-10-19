const opcoes = document.querySelectorAll('.opcoes');

function opcaoSelecionada(index) {
  for (let i = 0; i < opcoes.length; i++) {
    if (i === index) {
      opcoes[i].classList.add('opcao-selecionada');
    } else {
      opcoes[i].classList.remove('opcao-selecionada');
    }
  }
}

for (let i = 0; i < opcoes.length; i++) {
  opcoes[i].addEventListener('click', () => {
    opcaoSelecionada(i);
  });
}
