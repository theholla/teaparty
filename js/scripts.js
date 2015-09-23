function printSong(cups) {
  var couplets = [];
  var i = "";

  for (i = cups; i >= 0; i--) {
    if (i === 2) {
      couplets.push("<p>He gave " + i + " cups of tea to Alice, " + i + " cups of tea! <br>" + "He took one down, and passed it around, " + (i - 1) + " more cup of tea for her! </p>");
    } else if (i === 1) {
      couplets.push("<p>He gave " + i + " cup of tea to Alice, " + i + " cup of tea! <br>" + "He took it down, and passed it around, no more cups of tea for her! </p>");
    } else if (i === 0) {
      couplets.push("<p>He gave no more cups of tea to Alice, no more cups of tea! <br>" + "He laid on the floor, imagined some more... " + cups + " cups of tea for her! </p>");
    } else {
      couplets.push("<p>He gave " + i + " cups of tea to Alice, " + i + " cups of tea! <br>" + "He took one down, and passed it around, " + (i - 1) + " cups of tea for her! </p>");
    }
  }
  return couplets.join("");
}

$(document).ready(function() {
  $("form#teacups").submit(function(event) {
    var cups = parseInt($("input#cups").val());
    var output = printSong(cups);
    $(".output").html(output);

    $("#result").show();
    $("#finalThought").show();
    event.preventDefault();
  });
});
