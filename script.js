let getstartedBtn = document.querySelector('#getstarted-btn');
let icon = document.querySelector('#lessthanicon');
let emailInput = document.querySelector('#email-input');
let emailPlaceholder = document.querySelector('#email-placeholder');
let body = document.querySelector('body');

console.dir(emailInput);

let styling = function () {
    icon.style.backgroundColor = "rgb(255, 0, 0, 0.1)";
    icon.style.transitionDuration = "0.3s";
}

let styling2 = function () {
    emailInput.setAttribute('placeholder','');
    emailPlaceholder.setAttribute('placeholder','Email Address');
    emailPlaceholder.style.display = "block";
    emailPlaceholder.disabled = true;
}

getstartedBtn.addEventListener('mouseenter',styling);
emailInput.addEventListener('mousedown',styling2);