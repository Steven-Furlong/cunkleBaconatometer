let current = 0;
const goal = 25;

window.addEventListener('click', () => {
    if (current < goal) {
        current += 2.5; // Testing in $2.50 increments
        if (current > goal) current = goal;
        updateLogo();
    }
});

function updateLogo() {
    const logo = document.getElementById('wendys-logo');
    const text = document.getElementById('current-amt');
    const percent = (current / goal) * 100;

    text.innerText = '$' + current.toFixed(2);

    // Percentage Milestones
    if (percent >= 100) {
        logo.classList.add('glow');
    } else if (percent >= 75) {
        logo.style.filter = "grayscale(0%) brightness(100%)";
    } else if (percent >= 50) {
        logo.style.filter = "grayscale(30%) brightness(90%)";
    } else if (percent >= 25) {
        logo.style.filter = "grayscale(60%) brightness(80%)";
    } else if (percent >= 10) {
        logo.style.filter = "grayscale(80%) brightness(70%)";
    } else {
        logo.style.filter = "grayscale(100%) brightness(50%)";
    }
}
