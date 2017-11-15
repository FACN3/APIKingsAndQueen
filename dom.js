
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

 document.getElementById('search-btn').addEventListener('click', function() {
   console.log(buildUrl(document.getElementById('search-query').value, 'news'))
  var newsApiResult = sendApiRequest(buildUrl(document.getElementById('search-query').value, 'news'));
  // if(newsApiResult){
  //   console.log(newsApiResult.response.results);
  // }

  // function filterResult(item) {
  //   if ()
  // }
 });

 function handleNewsApiResult (apiResult) {
   api.response.result
 }
