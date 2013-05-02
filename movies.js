// $(document).ready(function(){
//   $("input").keyup("click", function(){
//     var entry = $("input").val();
//     $.ajax({
//       url: "http://www.omdbapi.com/?s=" + entry,
//       method: 'get',
//       dataType: "jsonp",
//       success:function(movies){
//         //console.log(movie['Search'][0]['Title']);
//         results = movies["Search"];
//         for (var i = 0; i < results.length; i += 1) {
//           //console.log(results[i]["Title"])
//           var title = results[i]["Title"];
//           $("<p>" + title + "</p>").appendTo("#results");
//         }
//       }
//     });
//   });
// });


$(document).ready(function(){
  $("input").keyup(function(){
    var entry = $("input").val();
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + entry,
      method: 'get',
      dataType: "jsonp",
      success: function(movies){
        results = movies.Search;
        $('#results').html('');
        for (var i = 0; i < results.length; i += 1) {
          var movie = results[i];
          var title = movie.Title;
          var year = movie.Year;
          var id = movie.imdbID;
          $("<p data-id=\"" + id + "\">" + title + " (" + year + ")" + "</p>").appendTo("#results");
        }
        $("#results").delegate("p", "click",function(){
          //$(this).css("background-color","gray");
          var movie = $(this);
          var movie_id = $(movie).attr('data-id');

          $.ajax({
            url: "http://www.omdbapi.com/?i=" + movie_id,
            method: "get",
            dataType: "jsonp",
            success: function(movie){
              var title = movie.Title;
              var year = movie.Year;
              var plot = movie.Plot;
              var actors = movie.Actors;
              var poster =movie.Poster;
              console.log(poster);
              $("<img src='" + poster + "'>").appendTo("#movie_detail");
              $("<h3>" + title + " " + year + "</h3>").appendTo("#movie_detail");
              $("<p>" + plot + "</p>").appendTo("#movie_detail");
            }
          });
        });
      }
    });
  });
});

// function createResults(searchResults){
//   searchResults = searchResults.Search;
//   for (var i = 0; i < searchResults.length); i +=0){

// }
// }


// $(document).ready(function(){
//   $("input").keyup(function(){
//     var entry = $("input").val();
//     $.ajax({
//       url: "http://www.omdbapi.com/?s=" + entry,
//       method: "get",
//       dataType: "jsonp",
//       success: function(searchResults){
//         createResults(searchResults);
//         $('#results').html('');
//       }
//     });
//   });
// });