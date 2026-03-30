  const myCarousel = document.querySelector('#yahyaSlider');
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3500,
            wrap: true,
            touch: true
        });


    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contactForm');

        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
            const formData = {
                name: document.getElementById('userName').value.trim(),
                email: document.getElementById('userEmail').value.trim(),
                password: document.getElementById('userPassword').value,
                message: document.getElementById('projectDesc').value.trim()
            };

            if (validateForm(formData)) {
                submitData(formData);
            }
        });

        function validateForm(data) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (data.name.length < 3) {
                alert("Please enter a valid full name.");
                return false;
            }
            if (!emailRegex.test(data.email)) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (data.password.length < 8) {
                alert("Password must be at least 8 characters long.");
                return false;
            }
            if (data.message === "") {
                alert("Please describe your project.");
                return false;
            }
            return true;
        }

        function submitData(data) {
            console.log("Sending Data to Server...", data);
            
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Success! Your query has been submitted.");
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        }
    });
