let password = document.querySelector('#myPassword');
let show = document.querySelector('.show');
let container = document.querySelector('.container');

document.addEventListener('keyup', function(e) {
    let password = document.querySelector('#myPassword').value;
    let strength = getStrength(password);
    if (password === '') {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    } else if (strength > 0 && strength <= 2) {
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    } else if (strength >= 2 && strength <= 4) {
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    } else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
});

show.onclick = function() {
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        show.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
};

function getStrength(password) {
    let strength = 0;
    if (password.length > 6) {
        strength++;
    }
    if (password.length >= 10) {
        strength++;
    }
    if (/[A-Z]/.test(password)) {
        strength++;
    }
    if (/[0-9]/.test(password)) {
        strength++;
    }
    if (/[A-Za-z0-8]/.test(password)) {
        strength++;
    }
    return strength;
}