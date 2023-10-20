const opcoes = document.querySelectorAll('.opcoes');
const btnSubmit = document.getElementById('submit')
let numeroSelecionado = 0

function Selecionar(index) {
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
    Selecionar(i);
    numeroSelecionado = i + 1
  });
}

btnSubmit.addEventListener('click', () => {
  console.log(numeroSelecionado)
  document.getElementsByTagName('body')[0].innerHTML = ''
  document.getElementsByTagName('body')[0].innerHTML = `

  <div class="content-thankyou">

    <div class="imagem">
      <img src="./images/illustration-thank-you.svg" alt="" srcset="">
    </div>

    <div class="elemento-selecionado">
      <p class="selecionado">You selected ${numeroSelecionado} of out 5</p>
    </div>
    <h1 id="thankyou">Thank you</h1>

    <p>
    We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!
    </p>

</div>`
})