//Creating layout

let container = document.createElement("div");
container.setAttribute("class", "container outercontainer");
container.innerHTML = `
<input id="display" placeholder="Let's Calculate">
<div class="mbutton">
<div class="button">MC</div>
<div class="button">M+</div>
<div class="button">M-</div>
<div class="button">MR</div>
<div class="button">MS</div>
</div>
<div class="buttons">
<div class="button">C</div>
<div class="button">/</div>
<div class="button">*</div>
<div class="button">&larr;</div>
<div class="button">7</div>
<div class="button">8</div>
<div class="button">9</div>
<div class="button">-</div>
<div class="button">4</div>
<div class="button">5</div>
<div class="button">6</div>
<div class="button">+</div>
<div class="button">1</div>
<div class="button">2</div>
<div class="button">3</div>
<div class="button">.</div>
<div class="button">(</div>
<div class="button">0</div>
<div class="button">)</div>
<div id="equal" class="button">=</div>
</div>`;

document.body.append(container);

//Functionalitie
let s;
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.value = "";
        break;
      case "MS":
        window.localStorage.setItem("store", Number(display.value));
        display.value = "";
        break;
      case "M+":
        s = window.localStorage.getItem("store");
        window.localStorage.setItem("store", Number(s) + Number(display.value));
        display.value = window.localStorage.getItem("store");
        break;
      case "M-":
        s = window.localStorage.getItem("store");
        window.localStorage.setItem("store", Number(s) - Number(display.value));
        display.value = window.localStorage.getItem("store");
        break;
      case "MR":
        display.value = window.localStorage.getItem("store");
        break;
      case "MC":
        window.localStorage.setItem("store", 0);
        display.value = window.localStorage.getItem("store");
      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          window.alert("Only Numbers and Valid Operations are Allowed");
        }
        break;
      case "←":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      default:
        display.value += e.target.innerText;
    }
  });
});
document.onkeydown = function enter(event) {
  if (event.keyCode == 13) {
    try {
      display.value = eval(display.value);
    } catch {
      window.alert("Only Numbers are Allowed");
    }
  }
};
let instructions = document.createElement("div");
instructions.setAttribute("class", "note");
instructions.innerHTML = `<ul>
<li>MC - Memory Clean</li>
<li>MR - Memory Recall</li>
<li>MS - Memory Store</li>
<li>M+ - Add to Memory</li>
<li>M- - subtract from Memory</li>
</ul>`;
document.body.append(instructions);
