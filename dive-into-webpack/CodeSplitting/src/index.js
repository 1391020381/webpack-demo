import _ from "loadsh";
import printMe from "./print";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "webpack"], "");
  btn.innerHTML = "click me and check the console";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}
document.body.appendChild(component());
