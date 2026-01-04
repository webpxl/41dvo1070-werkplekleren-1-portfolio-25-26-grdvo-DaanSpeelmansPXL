const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // wissel emoji maan/zon
    if(body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️"; // zon voor light mode
    } else {
        toggleButton.textContent = "🌙"; // maan voor dark mode
    }
});

const title = document.getElementById("typewriter");
const fullName = "Daan Speelmans"; // hele naam als string
let index = 0;

function typeWriter() {
    if (index < fullName.length) {
        // Voeg 1 letter toe
        const char = fullName.charAt(index);

        // Als we bij de achternaam zijn, voeg het in een span
        if (index >= 5) { // vanaf index 5 is 'Speelmans'
            if (!title.querySelector(".achternaam")) {
                const span = document.createElement("span");
                span.className = "achternaam";
                title.appendChild(span);
            }
            title.querySelector(".achternaam").textContent += char;
        } else {
            title.textContent += char;
        }

        index++;
        setTimeout(typeWriter, 150);
    } else {
        // Typen voltooid → cursor weg
        title.classList.add("done");
    }
}

title.textContent = ""; // start leeg
typeWriter();
