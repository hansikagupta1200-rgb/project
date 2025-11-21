document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");

    function showPopup(message) {
        popupText.textContent = message;
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000); 
    }

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetForm = tab.getAttribute('data-form');

            if (targetForm === 'login') {
                loginForm.classList.add('active-form');
                loginForm.classList.remove('hidden-form');
                
                signupForm.classList.add('hidden-form');
                signupForm.classList.remove('active-form');
            } else {
                signupForm.classList.add('active-form');
                signupForm.classList.remove('hidden-form');

                loginForm.classList.add('hidden-form');
                loginForm.classList.remove('active-form');
            }
        });
    });

    // Login popup
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showPopup("Logged in successfully!");
    });

    // Signup popup
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showPopup("Account created successfully!");
    });
});
