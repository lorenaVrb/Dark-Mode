$(".slider").on("click", function () {
  $("body").toggleClass("dark");
  if ($("body").hasClass("dark")) {
    $("h1").text("Welcome to the Dark Side");
  } else $("h1").text("Welcome to the Bright Side");
  $(".slider")
});
