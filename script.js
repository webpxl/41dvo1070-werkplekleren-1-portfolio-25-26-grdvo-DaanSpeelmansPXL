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



//slider
document.addEventListener("DOMContentLoaded", () => {
    const imageList = document.querySelector(".image-list");
    const images = document.querySelectorAll(".image-item");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (!imageList || !nextBtn || !prevBtn) {
        console.error("Slider elements not found");
        return;
    }

    let index = 0;

    function updateSlider() {
        imageList.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateSlider();
    });
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

