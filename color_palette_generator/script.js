const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generateColor);

paletteContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("copy-btn")) {
        const hexValue = e.target.previousElementSibling.textContent;

        navigator.clipboard
            .writeText(hexValue)
            .then(() => showCopySuccess())
            .catch((err) => console.log(err));
    }
});

function showCopySuccess() {
    alert("Copied!");
}

function generateColor() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    updatePaletteColor(colors);
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function updatePaletteColor(colors) {
    const colorBoxes = document.querySelectorAll(".color-box");

    colorBoxes.forEach((box, index) => {
        const currentColor = colors[index];

        const colorDiv = box.querySelector(".color");
        const hexValue = box.querySelector(".hex-value");

        colorDiv.style.backgroundColor = currentColor;
        hexValue.textContent = currentColor;
    });
}

generateColor();