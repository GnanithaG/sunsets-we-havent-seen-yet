function openEndingScene() {
  const overlay = document.getElementById("transitionOverlay");
  const nightScene = document.getElementById("nightScene");
  const endingScene = document.getElementById("endingScene");

  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("show");
  }, 20);

  setTimeout(() => {
    nightScene.classList.add("hidden");
    endingScene.classList.remove("hidden");
    document.title = "See you at the next one 🌅";
  }, 1000);

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 1400);

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 2400);
}

function closeEndingScene() {
  document.getElementById("endingScene").classList.add("hidden");
  document.getElementById("world").classList.remove("hidden");
  document.title = "Sunsets We Haven't Seen Yet";
}