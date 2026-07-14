const openingLines = [
  "2,304 miles",
  "That is how far you are from me",
  "Some days, I pretend it feels small",
  "Some days, it really doesn’t",
  "But somehow...",
  "the same sky still holds us both",
  "So I saved this little sunset for you, Saichandra ❤️"
];

let lineIndex = 0;
const openingText = document.getElementById("openingText");

function enterWorld() {
  const opening = document.getElementById("opening");
  const world = document.getElementById("world");

  opening.classList.add("scene-fade-out");

  setTimeout(() => {
    opening.style.display = "none";
    world.classList.remove("hidden");
    world.classList.add("scene-fade-in");
  }, 1200);
}

function showOpeningLine() {
  openingText.classList.remove("text-visible");

  setTimeout(() => {
    openingText.innerText = openingLines[lineIndex];
    openingText.classList.add("text-visible");
  }, 750);

  setTimeout(() => {
    openingText.classList.remove("text-visible");
    lineIndex++;

    if (lineIndex < openingLines.length) {
      setTimeout(showOpeningLine, 800);
    } else {
      setTimeout(enterWorld, 1200);
    }
  }, 3600);
}

openingText.innerText = openingLines[0];

setTimeout(() => {
  openingText.classList.add("text-visible");
}, 500);

setTimeout(() => {
  openingText.classList.remove("text-visible");
  lineIndex = 1;
  setTimeout(showOpeningLine, 800);
}, 3600);
