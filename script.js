console.log("Welcome to My Portfolio!");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

// Smooth Scroll for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav-home").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.querySelectorAll(".nav-item").forEach((item) => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetText = this.textContent.trim().toLowerCase();

            if (targetText === "works") {
                document.querySelector("#projects").scrollIntoView({ behavior: "smooth", block: "start" });
            } else if (targetText === "contact") {
                document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "end" });
            }
        });
    });
});

// ✅ Fix: Keep Typing Effect Running
const typingText = document.querySelector(".typing-text");
const wordsToType = ["Frontend Developer", "AIML Enthusiast", "Tech Explorer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = wordsToType[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsToType.length; // Move to next word
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentWord.length) {
            setTimeout(() => { isDeleting = true; }, 1000); // Pause before deleting
        }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

// ✅ Restart Typing Effect on Click (Fixes Navigation Issue)
document.querySelectorAll(".nav-item, .nav-home").forEach((item) => {
    item.addEventListener("click", () => {
        setTimeout(type, 500); // Restart typing after scroll
    });
});

type(); // Start typing animation

// Add animation effect on click anywhere on the screen
document.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.classList.add('animation-effect');
    circle.style.left = `${e.clientX - 10}px`;
    circle.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(circle);

    // Remove the circle after the animation is done
    setTimeout(() => {
        circle.remove();
    }, 250);
});

