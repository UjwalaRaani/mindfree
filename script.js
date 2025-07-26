// Tab switching logic
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

// Breathing
function startBreathing() {
  const circle = document.getElementById("circle");
  const instruction = document.getElementById("instruction");

  let step = 0;
  const steps = [
    { text: "Breathe In...", scale: 1.5 },
    { text: "Hold...", scale: 1.5 },
    { text: "Breathe Out...", scale: 1 },
    { text: "Hold...", scale: 1 }
  ];

  function breatheCycle() {
    const current = steps[step];
    instruction.textContent = current.text;
    circle.style.transform = `scale(${current.scale})`;

    step = (step + 1) % steps.length;
    setTimeout(breatheCycle, 4000);
  }

  breatheCycle();
}

// Affirmation
function getAffirmation() {
  const affirmations = [
    "Take a breath, love. I’m right here.",
    "I believe in you more than words can hold.",
    "Even when you're tired, you're still my favorite human.",
    "You are not just working — you're building something incredible."
  ];
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("affirmationOutput").innerHTML = `<div class="affirmation-box">🌼 ${random}</div>`;
}

// Mood
function checkMood() {
  document.getElementById("moodOutput").innerHTML = `
    <div class="mood-buttons">
      <button class="mood-button" onclick="respondToMood('😊')">😊</button>
      <button class="mood-button" onclick="respondToMood('😐')">😐</button>
      <button class="mood-button" onclick="respondToMood('😞')">😞</button>
      <button class="mood-button" onclick="respondToMood('😤')">😤</button>
      <button class="mood-button" onclick="respondToMood('😴')">😴</button>
    </div>
  `;
}

function respondToMood(emoji) {
  const responses = {
    "😊": "So glad you're feeling good! Might be done with your campaign right,Proud of you✨",
    "😐": "Neutral days are okay too 🌿",
    "😞": "You're not alone 🤍 Main hoon na tere saath",
    "😤": "Deep breath, you’ve got this 💪",
    "😴": "Rest is productive too 😌 Take rest nannaa"
  };
  document.getElementById("moodOutput").innerHTML = `<div class="mood-response">${responses[emoji]}</div>`;
}

// Challenge
function startChallenge() {
  const challenges = [
    "Text Your girlfriend whose name starts with U",
    "Clean something near you.",
    "Write down one good thing about today.",
    "Stretch for 60 seconds.",
    "Recall something about your favourite person and text her how you feel."
  ];
  const random = challenges[Math.floor(Math.random() * challenges.length)];
  document.getElementById("challengeOutput").innerHTML = `
    <div class="challenge-box">
      🕒 ${random}
      <div class="timer" id="timer">60</div>
    </div>
  `;

  let seconds = 60;
  const timer = document.getElementById("timer");

  const interval = setInterval(() => {
    seconds--;
    timer.textContent = seconds;
    if (seconds === 0) {
      clearInterval(interval);
      timer.textContent = "🎉 Well done!";
    }
  }, 1000);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const landing = document.getElementById("landingScreen");
    landing.style.opacity = "0";
    setTimeout(() => {
      landing.style.display = "none";
      document.getElementById("mainApp").style.display = "block";
    }, 1000);
  }, 3000); // 3 seconds
});
