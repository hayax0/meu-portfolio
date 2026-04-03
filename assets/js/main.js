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
