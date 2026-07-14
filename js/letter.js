function openLetterScene() {
  const scene = document.getElementById("letterScene");
  const envelope = document.querySelector(".envelope");
  const paper = document.getElementById("letterPaper");

  scene.classList.remove("hidden");

  envelope.style.display = "block";
  envelope.classList.remove("open");

  paper.classList.add("hidden");
  paper.classList.remove("show");
}

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const paper = document.getElementById("letterPaper");

  envelope.classList.add("open");

  setTimeout(() => {
    envelope.style.display = "none";
    paper.classList.remove("hidden");

    setTimeout(() => {
      paper.classList.add("show");
    }, 50);
  }, 650);
}

function closeLetterScene() {
  const overlay = document.getElementById("transitionOverlay");
  const world = document.getElementById("world");
  const letterScene = document.getElementById("letterScene");
  const nightScene = document.getElementById("nightScene");
  const envelope = document.querySelector(".envelope");
  const paper = document.getElementById("letterPaper");

  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("show");
  }, 10);

 setTimeout(() => {

    world.classList.add("hidden");

    paper.classList.add("hidden");
    paper.classList.remove("show");

    envelope.style.display = "block";
    envelope.classList.remove("open");

    letterScene.classList.add("hidden");
    nightScene.classList.remove("hidden");

},180);

setTimeout(() => {
    overlay.classList.remove("show");
},260);

setTimeout(() => {
    overlay.classList.add("hidden");
},420);
