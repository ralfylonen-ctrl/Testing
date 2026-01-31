const btn = document.getElementById("enterBtn");
const scene = document.getElementById("scene");
const text = document.getElementById("stageText");
const cake = document.getElementById("cakeArea");

btn.addEventListener("click", () => {
  btn.remove();
  document.body.style.background = "#f8fafc";
  scene.classList.remove("hidden");

  startConfetti();
  startCake();
});

function startConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}

function startCake() {
  const steps = [
    { text: "🥚 Adicionando ovos", emoji: "🥚" },
    { text: "🌾 Adicionando farinha", emoji: "🌾" },
    { text: "🥛 Adicionando leite", emoji: "🥛" },
    { text: "🍬 Adicionando açúcar", emoji: "🍬" },
    { text: "🥄 Misturando tudo", emoji: "🥄" },
    { text: "🔥 Indo para o forno", emoji: "🔥" }
  ];

  let i = 0;

  const interval = setInterval(() => {
    if (i < steps.length) {
      text.textContent = steps[i].text;
      const item = document.createElement("div");
      item.className = "item";
      item.textContent = steps[i].emoji;
      cake.appendChild(item);
      setTimeout(() => item.remove(), 1000);
      i++;
    } else {
      clearInterval(interval);
      buildCake();
    }
  }, 1200);
}

function buildCake() {
  text.textContent = "🎂 Montando o bolo";

  const layersY = ["180px", "140px", "100px"];

  layersY.forEach((y, i) => {
    setTimeout(() => {
      const layer = document.createElement("div");
      layer.className = "layer";
      layer.style.setProperty("--y", y);
      cake.appendChild(layer);
    }, i * 600);
  });

  setTimeout(() => {
    const cover = document.createElement("div");
    cover.className = "cover";
    cake.appendChild(cover);
  }, 2200);

  setTimeout(finalMessage, 3500);
}

function finalMessage() {
  cake.innerHTML = "";
  text.className = "final";
  text.textContent = "🎉 FELIZ ANIVERSÁRIO 🎉";
}
