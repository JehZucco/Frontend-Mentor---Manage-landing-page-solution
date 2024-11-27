//todos os elementos do DOM que quero manipular

//para manipular o menu na versão de mobile
const menuAtivo =  document.getElementById("menu-ativo");

const menuIcon = document.getElementById("menu-icon");

const closeMenu = document.getElementById("close-menu");

const emailInput = document.getElementById("email-input");

const overlay = document.querySelector(".overlay");

const body = document.body;

//para manipular a mensagem de erro no email pra receber newsletter
const input = document.getElementById('email-input');

const button = document.getElementById('submit-btn');

const errorMessage = document.querySelector('.error-message');


//mostra o menu escondido na versão pra mobile
function mostraMenu(){
   
    // adiciona as classes com o estilo desejado

   menuAtivo.classList.add("display");// mostra o menu escondido, que estava com display none

   menuIcon.classList.add("hidden"); // esconde o ícone de hamburguer para mostrar o ícone de fechar

   closeMenu.classList.add("display"); //mostra o ícone de fechar

   overlay.style.display = "block";  // mostra a div que adciona uma camada de preto translúcido na página para destacar o menu

   body.classList.add("overflow-Y"); //impede o scroll da página quando o menu tá ativo

}

// esconde o menu na versão mobile
function fechaMenu(){

    //remove as classes pra voltar ao estilo anterior ao menu ser aberto

    menuAtivo.classList.remove("display"); //volta o menu pra display none

    menuIcon.classList.remove("hidden"); //volta a mostrar o ícone de hamburguer

    closeMenu.classList.remove("display"); //volta pra display none o ícone de fechar menu

    overlay.style.display = "none"; //para de mostrar a div com camada de preto translúcido

    body.classList.remove("overflow-Y");// volta a permitir o scroll da página

    
}

//para o carrossel:

let currentSlide = 0;  // Índice do slide atual
const slides = document.querySelectorAll('.testimonials');  // Todos os slides
const totalSlides = slides.length;  // Total de slides

function moveSlide(direction) {
    // Atualiza o índice do slide atual
    currentSlide += direction;

    // Se o índice for menor que 0, vai para o último slide
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Se o índice for maior que o total de slides, vai para o primeiro slide
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Movimenta o slider com base no índice
    const slider = document.querySelector('.slider');
    const offset = -currentSlide * 15;  // Ajuste de posição
    slider.style.transform = `translateX(${offset}%)`;
}

//mensagem de erro newsletter

function isValid() {
    if (!input.checkValidity()) {
      errorMessage.style.display = 'block';
      errorMessage.style.color = "red";
      input.classList.add("error-message-input");
    } else {
      errorMessage.style.display = 'none';
      input.classList.remove("error-message-input");
      alert("Sucesso!")
    }
  };


