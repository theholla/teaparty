function printSong(cups) {
  for (i = cups; i > 0; i--) {
    console.log(i);
      document.write("He gave " + i + " cups of tea to Alice, ");
      document.write(i + " cups of tea! ");
      document.write("He took one down, and passed it around, ");
      document.write((i -= 1) + " cups of tea for her! ");
  }
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
