$(document).ready( function() {

    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');

    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').mousedown(function(){

        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;

        // This plays the audio file.
        cNote.play();
    });



    var dNote = document.getElementById('dAudio');

    $('#d').mousedown(function(){
        dNote.currentTime = 0;
        dNote.play();
    });



    var eNote = document.getElementById('eAudio');

    $('#e').mousedown(function(){
        eNote.currentTime = 0;
        eNote.play();
    });



    var fNote = document.getElementById('fAudio');

    $('#f').mousedown(function(){
        fNote.currentTime = 0;
        fNote.play();
    });



    var gNote = document.getElementById('gAudio');

    $('#g').mousedown(function(){
        gNote.currentTime = 0;
        gNote.play();
    });



    var aNote = document.getElementById('aAudio');

    $('#a').mousedown(function(){
        aNote.currentTime = 0;
        aNote.play();
    });



    var bNote = document.getElementById('bAudio');

    $('#b').mousedown(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

});
