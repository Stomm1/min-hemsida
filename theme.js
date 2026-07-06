document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("theme-toggle");

    // Läs sparat tema
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");

        if (button) {
            button.textContent = "🌙";
        }
    } else {
        if (button) {
            button.textContent = "☀️";
        }
    }

    // Om knappen finns
    if (button) {

        button.addEventListener("click", () => {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {

                localStorage.setItem("theme", "light");
                button.textContent = "🌙";

            } else {

                localStorage.setItem("theme", "dark");
                button.textContent = "☀️";
            }
        });

    }

});