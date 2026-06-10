document.addEventListener("DOMContentLoaded", () => {

    /* Mobile Menu */
/* Mobile Menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= 900) {
                navLinks.classList.remove("show");
            }

        });

    });

}

    /* Dark Mode */
    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            themeBtn.textContent =
                document.body.classList.contains("dark")
                    ? "☀"
                    : "◑";
        });
    }

    /* Scroll Reveal */
    const reveals = document.querySelectorAll(".reveal");

    function revealElements() {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealElements);
    revealElements();

    /* Skill Animation */
    const bars = document.querySelectorAll(".progress-bar");

    if (bars.length) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.width =
                        entry.target.dataset.width;
                }
            });
        });

        bars.forEach(bar => observer.observe(bar));
    }

    /* Active Navigation */
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");

            if (
                current &&
                link.getAttribute("href").includes(current)
            ) {
                link.classList.add("active");
            }
        });
    });

    /* Back To Top */
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* Contact Validation */
    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            let valid = true;

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("messageError").textContent = "";

            if (name.length < 2) {
                document.getElementById("nameError").textContent =
                    "Please enter your name";
                valid = false;
            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                document.getElementById("emailError").textContent =
                    "Please enter a valid email";
                valid = false;
            }

            if (message.length < 10) {
                document.getElementById("messageError").textContent =
                    "Message must be at least 10 characters";
                valid = false;
            }

            if (valid) {
                alert("Message Sent Successfully!");
                this.reset();
            }
        });
    }

    /* Project Slider */
const track = document.querySelector(".project-track");
const cards = document.querySelectorAll(".project-card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
const gap = 24;

// Clone first 2 cards
const clones = [...cards]
  .slice(0, 2)
  .map(card => card.cloneNode(true));

clones.forEach(clone => track.appendChild(clone));

const allCards = document.querySelectorAll(".project-card");

function getCardsPerView() {
    return window.innerWidth < 768 ? 1 : 2;
}

function updateSlider(animate = true) {

    const cardWidth = allCards[0].offsetWidth + gap;

    track.style.transition = animate
        ? "transform .5s ease"
        : "none";

    track.style.transform =
        `translateX(-${index * cardWidth}px)`;
}

next.addEventListener("click", () => {

    index++;
    updateSlider();

    if (index >= cards.length) {

        setTimeout(() => {

            index = 0;
            updateSlider(false);

        }, 500);
    }
});

prev.addEventListener("click", () => {

    if (index <= 0) {
        index = cards.length - 1;
    } else {
        index--;
    }

    updateSlider();
});





const heroImg =
document.querySelector(".hero-image img");

heroImg.addEventListener("mousemove",(e)=>{

    const rect =
    heroImg.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    ((x / rect.width) - 0.5) * 20;

    const rotateX =
    ((y / rect.height) - 0.5) * -20;

    heroImg.style.transform =
    `rotateX(${rotateX}deg)
     rotateY(${rotateY}deg)
     scale(1.05)`;
});

heroImg.addEventListener("mouseleave",()=>{

    heroImg.style.transform =
    "rotateX(0) rotateY(0) scale(1)";
});


});