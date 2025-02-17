document.addEventListener("DOMContentLoaded", () => {
    const numbers = [
        { id: "established", finalValue: 1998 },
        { id: "faculties", finalValue: 10 },
        { id: "students", finalValue: 10 },
        { id: "publications", finalValue: 500 },
        { id: "patents", finalValue: 1500 },
        { id: "phds", finalValue: 15 }
    ];

    const overlap = document.querySelector(".overlap-4");

    overlap.addEventListener("mouseenter", () => {
        numbers.forEach(({ id, finalValue }) => {
            let element = document.getElementById(id);
            let currentValue = 0;
            let speed = Math.random() * 20 + 10; // Random speed

            let interval = setInterval(() => {
                if (currentValue >= finalValue) {
                    clearInterval(interval);
                    element.textContent = finalValue + "+";
                } else {
                    currentValue += Math.ceil(finalValue / speed);
                    element.textContent = currentValue + "+";
                }
            }, 50);
        });
    });
});

document.getElementById("animateNumbers").addEventListener("mouseenter", function () {
    const elements = document.querySelectorAll("[data-final]");

    elements.forEach((element) => {
        let finalValue = element.getAttribute("data-final");
        let isPlus = finalValue.includes("+");
        finalValue = parseInt(finalValue);

        let count = 0;
        let interval = setInterval(() => {
            count = Math.floor(Math.random() * (finalValue + 50)); // Random number
            element.textContent = count + (isPlus ? "+" : "");

            if (count >= finalValue - 10) { // Stop condition
                clearInterval(interval);
                element.textContent = finalValue + (isPlus ? "+" : "");
            }
        }, 50);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".rectangle, .text-wrapper, .text-wrapper-10, .text-wrapper-11, .text-wrapper-12, .text-wrapper-13, .text-wrapper-14, .text-wrapper-15, .text-wrapper-16, .text-wrapper-17, .text-wrapper-18, .text-wrapper-19, .text-wrapper-20, .text-wrapper-21, .text-wrapper-22, .overlap-5, .overlap-6, .overlap-7, .overlap-8, .overlap-9");

    function handleScroll() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("zoom-in");
            }
        });
    }

    // Add the effect class initially
    elements.forEach((element) => element.classList.add("zoom-effect"));

    window.addEventListener("scroll", handleScroll);
});