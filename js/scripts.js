

$(document).ready(function() {
  $("form#teacups").submit(function(event) {
    var cups = parseInt($("input#cups").val());
    var output = getPoem(cups);

    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
