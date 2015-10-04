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
  update.view();// display the intial state of the board

 //load an opening based on the selection for the drop down menu
  $("#game").change(function(){
    // console.log("selected: " + this.value);
    game.moves(this.value);
    // console.log(gameSelection);

  });

  $("#next").on('click', function(){
    // console.log("clicked next move button");
    game.next();
    // console.log(game.tracer());
    update.view();
  });

  // Controller for "previous move"...
  $("#back").on('click', function(){
    // console.log("clicked on the prev move button");
    game.prev();
    // console.log(game.tracer());
    update.view();
  });

  // Controller for "fast-forward"...
  $("#end").on('click', function(){
    // console.log("clicked on the last move button");
    game.end();
    // console.log(game.tracer());
    update.view();
  });

  // Controller for "rewind"...
  $("#reset").on('click', function(){
    // console.log("clicked on the reset button");
    game.reset();
    // console.log(game.tracer());
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
