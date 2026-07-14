let planeTimer;

function openMainCard(type) {
  const card = document.getElementById("mainCard");
  const text = document.getElementById("mainCardText");

  if (type === "recipe") {
    text.innerText =
      "Recipe for Home\n\nIngredients:\n• 2,304 miles\n• Endless patience\n• Late-night Facetimes and movies\n• One incredible chef\n• One girl who believes in us\n\nInstructions:\nCook slowly.\nNever rush what matters.\nAdd kindness when the days feel heavy.\nKeep choosing each other.\nServe with love.";
  }

  card.classList.remove("hidden");

  setTimeout(() => {
    card.classList.add("show");
  }, 20);
}

function openPlaneNote(type) {
  const note = document.getElementById("planeNote");
  const title = document.getElementById("planeTitle");
  const text = document.getElementById("planeText");
  const sky = document.getElementById("sky");

  clearTimeout(planeTimer);

  const notes = {
    gentle: [
      "A Little Reminder",
      "I hope today is gentle on you.\n\nAnd if it wasn't...\nI hope tomorrow is a little gentler."
    ],
    mile: [
      "Worth Every Mile",
      "Every mile between us\nis still worth it."
    ],
    sky: [
      "The Same Sky",
      "Every sunset\nstill reminds me of you."
    ],
    loved: [
      "Just So You Know",
      "I hope you know\nhow loved you are."
    ],
    notification: [
      "My Favorite Notification",
      "I get super excited\nevery time\nI see your name\npop up on my phone."
    ]
  };

  title.innerText = notes[type][0];
  text.innerText = notes[type][1];

  sky.classList.add("dimmed", "note-open");

  note.classList.remove("hidden");

  setTimeout(() => {
    note.classList.add("show");
  }, 20);

  planeTimer = setTimeout(closePlaneNote, 6500);
}

function closePlaneNote() {
  const note = document.getElementById("planeNote");
  const sky = document.getElementById("sky");

  note.classList.remove("show");
  sky.classList.remove("dimmed", "note-open");

  setTimeout(() => {
    note.classList.add("hidden");
  }, 400);
}

document.addEventListener("click", function(event) {
  const mainCard = document.getElementById("mainCard");
  const planeNote = document.getElementById("planeNote");
  const clickedButton = event.target.closest("button");

  if (!mainCard.classList.contains("hidden") && !mainCard.contains(event.target) && !clickedButton) {
    mainCard.classList.remove("show");

    setTimeout(() => {
      mainCard.classList.add("hidden");
    }, 450);
  }

  if (!planeNote.classList.contains("hidden") && !planeNote.contains(event.target) && !clickedButton) {
    clearTimeout(planeTimer);
    closePlaneNote();
  }
});