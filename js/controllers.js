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
    };
  });


  // Controller for "next move"...
  $("#next").on('click', function(){
    game.next();
    update.view();
  });


  // Controller for "previous move"...
  $("#back").on('click', function(){
    game.prev();
    update.view();
  });


  // Controller for "fast-forward"...
  $("#end").on('click', function(){
    game.end();
    update.view();
  });


  // Controller for "rewind"...
  $("#reset").on('click', function(){
    game.reset();
    update.view();
  });


  //controller for "play/pause"
  var playButton = true;
  $("#play").on('click', function(){
    if (playButton) {
      // console.log("clicked play");
      game.play(true);
      playButton = false;
      return;
    };
    // console.log("clicked pause");
    game.play(false);
    playButton = true;
  })


// Am I supposed to recognize this?
})(window || module && module.exports || this)
