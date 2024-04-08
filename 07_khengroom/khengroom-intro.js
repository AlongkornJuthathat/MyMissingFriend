count = 0;
let width = screen.width;
function change() {
  p.classList.add("hide");
  setTimeout(function () {
    p.textContent = txtList[idx];
    idx = (idx + 1) % txtList.length;
  }, 1500);
  setTimeout(function () {
    p.classList.remove("hide");
  }, 1500);
  if (idx == 2) {
    location.href = "khengroom.html";
  }

  if (count == 0) {
    if (width <= 1000) {
      document.body.style.setProperty("--bgposition", "35% 23%");
      document.body.style.setProperty("--bgsize", "cover");
    } else {
      document.body.style.setProperty("--bgposition", "35% 23%");
      document.body.style.setProperty("--bgsize", "220%");
    }
  }
  if (count == 1) {
    if (width <= 1000) {
      document.body.style.setProperty("--bgposition", "50% 50%");
      document.body.style.setProperty("--bgsize", "cover");
    } else {
      document.body.style.setProperty("--bgposition", "50% 50%");
      document.body.style.setProperty("--bgsize", "180%");
    }
  }
  count++;
}
