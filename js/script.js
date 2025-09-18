// Seleciona todos os elementos com a classe 'counter'
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // valor final
        let count = parseInt(counter.innerText); // pega só o número (ignora o +)
        const increment = target / 100; // menor incremento = mais lento

        if(count < target) {
            count = Math.ceil(count + increment);
            counter.innerText = count + '+';
            setTimeout(updateCount, 50); // mais lento (50ms)
        } else {
            counter.innerText = target + '+';
        }
    }

    updateCount();
});











// Script para funcionamento dos acordiones

    document.querySelectorAll(".accordion-header").forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        const icon = header.querySelector("i");

        // alterna ativo
        const isActive = item.classList.contains("active");
        if (isActive) {
          // fechar
          item.classList.remove("active");
          content.classList.add("hidden");
          // ícone pra baixo
          icon.classList.remove("fa-chevron-up");
          icon.classList.add("fa-chevron-down");
        } else {
          // abrir
          item.classList.add("active");
          content.classList.remove("hidden");
          // ícone pra cima
          icon.classList.remove("fa-chevron-down");
          icon.classList.add("fa-chevron-up");
        }
      });
    });





    document.querySelectorAll(".faq-header").forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      const faqContent = faqItem.querySelector(".faq-content");

      // Fecha os outros FAQs
      document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== faqItem) {
          item.querySelector(".faq-content").classList.add("hidden");
          item.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
        }
      });

      // Toggle do FAQ clicado
      faqContent.classList.toggle("hidden");
      const icon = button.querySelector("i");
      if (faqContent.classList.contains("hidden")) {
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
      } else {
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
      }
    });
  });








      // Simple accordion functionality
    document.addEventListener('DOMContentLoaded', function() {
        const accordionButtons = document.querySelectorAll('[data-accordion]');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                    this.parentElement.classList.add('active');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                    this.parentElement.classList.remove('active');
                }
            });
        });
    });