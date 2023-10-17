var timer = 10;
var hitValrn = 0;
var score = 0;

function genrateBubble() {
  var clutter = "";

  for (var i = 1; i <= 108; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#bottum_plane").innerHTML = clutter;
}

function genrateHitVal() {
  hitValrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitValrn;
}

function runner() {
  var interval = setInterval((det) => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#bottum_plane").innerHTML = `<h1>Game Over!</h1>`;
      clearInterval(interval);
    }
  }, 1000);
}

function getScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document
  .querySelector("#bottum_plane")
  .addEventListener("click", function (det) {
    var bubbleNum = Number(det.target.textContent);
    if (bubbleNum === hitValrn) {
      getScore();
      genrateBubble();
      genrateHitVal();
    }
  });

runner();
genrateHitVal();
genrateBubble();
