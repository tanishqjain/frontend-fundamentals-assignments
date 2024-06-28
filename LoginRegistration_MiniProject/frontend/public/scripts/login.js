$(document).ready(function () {
  $("#login-page-error-alert").hide();

  $("#login-page-email").keypress(function () {
    $("#login-page-error-alert").hide();
  });

  $("#login-page-password").keypress(function () {
    $("#login-page-error-alert").hide();
  });

  $("#login-form").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var user = {};

    user.email = $("#login-page-email").val();
    user.password = $("#login-page-password").val();

    $.ajax({
      type: "POST",
      url: "https://registrationlogin-demoapi.azurewebsites.net/api/users/login",
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        setSessionCookie(response.token);
        window.location.href = "/";
      },
      error: function (response) {
        $("#login-page-error-alert").show();
      },
    });
  });
});

function setSessionCookie(token) {
  $.cookie("sessionToken", token, { expires: 7, path: "/" });
}
