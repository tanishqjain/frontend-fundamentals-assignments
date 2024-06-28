$(document).ready(function () {
  $(".logged-in").fadeOut();
  $(".logged-out").fadeIn();

  var cookieValue = $.cookie("sessionToken");
  if (cookieValue) {
    $(".logged-in").fadeIn();
    $(".logged-out").fadeOut();
  }

  $("#logout-button").click(function (e) {
    e.preventDefault();
    $.removeCookie("sessionToken");
    $(".logged-in").fadeOut();
    $(".logged-out").fadeIn();
  });
});
