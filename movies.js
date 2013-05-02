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
  $("input").keyup("click", function(){
    var entry = $("input").val();
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + entry,
      method: 'get',
      dataType: "jsonp",
      success:function(movies){
        results = movies.Search;
        $('#results').html('');
        for (var i = 0; i < results.length; i += 1) {
          var movie = results[i];
          console.log(movie);
          var title = movie.Title;
          var year = movie.Year;
          var id = movie.imdbID;
          $("<p data-id=\"" + id + "\">" + title + "(" + year + ")" + "</p>").appendTo("#results");
        }
      }
    });
  });
});



