$(document).ready(function () {
  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 80);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("FRONT-END + DESIGN");

  // initialize wow.js
  new WOW().init();

  // Push the body and the nav over by 285px over
  var main = function () {
    $(".fa-bars").click(function () {
      $(".nav-screen").animate(
        {
          right: "0px"
        },
        200
      );

      $("body").animate(
        {
          right: "285px"
        },
        200
      );
    });

    // Then push them back */
    $(".fa-times").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        200
      );

      $("body").animate(
        {
          right: "0px"
        },
        200
      );
    });

    $(".nav-links a").click(function () {
      $(".nav-screen").animate(
        {
          right: "-285px"
        },
        500
      );

      $("body").animate(
        {
          right: "0px"
        },
        500
      );
    });
  };

  $(document).ready(main);

  // initiate full page scroll

  $("#fullpage").fullpage({
    scrollBar: true,
    responsiveWidth: 400,
    navigation: true,
    navigationTooltips: ["home", "about", "portfolio", "design", "contact", "connect"],
    anchors: ["home", "about", "portfolio", "design", "contact", "connect"],
    menu: "#myMenu",
    fitToSection: false,

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        /* add opacity to arrow */
        $(".fa-chevron-down").each(function () {
          $(this).css("opacity", "1");
        });
      }

      //using index
      if (index == 2) {
        /* animate skill bars */
        $(".skillbar").each(function () {
          $(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: $(this).attr("data-percent")
              },
              2500
            );
        });
      }
      
      // Ativar fade-in da palavra "Portfólio" nas seções de projetos e design
      if (index == 3 || index == 4) {
        // Adiciona a classe 'visible' para ativar a animação fade-in
        setTimeout(function() {
          loadedSection.find('.portfolio-label').addClass('visible');
        }, 300);
      } else {
        // Remove a classe 'visible' quando sair da seção
        $('.portfolio-label').removeClass('visible');
      }
    },
    
    // Também ativar a animação fade-in quando mudar de slide
    onSlideLeave: function(section, origin, destination, direction) {
      // Remover a classe 'visible' do slide anterior
      $(origin).find('.portfolio-label').removeClass('visible');
      
      // Adicionar a classe 'visible' ao novo slide após um pequeno delay
      setTimeout(function() {
        $(destination).find('.portfolio-label').addClass('visible');
      }, 300);
    }
  });

  // move section down one
  $(document).on("click", "#moveDown", function () {
    $.fn.fullpage.moveSectionDown();
  });

  // fullpage.js link navigation
  $(document).on("click", "#skills", function () {
    $.fn.fullpage.moveTo(2);
  });

  $(document).on("click", "#projects", function () {
    $.fn.fullpage.moveTo(3);
  });

  $(document).on("click", "#contact", function () {
    $.fn.fullpage.moveTo(4);
  });
  
  // Ativar a animação fade-in quando o slide é carregado inicialmente
  $('.slide').each(function() {
    if ($(this).hasClass('active')) {
      $(this).find('.portfolio-label').addClass('visible');
    }
  });

  // smooth scrolling
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            700
          );
          return false;
        }
      }
    });
  });

  //ajax form
  $(function () {
    // Get the form.
    var form = $("#ajax-contact");

    // Get the messages div.
    var formMessages = $("#form-messages");

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Remove qualquer mensagem anterior
      $(formMessages).text("");
      $(formMessages).removeClass("error");
      $(formMessages).removeClass("success");
      
      // Mostra mensagem de envio
      $(formMessages).addClass("info");
      $(formMessages).text("Enviando mensagem...");
      
      // No Formspree, não precisamos prevenir o envio padrão
      // O formulário será enviado naturalmente
      // Este código só tratará da exibição visual da mensagem de "enviando..."
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);
        
        // Validação simples
        if (!formProps.name || !formProps.email || !formProps.message) {
          showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
          return;
        }
        
        // Simular envio do formulário (em produção, você usaria um serviço real)
        setTimeout(() => {
          showMessage('Mensagem enviada com sucesso! Obrigado pelo contato.', 'success');
          contactForm.reset();
        }, 1000);
        
        showMessage('Enviando mensagem...', 'info');
      });
    }
    
    function showMessage(message, type) {
      formMessages.textContent = message;
      formMessages.className = type;
      formMessages.scrollIntoView({ behavior: 'smooth' });
      
      if (type === 'success') {
        setTimeout(() => {
          formMessages.style.display = 'none';
        }, 5000);
      }
    }
  });
});