$(document).ready(function () {
  $(".parallax").parallax();
  $(".collapsible").collapsible();
  $(".dropdown-trigger").dropdown({ hover: false });
});
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(elems, {
    direction: "left",
    hoverEnabled: false,
  });
});

$(document).ready(function(){
   $('.tooltipped').tooltip();
 });
 $(document).ready(function(){
   $('.modal').modal();
 });
 $(document).ready(function(){
   $('.slider').slider();
 });

 function trashnosmile() {
   document.getElementById('trashsmile()').src='img/connected-trashback2.jpg';
 }
