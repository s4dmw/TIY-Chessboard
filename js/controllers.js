(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */

  update.view();// display the intial state of the board

 //load an opening based on the selection for the drop down menu
  $("#game").change(function(){
    //only calls the function if the user makes a selection
    if(this.value !== "none") {
      game.moves(this.value);
      game.reset(); //resets the game
      update.view(); //updates the view
      $('td').removeClass("highlight"); //clear highlights
      pause(); //if the game is playing, i want it to pause
      playButtonStatus = true; //reset game button status
    };

  });


  // Controller for "next move"...
  $("#next").on('click', function(){
    pause(); //if the game is playing, i want it to pause
    playButtonStatus = true; //reset game button status
    game.next();
    update.view();
  });


  // Controller for "previous move"...
  $("#back").on('click', function(){
    pause(); //if the game is playing, i want it to pause
    playButtonStatus = true; //reset game button status
    game.prev();
    update.view();
  });


  // Controller for "fast-forward"...
  $("#end").on('click', function(){
    pause(); //if the game is playing, i want it to pause
    playButtonStatus = true; //reset game button status
    game.end();
    update.view();
  });


  // Controller for "rewind"...
  $("#reset").on('click', function(){
    pause(); //if the game is playing, i want it to pause
    playButtonStatus = true; //reset game button status
    game.reset();
    update.view();
    $('td').removeClass("highlight"); //clear highlights
  });




  //controller for "play/pause"  - 2nd try
    var playButtonStatus = true;
    $("#play").on('click', function(){
      if (playButtonStatus) {
          play();
          playButtonStatus = false; //change button status so it will pause if you
          //push it again
          return;
      };
      pause();
      playButtonStatus = true; //reset button status so it will play if you push it again
      });


      var nIntervId; //intialize the interval ID
      function play(){
          nIntervId = setInterval(playStep, 1000);
      };

      function playStep(){
        if(gameCounter<gameLength){ //only let the play run until it gets to the end
          game.next();
          update.view();
          return
        };
        pause();
        playButtonStatus = true;
      };

      function pause() {
        clearInterval(nIntervId);
      };




// Am I supposed to recognize this?
})(window || module && module.exports || this)
