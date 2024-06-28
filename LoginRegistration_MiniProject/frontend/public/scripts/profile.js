$(document).ready(function () {
  $("#profile-page-success-alert").hide();
  $("#profile-form").on("submit", function (event) {
    updateProfile(event);
  });
  $("#logout-button").click(function (e) {
    e.preventDefault();
    $.removeCookie("sessionToken");
    window.location.href = "/";
  });

  var cookieValue = $.cookie("sessionToken");
  if (cookieValue) {
    $.ajax({
      type: "GET",
      url: "https://registrationlogin-demoapi.azurewebsites.net/api/users/profile",
      headers: { "x-auth-token": cookieValue },
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        populateProfileDetails(response);
      },
    });
  }
});

function updateProfile(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  var cookieValue = $.cookie("sessionToken");
  var userProfile = {};

  userProfile.firstName = $("#profile-page-firstName").val();
  userProfile.lastName = $("#profile-page-lastName").val();
  userProfile.phoneNumber = $("#profile-page-tel").val();

  $.ajax({
    type: "PATCH",
    url: "https://registrationlogin-demoapi.azurewebsites.net/api/users/profile",
    headers: { "x-auth-token": cookieValue },
    data: JSON.stringify(userProfile),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log(response);
      $("#profile-page-success-alert").show();
    },
    error: function (response) {},
  });
}

function populateProfileDetails(res) {
  $("#profile-page-firstName").val(
    res.profile && res.profile.firstName ? res.profile.firstName : null
  );
  $("#profile-page-lastName").val(
    res.profile && res.profile.lastName ? res.profile.lastName : null
  );
  $("#profile-page-tel").val(
    res.profile && res.profile.phoneNumber ? res.profile.phoneNumber : null
  );
}
