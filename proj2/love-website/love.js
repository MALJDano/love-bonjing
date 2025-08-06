const yesBtn = document.getElementById("YesBtn");
const noBtn = document.getElementById("noBtn");
const diaryPage = document.getElementById("diaryPage");
const titleText = document.getElementById("titleText");
const subtitleText = document.getElementById("subtitleText");

const funnyTexts = [
  "Oh bat mo ako pipindutin?",
  "Baket no?",
  "Aba pipindutin mo?",
  "Wag ka ganyan oy 😭",
  "Di pwede!",
  "Seryoso ka??? 😾",
  "Hala siya!",
  "Awts, nasaktan ako 🥺",
  "Try mo pa 😾",
  "No is not an option 😎"
];

yesBtn.addEventListener("click", () => {
  titleText.classList.add("hidden");
  subtitleText.classList.add("hidden");
  diaryPage.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.textContent = "Aww I love you more 💖";
});

noBtn.addEventListener("mouseover", () => {
  const safeMargin = 100;
  const maxX = window.innerWidth - noBtn.offsetWidth - safeMargin;
  const maxY = window.innerHeight - noBtn.offsetHeight - safeMargin;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  const randomIndex = Math.floor(Math.random() * funnyTexts.length);
  noBtn.textContent = funnyTexts[randomIndex];
});
