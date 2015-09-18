function printSong(cups) {
  var couplets = [];
  var i = "";
  debugger;

  for (i = cups; i >= 0; i--) {
    if (i === 2) {
      couplets.push("He gave " + i + " cup of tea to Alice, " + i + " cup of tea! \n" + "He took it down, and passed it around, " + (i - 1) + " cup of tea for her! \n");
    } else if (i === 1) {
      couplets.push("He gave " + i + " cup of tea to Alice, " + i + " cup of tea! \n" + "He took it down, and passed it around, " + (i - 1) + " cups of tea for her! \n");
    } else if (i === 0) {
      couplets.push("He gave no more cups of tea to Alice, no cups of tea! \n" + "He laid on the floor, imagined some more... " + cups + " cups of tea for her! \n");
    } else {
      couplets.push("He gave " + i + " cups of tea to Alice, " + i + " cups of tea! \n" + "He took one down, and passed it around, " + (i - 1) + " cups of tea for her! \n");
    }
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
