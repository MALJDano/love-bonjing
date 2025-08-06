const yesBtn = document.getElementById("YesBtn");
const noBtn = document.getElementById("noBtn");
const diaryPage = document.getElementById("diaryPage");

const funnyTexts = [
  "Oh bat mo ako pipindutin?",
  "Baket no?",
  "Aba pipindutin mo?",
  "Wag ka ganyan beh 😭",
  "Di pwede!",
  "Seryoso ka??? 😠",
  "Hala siya!",
  "Awts, nasaktan ako 🥺",
  "Try mo pa 😂",
  "No is not an option 😎"
];

yesBtn.addEventListener("click", () => {
  diaryPage.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  const bodyWidth = window.innerWidth - noBtn.offsetWidth;
  const bodyHeight = window.innerHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * bodyWidth);
  const newY = Math.floor(Math.random() * bodyHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // Change button text randomly
  const randomIndex = Math.floor(Math.random() * funnyTexts.length);
  noBtn.textContent = funnyTexts[randomIndex];
});
