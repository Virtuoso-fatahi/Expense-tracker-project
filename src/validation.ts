

document.addEventListener('DOMContentLoaded', () => {
          const signupForm = document.getElementById('signup-form');
          if (signupForm) {
              signupForm.addEventListener('submit', function (e) {
                  e.preventDefault();
                  const email = (document.getElementById('email') as HTMLInputElement).value;
                  const password = (document.getElementById('password') as HTMLInputElement).value;
                  const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
      
                  if (password !== confirmPassword) {
                      alert('Passwords do not match!');
                      return;
                  }
      
                  // Perform further validation and submit the form
                  console.log('Sign-Up form submitted', { email, password });
              });
          }
      
          const signinForm = document.getElementById('signin-form');
          if (signinForm) {
              signinForm.addEventListener('submit', function (e) {
                  e.preventDefault();
                  const email = (document.getElementById('email') as HTMLInputElement).value;
                  const password = (document.getElementById('password') as HTMLInputElement).value;
      
                  // Perform validation and submit the form
                  console.log('Sign-In form submitted', { email, password });
              });
          }
      });
      