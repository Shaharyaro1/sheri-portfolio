// Text animation for hero section
const texts = [
    'I build cool web apps 💻',
    'I create amazing UI/UX ✨',
    'I solve complex problems 🧩',
    'I bring ideas to life 🚀'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.querySelector('.animated-text');

function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        animatedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        animatedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

setTimeout(typeText, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for animations
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

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const btn = event.target.querySelector('.btn-primary');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #0fb30f, #34e834)';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.pointerEvents = 'auto';
            event.target.reset();
        }, 2000);
    }, 1500);
}

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const icon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('light-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

emailjs.send("service_id", "template_id", {
    from_name: "Sheri",
    message: "Hello World",
    reply_to: "user@gmail.com"
})
    .then(() => alert("✅ Message Sent!"))
    .catch(() => alert("❌ Failed to send"));

// cv download function
    function downloadCV() {
    const link = document.createElement('a');
    link.href = 'resume/sheri-resume.pdf';
    link.download = 'Sheri-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



        // background  Create Floating Shapes
       // Create Floating Shapes
        const shapesContainer = document.querySelector('.floating-shapes');
        const shapes = ['circle', 'square', 'triangle'];
        
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            shape.className = `shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 10 + 's';
            shape.style.animationDuration = (15 + Math.random() * 10) + 's';
            shapesContainer.appendChild(shape);
        }

        // Create Particles
        const particlesContainer = document.querySelector('.particles');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Mouse Move Parallax Effect
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            document.querySelectorAll('.orb').forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                orb.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        });