
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

function handlemovieapi(){
  console.log('works');
}
 document.getElementById('search-btn')
 .addEventListener('click', function() {
  var newsApiResult = sendApiRequest(
    buildUrl(document.getElementById('search-query').value, 'news')
    , handlemovieapi);
 });

//  function handlenewsapi(){}
//  function handleNewsApiResult (apiResult) {
//    api.response.result
//  }
