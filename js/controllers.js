(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
   * 2. What `SELECTOR` will get the element involved in the interaction?
   * 3. What `CALLBACK` should be run when the interaction happens?
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
   */
  // document.querySelector(SELECTOR)
  //   .addEventListener(TYPE, CALLBACK);
  // // AKA
  // jQuery(SELECTOR).on(TYPE, CALLBACK);
  // // Where CALLBACK is...
  // function CALLBACK (EVENT){
  //   // Do something with Models and Views...
  //   // Maybe do something with EVENT...?
  // }


  // Controller for "next move"...
  $("#next").on('click', function(){
    // console.log("clicked next move button");
    game.next();
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  $("#back").on('click', function(){
    // console.log("clicked on the prev move button");
    game.prev();
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  $("#end").on('click', function(){
    // console.log("clicked on the last move button");
    game.end();
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "rewind"...
  $("#reset").on('click', function(){
    // console.log("clicked on the reset button");
    game.reset();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  //controller for "play/pause"
  $("#play").on('click', function(){
    console.log("clicked on the play/pause button");
  });


// Am I supposed to recognize this?
})(window || module && module.exports || this)
