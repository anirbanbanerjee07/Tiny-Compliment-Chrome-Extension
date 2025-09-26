// Check if the popup already exists
if (!document.querySelector('.tiny-compliment-popup')) {
    const compliment =
        COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];

    const popup = document.createElement("div");
    popup.className = "tiny-compliment-popup";
    popup.textContent = compliment;

    document.body.appendChild(popup);

    // Show popup
    setTimeout(() => popup.classList.add("show"), 300);

    // Hide popup after 4 seconds
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => popup.remove(), 500);
    }, 4300);
}
