const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const button = document.querySelector("button");
function changeBackground(e){
  const num = colors.length;
  const colorNum1 = Math.floor(Math.random() * num);
  const colorNum2 = Math.floor(Math.random() * num);
  console.log(colorNum1,colorNum2)
  document.body.style.background = `liner-gradient(90deg,${colors[colorNum1]},${colors[colorNum2]})`;
}

button.addEventListener("click",changeBackground);