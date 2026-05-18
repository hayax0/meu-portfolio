emailjs.init("n6zG8bamERRpxx5HJ");

// Scroll Progress e Animações
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  document.getElementById("scrollProgress").style.width =
    (winScroll / height) * 100 + "%";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll("section").forEach((s) => observer.observe(s));

// Form Submit
document
  .getElementById("formulario")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_uoa5l6h", "template_opssd5h", this).then(
      () => {
        alert("✅ Sucesso!");
        this.reset();
      },
      () => {
        alert("❌ Erro ao enviar.");
      },
    );
  });

/* ==========================================
   1. SMOOTH SCROLL (Navegação)
   ========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Fecha o menu mobile se ele estiver aberto (aproveitando sua func toggleMenu)
      if (typeof isMenuOpen !== 'undefined' && isMenuOpen) {
        toggleMenu();
      }
    }
  });
});



/* ==========================================
   4. SCROLL REVEAL (Cards de Projetos)
   ========================================== */
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px" // Dispara quando passa um pouco da linha de baixo
});

// Selecionamos todos os cards de projetos dentro da sua section #projetos
document.querySelectorAll('#projetos .group').forEach((card, index) => {
  card.classList.add('reveal-hidden'); // Aplica opacidade zero e baixa o eixo Y via JS
  card.style.transitionDelay = `${index * 0.05}s`; // Leve efeito de cascata (staggering)
  revealObserver.observe(card);
});
