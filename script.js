const wishButton = document.getElementById("wishButton");
const overlay = document.getElementById("wishOverlay");
const closeModal = document.getElementById("closeModal");
const celebrateButton = document.getElementById("celebrateButton");
const hint = document.getElementById("hint");

function openWish() {
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  hint.textContent = "Your little surprise is ready. ♡";
  createSparkles(18);
}
function closeWish() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
}
function createSparkles(amount = 45) {
  const colors = ["#e7a2bd", "#f6cf77", "#cbb7e4", "#ffffff", "#d7789e"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.animationDuration = (2 + Math.random() * 2) + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5000);
  }
}
wishButton.addEventListener("click", openWish);
closeModal.addEventListener("click", closeWish);
celebrateButton.addEventListener("click", () => {
  createSparkles(90);
  celebrateButton.textContent = "Keep shining, Rue! ♡";
  window.setTimeout(closeWish, 1300);
});
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closeWish();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeWish();
});

// Tiny twinkling stars in the background
const field = document.querySelector(".sparkle-field");
for (let i = 0; i < 34; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = Math.random() > 0.5 ? "✧" : "·";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.fontSize = (8 + Math.random() * 13) + "px";
  star.style.animationDelay = Math.random() * 3 + "s";
  field.appendChild(star);
}
