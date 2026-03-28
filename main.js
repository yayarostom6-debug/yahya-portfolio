  const myCarousel = document.querySelector('#yahyaSlider');
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3500,
            wrap: true,
            touch: true
        });

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const msgInput = document.getElementById('msgInput');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let isNameValid = checkInput(nameInput, nameInput.value.trim().length >= 3);
    let isEmailValid = checkInput(emailInput, validateEmail(emailInput.value.trim()));
    let isMsgValid = checkInput(msgInput, msgInput.value.trim().length > 0);

    if (isNameValid && isEmailValid && isMsgValid) {
        alert('✅ Your message has been sent successfully!');
        contactForm.reset();
        resetStatus();
    }
});

function checkInput(input, condition) {
    const group = input.parentElement;
    if (condition) {
        group.classList.remove('error');
        group.classList.add('success');
        return true;
    } else {
        group.classList.remove('success');
        group.classList.add('error');
        return false;
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resetStatus() {
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('success', 'error');
    });
}