const yesBtn = document.getElementById("YesBtn");
const noBtn = document.getElementById("noBtn");
const diaryPage = document.getElementById("diaryPage");

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
  diaryPage.classList.remove("hidden");
  noBtn.style.display = "none";
  yesBtn.textContent = "Aww I love you more 💖";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const containerRect = document.querySelector('.container').getBoundingClientRect();

  // Calculate safe area to avoid overlapping diary section
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight - 150; // keep it away from diary

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  // Change button text randomly
  const randomIndex = Math.floor(Math.random() * funnyTexts.length);
  noBtn.textContent = funnyTexts[randomIndex];
});
