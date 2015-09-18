function printSong(cups) {
  var couplets = [];
  for (i = cups; i > 0; i--) {
    couplets.push("He gave " + i + " cups of tea to Alice, " + i + " cups of tea! \n" + "He took one down, and passed it around, " + (i - 1) + " cups of tea for her! \n");
  }
  return couplets.join("");
}

$(document).ready(function() {
  $("form#teacups").submit(function(event) {
    var cups = parseInt($("input#cups").val());
    var output = printSong(cups);

    $(".output").text(output);

    $("#result").show();
    $("#finalThought").show();
    event.preventDefault();
  });
});
