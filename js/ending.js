function openEndingScene() {
  const overlay = document.getElementById("transitionOverlay");
  const world = document.getElementById("world");
  const nightScene = document.getElementById("nightScene");
  const endingScene = document.getElementById("endingScene");

  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("show");
  }, 10);

  setTimeout(() => {
    world.classList.add("hidden");
    nightScene.classList.add("hidden");
    endingScene.classList.remove("hidden");

    document.title = "See you at the next one 🌅";
 },180);

setTimeout(() => {
    overlay.classList.remove("show");
},260);

setTimeout(() => {
    overlay.classList.add("hidden");
},420);
}

function closeEndingScene() {
  document.getElementById("endingScene").classList.add("hidden");
  document.getElementById("world").classList.remove("hidden");
  document.title = "Sunsets We Haven't Seen Yet";
}
