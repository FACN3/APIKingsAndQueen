'use strict;'
if (typeof (module) == undefined) {
  const secret = require("./js/secret.js");
};

var apiNames = {
  movie: 'movie',
  news: 'news'
};

function sendApiRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      return callback(JSON.parse(xhr.responseText));
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




if (typeof module !== 'undefined') {
  module.exports =
    { buildUrl }
};


