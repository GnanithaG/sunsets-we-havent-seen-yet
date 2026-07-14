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
  const letterScene = document.getElementById("letterScene");
  const nightScene = document.getElementById("nightScene");
  const envelope = document.querySelector(".envelope");
  const paper = document.getElementById("letterPaper");

  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("show");
  }, 20);

  setTimeout(() => {
    paper.classList.add("hidden");
    paper.classList.remove("show");

    envelope.style.display = "block";
    envelope.classList.remove("open");

    letterScene.classList.add("hidden");
    nightScene.classList.remove("hidden");
  }, 750);

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 900);

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1800);
}