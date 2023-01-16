$(function () {
  $("#my_modal").hide();
  $("button").click(function () {
    $("#my_modal").show();
  });
  $("#close").click(function (e) {
    e.preventDefault();
    $("#my_modal").hide();
  });
});
