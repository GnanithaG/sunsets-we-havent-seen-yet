let activeStar = null;
let sunriseStarted = false;

function openNightScene() {
  document.getElementById("nightScene").classList.remove("hidden");
}

function openStarMemory(type, starElement) {
  const box = document.getElementById("starMemory");
  const title = document.getElementById("starMemoryTitle");
  const text = document.getElementById("starMemoryText");
  const finalMessage = document.getElementById("finalStarMessage");

  const memories = {
    one: {
      title: "A Little Truth",
      text: `I don't just love you.

I admire you.

The way you care.
The way you work.
The way you never stop trying.

I hope you never forget
how incredible you are.`
    },

    two: {
      title: "Worth Every Mile",
      text: `If loving you means
crossing 2,304 miles...

I'd do it
over and over again.

Without thinking twice.`
    },

    three: {
      title: "My Favorite Place",
      text: `Home stopped being a place.

It slowly became

your voice.

your laugh.

your heart.

You.`
    },

    four: {
      title: "Just letting you know",
      text: `I hope you know...

that I trust you with everything, Saichandra,

and I will be cheering for you
every single day.`
    },

    five: {
      title: "Proud Of You",
      text: `I don't know
if anyone tells you this enough...

but I'm soooo sooooo proud of you.

Of the man that you were and are.

Of the man you're becoming.

Of your heart.`
    },

    six: {
      title: "My Favorite Thought",
      text: `No matter how busy
my day gets...

somehow...

my thoughts

always find their way back to you.`
    },

    seven: {
      title: "Thank You",
      text: `Thank you...

for choosing us.

For staying.

For trying.

For making distance feel
a little less lonely.`
    },

    eight: {
      title: "My Favorite Chef",
      text: `One day...

I'll finally get to sit
across from you...

while you cook
my favorite meal.

Until then...

I'll keep saving sunsets
for us.`
    }
  };

  if (activeStar) {
    activeStar.classList.remove("active-star");
  }

  activeStar = starElement;
  activeStar.classList.add("active-star");

  if (type === "nine") {
    box.classList.remove("show");
    box.classList.add("hidden");

    finalMessage.classList.remove("hidden");

    setTimeout(() => {
      finalMessage.classList.add("show");
    }, 50);

    if (!sunriseStarted) {
      sunriseStarted = true;

      setTimeout(() => {
        finalMessage.classList.remove("show");

        setTimeout(() => {
          finalMessage.classList.add("hidden");
          openEndingScene();
        }, 1200);
      }, 9000);
    }

    return;
  }

  title.innerText = memories[type].title;
  text.innerText = memories[type].text;

  const rect = starElement.getBoundingClientRect();

  const boxWidth = 360;
  const boxHeight = 260;

  let left = rect.left + 30;
  let top = rect.top + 30;

  if (rect.left > window.innerWidth / 2) {
    left = rect.left - boxWidth - 30;
  }

  if (rect.top > window.innerHeight / 2) {
    top = rect.top - boxHeight - 30;
  }

  left = Math.max(20, Math.min(left, window.innerWidth - boxWidth - 20));
  top = Math.max(20, Math.min(top, window.innerHeight - boxHeight - 20));

  box.style.left = left + "px";
  box.style.top = top + "px";

  box.classList.remove("hidden");

  setTimeout(() => {
    box.classList.add("show");
  }, 20);
}

document.addEventListener("click", function(event) {
  const box = document.getElementById("starMemory");
  const finalMessage = document.getElementById("finalStarMessage");

  if (finalMessage && finalMessage.classList.contains("show")) return;
  if (!box || box.classList.contains("hidden")) return;

  const clickedStar = event.target.closest(".memory-star");
  const clickedBox = box.contains(event.target);

  if (!clickedStar && !clickedBox) {
    box.classList.remove("show");

    if (activeStar) {
      activeStar.classList.remove("active-star");
      activeStar = null;
    }

    setTimeout(() => box.classList.add("hidden"), 350);
  }
}
);
