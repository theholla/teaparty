

$(document).ready(function() {
  $("form#neuro-test").submit(function(event) {
    var text = parseInt($("input#input").val());
    var output = getFunction(text);

    $(".input").text(text);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});
