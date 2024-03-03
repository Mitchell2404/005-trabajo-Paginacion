$(document).ready(function() {
  $(".tab-link").click(function() {
    var index = $(this).parent().index();
    //Cuando se clickea se modifica el el elemento transform
    $("#tab-content").css("transform", "translateX(" + (-index * 30) + "%)");
  });
});