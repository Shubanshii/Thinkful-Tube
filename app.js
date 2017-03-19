var YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

function getDataFromAPI(searchTerm, callback){
	var params = {
		part: "snippet",
		key: "AIzaSyB9x1BtHsxR86c0mrDgZYgIB_Nm5_vAcR0",
		q: searchTerm
	}
	  $.getJSON(YOUTUBE_API_URL, params, callback);


}

function displayYoutubeSearchThumbnail(data){
	//copy pasted from the example, we'll have to fix this

	var resultElement = '';
	//console.log(data.items[1]);
	if(data.items[1].id.kind === "youtube#video"){
		console.log("working");
	}
	console.log(data.items[1].snippet.thumbnails.default.url);
	console.log(data.items[1].id.videoId);
	  if (data.items) {
    data.items.forEach(function(item) {
    	if(item.id.kind === "youtube#video"){
    		console.log(item.id.videoID);
    		resultElement += '<div><a href=https://www.youtube.com/watch?v='+item.id.videoId+'><img src='+item.snippet.thumbnails.default.url+'></a></div>';
    	}
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);

}

$(document).ready(function(){
	$('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromAPI(query, displayYoutubeSearchThumbnail);
  });

})