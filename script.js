console.log("Welcome to My Portfolio!");
// for navlinks transition
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {  // Detect any scroll
        navLinks.classList.add('centered');
    } else {
        navLinks.classList.remove('centered');
    }
});
//end for navlinks

//for typing text
const typingText = document.querySelector('.typing-text');
const textToType = "Frontend Developer, AIML Enthusiast, Tech Explorer";
let index = 0;
let isDeleting = false;

function type() {
    if (isDeleting) {
        typingText.textContent = textToType.substring(0, index);
        index--;
        if (index === 0) {
            isDeleting = false;  // Stop deleting, start typing again
        }
    } else {
        typingText.textContent = textToType.substring(0, index);
        index++;
        if (index > textToType.length) {
            setTimeout(() => { isDeleting = true; }, 1000);  // Pause before deleting
        }
    }

    const speed = isDeleting ? 30 : 50;  // Faster deletion, slower typing
    setTimeout(type, speed);
}
type();
//end typing text

//for form submit
function resetForm(event) {
    event.preventDefault(); 
    const form = event.target;
    setTimeout(() => {
        alert("Your message has been sent successfully!");
        form.reset();  
    }, 500);  
}
//end form submit