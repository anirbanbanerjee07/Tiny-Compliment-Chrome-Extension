// content.js

// Check if compliment already shown on this page
if (!window.hasShownCompliment) {
  window.hasShownCompliment = true;

  // Pick random compliment
  const compliment = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];

  // Create compliment popup
  const popup = document.createElement("div");
  popup.className = "compliment-popup";
  popup.innerText = compliment;

  document.body.appendChild(popup);

  // Remove popup after 4 seconds
  setTimeout(() => {
    popup.remove();
  }, 4000);
}
