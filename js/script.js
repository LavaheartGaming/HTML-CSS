$(document).ready(function () {
  $(".parallax").parallax();
  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown({ hover: false });
  $(".slider").slider();
  $(".modal").modal();
  $(".tooltipped").tooltip();
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
    hoverEnabled: false,
  });
});
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};
window.onclick = setBg;
