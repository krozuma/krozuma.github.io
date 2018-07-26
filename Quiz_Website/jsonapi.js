$(document).ready(function() {
$.ajax({
    url: "http://otter.topsy.com/urlinfo.js?url=http://www.nytimes.com",
    dataType: 'jsonp',
    success: function(results){
        var title = results.response.oneforty;
        var numTweets = results.response.trackback_total;
        $('#results').append(title + ' has ' + numTweets + ' tweets.');
    }
});
}
