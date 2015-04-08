$(document).ready( function() {

    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');

    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').mousedown(function(){

        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;

        // note animation when clicked
        var note = $("#c");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "fast");
          note.animate({height: 100}, "fast", startAnimation);
        }

        // This plays the audio file.
        // cNote.play();
    });



    var dNote = document.getElementById('dAudio');

    $('#d').mousedown(function(){
        dNote.currentTime = 0;

        var note = $("#d");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "fast");
          note.animate({height: 100}, "fast", startAnimation);
        }
        // dNote.play();
    });



    var eNote = document.getElementById('eAudio');

    $('#e').mousedown(function(){
        eNote.currentTime = 0;

        var note = $("#e");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "normal");
          note.animate({height: 100}, "normal", startAnimation);
        }

        // eNote.play();
    });



    var fNote = document.getElementById('fAudio');

    $('#f').mousedown(function(){
        fNote.currentTime = 0;

        var note = $("#f");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "normal");
          note.animate({height: 100}, "normal", startAnimation);
        }

        // fNote.play();
    });



    var gNote = document.getElementById('gAudio');

    $('#g').mousedown(function(){
        gNote.currentTime = 0;

        var note = $("#g");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "slow");
          note.animate({height: 100}, "slow", startAnimation);
        }

        // gNote.play();
    });



    var aNote = document.getElementById('aAudio');

    $('#a').mousedown(function(){
        aNote.currentTime = 0;

        var note = $("#a");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "slow");
          note.animate({height: 100}, "slow", startAnimation);
        }

        // aNote.play();
    });

    var bNote = document.getElementById('bAudio');

    $('#b').mousedown(function(){
        bNote.currentTime = 0;

        var note = $("#b");
        startAnimation();
        function startAnimation(){
          note.animate({height: 300}, "slow");
          note.animate({height: 100}, "slow", startAnimation);
        }

        // bNote.play();
    });



});
    // var bNote = document.getElementById('bAudio');
    //
    // $('#b').mousedown(function(){
    //     bNote.currentTime = 0;
    //     bNote.play();
    // });
