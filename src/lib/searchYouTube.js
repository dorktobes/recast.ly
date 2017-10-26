var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: {
      q: options.query,
      maxResults: options.max ? options.max : 5,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data.items);
    },
    error: function() {
      console.log('request incomplete');
    }
  });
};

window.searchYouTube = searchYouTube;
