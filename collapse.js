document.addEventListener('DOMContentLoaded', function() {
    $(".acc").each(function() {
      $(this).on('show.bs.collapse', function() {
        $("#" + $(this).attr("aria-labelledby")).find("span").text("-");
      });
    });
    $(".acc").each(function() {
      $(this).on('hide.bs.collapse', function() {
        $("#" + $(this).attr("aria-labelledby")).find("span").text("+");
      });
    });
  });