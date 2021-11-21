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

const generateColor = () => {
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  let text = document.querySelector("#colooor");
};
