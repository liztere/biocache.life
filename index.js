$(document).ready(function () {
  $("p").click(function () {
    if ($(".typeabout").hasClass("hidden")) {
      $(".typeabout").removeClass("hidden");
    } else {
      $(".typeabout").addClass("hidden");
    }
  });
});