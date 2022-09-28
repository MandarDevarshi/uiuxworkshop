var accordions = document.getElementsByClassName("accordion");

for (const acc of accordions) {
    acc.addEventListener('click', handleAccordion);
}

function handleAccordion(event) {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    console.log("Hello", event)
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
