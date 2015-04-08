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
        $('#iframe-here').html(widget);
      },

    });
  });
});

//   {error: function(jqXHR, textStatus, errorThrown) {
// debugger;
//   }}








    // // This variable calls the cNote audio element in the HTML.
    // var cNote = document.getElementById('cAudio');
    // var originalAttributes = $('#instruments').attr('style')
    //
    // // var searchPlaylists = function (query) {
    // // $.ajax({
    // //     url: 'https://api.spotify.com/v1/search',
    // //     data: {
    // //         q: query,
    // //         type: 'playlist'
    // //     },
    // //     success: function (response) {
    // //         resultsPlaceholder.innerHTML = template(response);
    // //     }
    // // });
    //
    //
    //
    //
    // // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    // $('#c').mousedown(function(){
    //     $("div").clearQueue();
    //     // This is a property that scrubs the audio file back to its start.
    //     cNote.currentTime = 0;
    //
    //     // note animation when clicked
    //     var note = $("#c");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 200);
    //       note.animate({height: 100}, 200, startAnimation);
    //     }
    //
    //     // This plays the audio file.
    //     // cNote.play();
    // });
    //
    //
    //
    // var dNote = document.getElementById('dAudio');
    //
    // $('#d').mousedown(function(){
    //     $("div").clearQueue();
    //     dNote.currentTime = 0;
    //
    //     var note = $("#d");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 300);
    //       note.animate({height: 100}, 300, startAnimation);
    //     }
    //     // dNote.play();
    // });
    //
    //
    //
    // var eNote = document.getElementById('eAudio');
    //
    // $('#e').mousedown(function(){
    //     $("div").clearQueue();
    //     eNote.currentTime = 0;
    //
    //     var note = $("#e");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 400);
    //       note.animate({height: 100}, 400, startAnimation);
    //     }
    //
    //     // eNote.play();
    // });
    //
    //
    //
    // var fNote = document.getElementById('fAudio');
    //
    // $('#f').mousedown(function(){
    //     $("div").clearQueue();
    //     fNote.currentTime = 0;
    //
    //     var note = $("#f");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 500);
    //       note.animate({height: 100}, 500, startAnimation);
    //     }
    //
    //     // fNote.play();
    // });
    //
    //
    //
    // var gNote = document.getElementById('gAudio');
    //
    // $('#g').mousedown(function(){
    //     $("div").clearQueue();
    //     gNote.currentTime = 0;
    //
    //     var note = $("#g");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 600);
    //       note.animate({height: 100}, 600, startAnimation);
    //     }
    //
    //     // gNote.play();
    // });
    //
    //
    //
    // var aNote = document.getElementById('aAudio');
    //
    // $('#a').mousedown(function(){
    //     $("div").clearQueue();
    //     aNote.currentTime = 0;
    //
    //     var note = $("#a");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 700);
    //       note.animate({height: 100}, 700, startAnimation);
    //     }
    //
    //     // aNote.play();
    // });
    //
    // var bNote = document.getElementById('bAudio');
    //
    // $('#b').mousedown(function(){
    //     $("div").clearQueue();
    //     bNote.currentTime = 0;
    //
    //     var note = $("#b");
    //     startAnimation();
    //     function startAnimation(){
    //       note.animate({height: 300}, 800);
    //       note.animate({height: 100}, 800, startAnimation);
    //     }
    //
    //     // bNote.play();
    // });
    //


    // var bNote = document.getElementById('bAudio');
    //
    // $('#b').mousedown(function(){
    //     bNote.currentTime = 0;
    //     bNote.play();
    // });
