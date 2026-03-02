(function simulateHeavyWork() {
    var start = Date.now();
    while (Date.now() - start < 200) {}
})();

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterButton = document.querySelector(".newsletter .primary-button");
    if (newsletterButton) {
        newsletterButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});

/* ================================
   Custom Keyboard Navigation
================================ */

document.addEventListener("DOMContentLoaded", function () {

    const interactiveElements = Array.from(
        document.querySelectorAll("a, button, input")
    );

    let keyboardMode = false;
    let currentIndex = 0;

    function focusElement(index) {
        interactiveElements.forEach(el =>
            el.classList.remove("keyboard-focus")
        );

        const element = interactiveElements[index];
        element.focus();
        element.classList.add("keyboard-focus");
    }

    document.addEventListener("keydown", function (e) {

        // STARTA keyboard mode med TAB
        if (e.key === "Tab" && !keyboardMode) {
            keyboardMode = true;
            currentIndex = 0;
            focusElement(currentIndex);
            e.preventDefault();
            return;
        }

        // Om keyboard mode är aktivt
        if (keyboardMode) {

            // TAB igen = avsluta keyboard mode och återgå till normal navigation
            if (e.key === "Tab") {
                keyboardMode = false;
                interactiveElements[currentIndex].classList.remove("keyboard-focus");
                return; // låt webbläsaren hantera Tab normalt
            }

            // Nästa (höger eller ned)
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                currentIndex = (currentIndex + 1) % interactiveElements.length;
                focusElement(currentIndex);
                e.preventDefault();
            }

            // Föregående (vänster eller upp)
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                currentIndex =
                    (currentIndex - 1 + interactiveElements.length) %
                    interactiveElements.length;
                focusElement(currentIndex);
                e.preventDefault();
            }

            // Enter aktiverar
            if (e.key === "Enter") {
                interactiveElements[currentIndex].click();
            }

            // ESC avslutar keyboard mode
            if (e.key === "Escape") {
                keyboardMode = false;
                interactiveElements[currentIndex].blur();
            }
        }

    });

});
