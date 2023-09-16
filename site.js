// Cria uma função para criar um efeito de paralaxe
function createParallaxEffect(element, offset) {
    // Obtém a altura do elemento
    const elementHeight = element.offsetHeight;
  
    // Define o valor inicial do scroll
    const initialScroll = window.pageYOffset;
  
    // Define o evento de scroll
    window.addEventListener("scroll", () => {
      // Obtém a posição atual do scroll
      const currentScroll = window.pageYOffset;
  
      // Calcula o deslocamento do elemento
      const displacement = currentScroll - initialScroll;
  
      // Aplica o deslocamento ao elemento
      element.style.transform = `translateY(${displacement * offset}px)`;
    });
  }
  
  // Aplica o efeito de paralaxe a um elemento
  createParallaxEffect(document.querySelector(".parallax"), 0.5);

  // Cria uma função para criar um efeito de scroll infinito
function createInfiniteScrolling(element) {
    // Obtém o elemento de conteúdo
    const contentElement = document.querySelector(".content");
  
    // Obtém o elemento de rolagem
    const scrollElement = document.querySelector(".scroll");
  
    // Define o evento de scroll
    window.addEventListener("scroll", () => {
      // Obtém a posição atual do scroll
      const currentScroll = window.pageYOffset;
  
      // Obtém a altura do elemento de conteúdo
      const contentHeight = contentElement.offsetHeight;
  
      // Obtém a altura do elemento de rolagem
      const scrollHeight = scrollElement.offsetHeight;
  
      // Verifica se o scroll chegou ao fim
      if (currentScroll + scrollHeight >= contentHeight) {
        // Carrega mais conteúdo
        // ...
      }
    });
  }
  
  // Aplica o efeito de scroll infinito a um elemento
  createInfiniteScrolling(document.querySelector(".infinite-scrolling"));

  // Fade in and move on scroll
var fadeAndMoveElements = function() {
    var elements = document.querySelectorAll(".fade-in-move-on-scroll");
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
  
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("in-view");
      } else {
        element.classList.remove("in-view");
      }
    }
  };
  
  window.addEventListener("scroll", fadeAndMoveElements);