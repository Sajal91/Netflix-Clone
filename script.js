let getstartedBtn = document.querySelector('#getstarted-btn');
let icon = document.querySelector('#lessthanicon');

let styling = function () {
    icon.style.backgroundColor = "rgb(255, 0, 0, 0.1)";
    icon.style.transitionDuration = "0.3s";
}

getstartedBtn.addEventListener('mouseenter',styling());