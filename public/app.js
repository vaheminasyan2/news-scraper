// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    var article = $("<article>").attr("data-id", data[i]._id);
    var title = $("<p>").attr("id", "title").text(data[i].title);
    var summary = $("<p>").attr("id","summary").text(data[i].summary);
    var link = $("<a>").attr("href", data[i].link).attr("target", "_blank").text(data[i].link).append("<br>");;
    var addNoteBtn = $("<button>").text("Notes").addClass("btn btn-warning btn-sm").attr("id", "addnote");
    // Display the apropos information on the page
    article.append(title, summary, link, addNoteBtn);
    $("#articles").append(article).append("<br>");
  }
});

// Whenever someone clicks a p tag
$(document).on("click", "#addnote", function() {
  // Empty the notes from the note section
  $("#notes").empty();
  // Save the id from the p tag
  var thisId = $(this).parent().attr("data-id");
  //console.log(thisId)

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      //console.log(data);
      // The title of the article
      $("#notes").append("<h6>" + data.title + "</h2>");
      // An input to enter a new title
      $("#notes").append("<input class='form-control' type='text' id='titleinput' name='title' >");
      // A textarea to add a new note body
      $("#notes").append("<textarea class='form-control' type='text' id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      $("#notes").addClass("form-group").append("<button data-id='" + data._id + "' id='savenote' class='btn btn-primary btn-sm' >Save Note</button>");

     // var saveNoteBtn = $("<button>").attr("data-id", data._id).attr("id", "savenote").text("Save Note").addClass("btn btn-success btn-sm");

      // $("#notes").append(saveNoteBtn)

      // If there's a note in the article
      if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
        console.log(data.note)
      }
    });
});

// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  //console.log(thisId)

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
