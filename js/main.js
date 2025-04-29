$(document).ready(function () {
  $(".top-up").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      400
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".top-up").slideDown(300);
    } else {
      $(".top-up").slideUp(300);
    }
  });
});

$(document).ready(function () {
  // Cuando el usuario haga scroll, ejecuta la función
  $(window).scroll(function () {
    if ($(window).scrollTop() > 250) {
      // Ajusta este valor según el punto en el que quieras que cambie
      $("header#main-header").addClass("main-header-fixed-active");
    } else {
      $("header#main-header").removeClass("main-header-fixed-active");
    }
  });
});
