    const html = document.documentElement;
    const btn = document.getElementById('theme-toggle');

    btn.addEventListener('click', () => {
        html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    });

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const status = document.getElementById('form-status');

        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        let isValid = true;

        if (name === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }

        if (email === '') {
            emailError.textContent = 'Please enter your email.';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = 'Email must look like name@example.com.';
            isValid = false;
        }

        if (message === '') {
            messageError.textContent = 'Please write a message.';
            isValid = false;
        }

        if (isValid) {
            status.textContent = 'Thank you! Your message was sent.';
            form.reset();
        } else {
            status.textContent = '';
        }
    });