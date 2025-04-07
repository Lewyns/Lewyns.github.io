document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 0,
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
            
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      });
});


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

const cursor = document.querySelector('.circle-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const speed = 0.1;

function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * speed;
    cursorY += dy * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createFireflies() {
  const skillsSection = document.querySelector('.home2');
  const fireflyCount = 34;
  
  for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      skillsSection.appendChild(firefly);
      const size = Math.random() * 6 + 2;
      firefly.style.width = `${size}px`;
      firefly.style.height = `${size}px`;
      firefly.style.left = `${Math.random() * 100}%`;
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.setProperty('--random-x', Math.random());
      firefly.style.setProperty('--random-y', Math.random());
      const duration = Math.random() * 15 + 10;
      firefly.style.animationDuration = `${duration}s`;
      firefly.style.animationDelay = `${Math.random() * 20}s`;
  }
}

window.addEventListener('load', createFireflies);

document.addEventListener('DOMContentLoaded', function() {
const animateElements = document.querySelectorAll('.scroll-animate');
  
const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
};
  
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
  
animateElements.forEach(element => {
    observer.observe(element);
});

});

document.addEventListener('DOMContentLoaded', function() {

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (hamburger && nav) {
      hamburger.addEventListener('click', function() {
          this.classList.toggle('active');
          nav.classList.toggle('active');
          const navLinks = document.querySelectorAll('nav a');
          navLinks.forEach(link => {
              link.addEventListener('click', () => {
                  hamburger.classList.remove('active');
                  nav.classList.remove('active');
              });
          });
      });
  }

});


document.addEventListener('DOMContentLoaded', function() {
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'lb-container';
    lightboxContainer.innerHTML = `
        <span class="lb-close">&times;</span>
        <div class="lb-content">
            <img src="" alt="">
            <div class="lb-caption"></div>
        </div>
    `;
    document.body.appendChild(lightboxContainer);
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            const imgTitle = this.getAttribute('data-title') || '';
            
            const lightbox = document.querySelector('.lb-container');
            const lightboxImg = lightbox.querySelector('img');
            const lightboxCaption = lightbox.querySelector('.lb-caption');
            
            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgTitle;
            lightboxCaption.textContent = imgTitle;
            
            lightbox.classList.add('active');
        });
    });

    document.querySelector('.lb-close').addEventListener('click', function() {
        const lightbox = document.querySelector('.lb-container');
        const content = lightbox.querySelector('.lb-content');
        
        content.classList.add('zoomOut');
        
        setTimeout(() => {
            lightbox.classList.remove('active');
            content.classList.remove('zoomOut');
        }, 300);
    });

    document.querySelector('.lb-container').addEventListener('click', function(e) {
        if (e.target === this) {
            const content = this.querySelector('.lb-content');
            
            content.classList.add('zoomOut');
            
            setTimeout(() => {
                this.classList.remove('active');
                content.classList.remove('zoomOut');
            }, 300);
        }
    });
});