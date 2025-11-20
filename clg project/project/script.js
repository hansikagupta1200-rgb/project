document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    /**
     * Toggles the active state between the two forms and their buttons.
     * @param {HTMLElement} formToShow - The form element to make active.
     * @param {HTMLElement} buttonToActivate - The button element to make active.
     * @param {HTMLElement} otherForm - The form element to deactivate.
     * @param {HTMLElement} otherButton - The button element to deactivate.
     */
    const toggleForm = (formToShow, buttonToActivate, otherForm, otherButton) => {
        // Activate the selected elements
        buttonToActivate.classList.add('active');
        formToShow.classList.add('active');

        // Deactivate the other elements
        otherButton.classList.remove('active');
        otherForm.classList.remove('active');
    };

    // --- Event Listeners for Toggle Buttons ---
    loginToggle.addEventListener('click', () => {
        // Toggle to Login: (Active Form/Button, Deactive Form/Button)
        toggleForm(loginForm, loginToggle, signupForm, signupToggle);
    });

    signupToggle.addEventListener('click', () => {
        // Toggle to Sign Up: (Active Form/Button, Deactive Form/Button)
        toggleForm(signupForm, signupToggle, loginForm, loginToggle);
    });
});

// Function to handle the form submission (called from the HTML's onsubmit)
function handleFormSubmission(event, formType) {
    event.preventDefault(); // Stop the form from actually submitting/reloading the page

    if (formType === 'Login') {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            alert(`✅ Success! Simulated ${formType} with Email: ${email}. (No actual server login occurred)`);
        } else {
            alert('Please fill out both email and password.');
        }

    } else if (formType === 'Sign Up') {
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username && email && password) {
            alert(`🎉 Welcome ${username}! Simulated ${formType} with Email: ${email}. (No actual server registration occurred)`);

            // Optional: Switch back to login after successful (simulated) signup
            document.getElementById('login-toggle').click();
        } else {
            alert('Please fill out all fields for sign up.');
        }
    }
}