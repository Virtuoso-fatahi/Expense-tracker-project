document.addEventListener('DOMContentLoaded', function () {
    var signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirm-password').value;
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            // Perform further validation and submit the form
            console.log('Sign-Up form submitted', { email: email, password: password });
        });
    }
    var signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            // Perform validation and submit the form
            console.log('Sign-In form submitted', { email: email, password: password });
        });
    }
});
