$(document).ready( function() {
  var buildIFrame = function(userId, playlistId) {
    return '<iframe src="https://embed.spotify.com/?uri=spotify:user:' + userId + ':playlist:' +
      playlistId + '&view=coverart" frameborder="0" allowtransparency="true"></iframe>';
    // <iframe src="https://embed.spotify.com/?uri=spotify:user:artk0ree:playlist:3POl19QMYMtxddwvLe3NZB&view=coverart" frameborder="0" allowtransparency="true"></iframe>
  };

  $(document).on('click', '.genre-search', function(e) {
    $.ajax({
      url: '/welcome/search',
      data: {
        genre: $(this).data().genre
      },
      success: function (response) {
        var widget = buildIFrame(response.user_id, response.playlist_id);
        $('#iframe').html(widget);
      },
    });
  });
});

//   {error: function(jqXHR, textStatus, errorThrown) {
// debugger;
//   }}
