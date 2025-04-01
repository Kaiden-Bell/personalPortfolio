document.addEventListener("DOMContentLoaded", () => {
    const text = "a programmer.";
    let index = 0;
    const speed = 40; // typing speed in milliseconds
    const typewriterElement = document.getElementById("typewriter");

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML = text.substring(0, index) + "_"; // Add underscore as cursor
            index++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterElement.innerHTML = text; // Remove underscore when typing is done
            startCursorBlink();
        }
    }

    function startCursorBlink() {
        let visible = true;
        setInterval(() => {
            typewriterElement.innerHTML = visible ? text + " _" : text; // Toggle underscore
            visible = !visible;
        }, 500); // Blink every 500ms
    }

    typeWriter();
});
