
(function () {
    emailjs.init("n6zG8bamERRpxx5HJ");
})();


document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    emailjs.sendForm("service_uoa5l6h", "template_opssd5h", this)
        .then(function () {
            alert("Mensagem enviada com sucesso!");
            document.getElementById('formulario').reset();
        }, function (error) {
            alert("Erro ao enviar: " + JSON.stringify(error));
        });
});


const scrollProgress = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrolled + '%';
});


const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


const sections = document.querySelectorAll('section, main');
const navLinks = document.querySelectorAll('.menu-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});


navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.cabecalho').classList.add('visible');
    }, 300);
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelector('.particles');
    particles.style.transform = `translateY(${scrolled * 0.1}px)`;
});


function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}


const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    skillObserver.observe(item);
});


const projectCards = document.querySelectorAll('.projeto-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 300);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    projectObserver.observe(card);
});


const nomeElement = document.querySelector('.nome');
if (nomeElement) {
    nomeElement.addEventListener('mouseenter', () => {
        nomeElement.style.transform = 'scale(1.02)';
    });

    nomeElement.addEventListener('mouseleave', () => {
        nomeElement.style.transform = 'scale(1)';
    });
}


function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}


window.addEventListener('scroll', throttle(() => {
    updateActiveLink();
}, 16)); 