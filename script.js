let getstartedBtn = document.querySelector('#getstarted-btn');
let icon = document.querySelector('#lessthanicon');
let emailInput = document.querySelector('#email-input');
let body = document.querySelector('body');

console.dir(emailInput);

let styling = function () {
    icon.style.backgroundColor = "rgb(255, 0, 0, 0.1)";
    icon.style.transitionDuration = "0.3s";
}

let styling2 = function () {
    emailInput.setAttribute('placeholder','');
}

getstartedBtn.addEventListener('mouseenter',styling);
emailInput.addEventListener('click',styling2);