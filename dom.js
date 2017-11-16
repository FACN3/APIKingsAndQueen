
function movieApiCallback(apiResult){
  apiResult = apiResult.results;
  var resultDiv = document.getElementById('movie-result');
  apiResult.forEach(function(movieItem) {
    var article = document.createElement('article');
    var title = document.createElement('h2')
    var titleText = document.createTextNode(movieItem.original_title);
    title.appendChild(titleText);
    article.appendChild(title);
    resultDiv.appendChild(article);
  });
}

function newsApiCallback(apiResult){
  apiResult = apiResult.response.results;
  var resultDiv = document.getElementById('news-result');
  apiResult.forEach(function(newsItem) {
  var article = document.createElement('article');
  var title = document.createElement('h2')
  var titleText = document.createTextNode(newsItem.webTitle);
  title.appendChild(titleText);
  article.appendChild(title);
  resultDiv.appendChild(article);
});
}

 document.getElementById('search-btn')
 .addEventListener('click', function() {
  var newsApiResult = sendApiRequest(
    buildUrl(document.getElementById('search-query').value, 'news')
    , newsApiCallback);
  var movieApiResult = sendApiRequest(
    buildUrl(document.getElementById('search-query').value, 'movie')
     ,movieApiCallback);
 });
