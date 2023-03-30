const goButton = document.getElementById("gobutton");
const font = document.getElementById("font");

let loopFonts;
let nextFontIndex = 0;
let counter = 0;

const fonts = [
  "monospace",
  "sans-serif",
  "serif",
  "fantasy",
  "Arial",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Courier New",
  "Brush Script MT",
];

const start = () => {
  loopFonts = setInterval(changeFace, 100);
};

const changeFace = () => {
  font.innerText = fonts[nextFontIndex];
  font.setAttribute("style", `font-family: ${fonts[nextFontIndex]}`);
  if (nextFontIndex < fonts.length - 1) {
    nextFontIndex++;
  } else {
    nextFontIndex = 0;
  }
};

goButton.addEventListener("click", () => {
  if (!loopFonts) {
    start();
    goButton.classList.remove("start");
    goButton.classList.add("stop");
    goButton.innerText = "Stop";
  } else {
    clearInterval(loopFonts);
    loopFonts = "";
    goButton.classList.remove("stop");
    goButton.classList.add("start");
    goButton.innerText = "Start";
    font.innerText = "monospace";
    font.setAttribute("style", "font-family: monospace");

    // counter so if they do it enough times, it just tells them how it is
    counter++;
    if (counter > 5) {
      document.querySelector(".App").innerHTML = "<h3>Look. It's monospace so just stop asking.</h3>";
    }
  }
});
