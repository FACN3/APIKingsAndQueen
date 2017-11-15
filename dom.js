
//
// document.getElementById('search-btn').addEventListener('click', function() {
//   var searchMovieName = document.getElementById('search-query').value;
//   var url = buildUrl(searchMovieName, apiNames.movie);
// })

// document.getElementById('search-btn').addEventListener('click', function() {
//       var searchNews = document.getElementById('search-query').value;
//       var url = buildUrl(searchNews, apiNames.news);
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           var result = JSON.parse(xhr.responseText);
//           // var htmlElementResult = document.querySelector('.search-results');
//           // htmlElementResult.src = result.response.results;
//         }
//       }
//       xhr.open("GET", url, true);
//       xhr.send();
//     })
function movieApiCallback(apiResult){
  apiResult = apiResult.results;
  var resultDiv = document.getElementById('searchResults');
  apiResult.forEach(function(movieItem) {
    var article = document.createElement('article');
    var title = document.createElement('h2')
    var titleText = document.createTextNode(movieItem.original_title);
    title.appendChild(titleText);
    article.appendChild(title);
    resultDiv.appendChild(article);    
  })
}

function newsApiCallback(apiResult){
  apiResult = apiResult.response.results;
  var resultDiv = document.getElementById('searchResults');
  apiResult.forEach(function(newsItem) {
  var article = document.createElement('article');
  var title = document.createElement('h2')
  var titleText = document.createTextNode(newsItem.webTitle);
  title.appendChild(titleText);
  article.appendChild(title);
  resultDiv.appendChild(article);
});
  var movieApiResult = sendApiRequest(
    buildUrl(document.getElementById('search-query').value, 'movie') 
     ,movieApiCallback);
}
 document.getElementById('search-btn')
 .addEventListener('click', function() {
  var newsApiResult = sendApiRequest(
    buildUrl(document.getElementById('search-query').value, 'news')
    , newsApiCallback);
 });


