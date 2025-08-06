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

  const buttonsTop = document.querySelector('.buttons').getBoundingClientRect().top;
  const buttonsHeight = document.querySelector('.buttons').offsetHeight;
  const diaryTop = diaryPage.classList.contains("hidden")
    ? window.innerHeight
    : diaryPage.getBoundingClientRect().top;

  // Max Y: somewhere above the buttons
  const maxY = Math.max(0, buttonsTop - buttonHeight - safeMargin);
  const maxX = Math.max(0, window.innerWidth - buttonWidth - safeMargin);

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

const randomIndex = Math.floor(Math.random() * funnyTexts.length);
noBtn.textContent = funnyTexts[randomIndex];
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touchstart (first touch)
noBtn.addEventListener("touchstart", function (e) {
  e.preventDefault(); // Prevents the tap from registering as a click
  setTimeout(moveNoButton, 10); // Delay helps avoid tap-to-click
});

// Mobile touchmove (if they try to chase it)
noBtn.addEventListener("touchmove", function (e) {
  e.preventDefault();
  moveNoButton();
});

