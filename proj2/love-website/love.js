const yesBtn = document.getElementById("YesBtn");
const noBtn = document.getElementById("noBtn");
const diaryPage = document.getElementById("diaryPage");
const titleText = document.getElementById("titleText");
const subtitleText = document.getElementById("subtitleText");

const funnyTexts = [
  "Oh bat mo ako pipindutin?",
  "Baket no?🤨",
  "Aba pipindutin mo?",
  "Wag ka ganyan beh 😭",
  "Di pwede!",
  "Seryoso ka??? 😾",
  "Hala siya!",
  "Awts, nasaktan ako 🥺",
  "Try mo pa 😾",
  "No is not an option 😎"
];

yesBtn.addEventListener("click", () => {
  diaryPage.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.textContent = "Aww I love you more 💖";

  // Hide greeting texts
  titleText.classList.add("hidden");
  subtitleText.classList.add("hidden");
});

function moveNoButton() {
  const safeMargin = 20;
  const buttonHeight = noBtn.offsetHeight;
  const buttonWidth = noBtn.offsetWidth;

  // Prevent overlap with diary content (if visible)
  let maxY = window.innerHeight - buttonHeight - safeMargin;

  if (!diaryPage.classList.contains("hidden")) {
    const diaryTop = diaryPage.getBoundingClientRect().top;
    maxY = diaryTop - buttonHeight - safeMargin;
  }

  const maxX = window.innerWidth - buttonWidth - safeMargin;

  const boundedX = Math.max(0, Math.floor(Math.random() * maxX));
  const boundedY = Math.max(0, Math.floor(Math.random() * maxY));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${boundedX}px`;
  noBtn.style.top = `${boundedY}px`;

  const randomIndex = Math.floor(Math.random() * funnyTexts.length);
  noBtn.textContent = funnyTexts[randomIndex];
}

// mouse hover event
noBtn.addEventListener("mouseover", moveNoButton);

// mobile tap event
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveNoButton();
});