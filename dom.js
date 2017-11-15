

document.getElementById('search-btn').addEventListener('click', function() {
  var searchMovieName = document.getElementById('search-query').value;
  var url = buildUrl(searchMovieName, apiNames.movie);
})
