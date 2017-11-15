'use strict;'
//const secret = require("./secret.js");

//var apiHeaders = {movieUrl : 'result',newsUrl : 'response' }
var apiNames = {
  movie: 'movie',
  news: 'news'
};

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      return (JSON.parse(xhr.responseText));
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
}

function buildUrl(query, apiName) {
  switch (apiName) {
    case 'movie':
      return 'https://api.themoviedb.org/3/search/movie?api_key=' + secret.movieKey + '&query=' + query;
    case 'news':
      return 'https://content.guardianapis.com/search?q=' + query + '&api-key=' + secret.newsKey;
    default:
      break;
  }
}


module.exports = {
    buildUrl
  };
// if (typeof(module) == undefined) {
//   module.exports = {
//     buildUrl
//   };
// }
