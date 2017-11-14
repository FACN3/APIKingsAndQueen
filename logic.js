'use strict;'
//const secret = require("./secret.js");

function getData(url, ending) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            return (JSON.parse(xhr.responseText).ending);
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}

function buildUrl(query,apiName){
    switch(apiName){
        case 'movie':
        return   'https://api.themoviedb.org/3/search/movie?api_key='+secret.movieKey +'&query=' + query;
        case 'news':
        return  'https://content.guardianapis.com/search?q='+query+ '&api-key=' + secret.newsKey;
    default : break;
    }
}
//  module.exports = {buildUrl};