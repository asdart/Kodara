// Password visibility toggle functionality
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);
        const eyeIcon = this.querySelector('.eye-icon');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            // Change to eye-off icon when password is visible
            eyeIcon.src = 'assets/eye-off.svg';
        } else {
            passwordInput.type = 'password';
            // Change back to eye icon when password is hidden
            eyeIcon.src = 'assets/84ef37a9e6d33bcfbffb12927f6e7a3f897afd0c.svg';
        }
    });
});

// Password validation
const passwordInput = document.getElementById('password');
const requirements = {
    length: /^.{8,}$/,
    uppercase: /[A-Z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*(),.?":{}|<>]/
};

passwordInput.addEventListener('input', function() {
    const password = this.value;
    
    // Check each requirement
    for (const [key, regex] of Object.entries(requirements)) {
        const requirementElement = document.querySelector(`[data-requirement="${key}"]`);
        
        if (regex.test(password)) {
            requirementElement.classList.add('valid');
        } else {
            requirementElement.classList.remove('valid');
        }
    }
});

// Form submission
const form = document.querySelector('.account-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Password requirements validation
    let allRequirementsMet = true;
    for (const [key, regex] of Object.entries(requirements)) {
        if (!regex.test(password)) {
            allRequirementsMet = false;
            break;
        }
    }
    
    if (!allRequirementsMet) {
        alert('Please make sure your password meets all requirements');
        return;
    }
    
    // Password match validation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // If all validation passes
    console.log('Form submitted successfully!');
    console.log({ fullName, email, password });
    
    // You can add your API call here
    alert('Account created successfully!');
});

