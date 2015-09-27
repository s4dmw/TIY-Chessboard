(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */

   //short hand of opening moves...will start with a longer hand version in an object
  // var moves = [d4, nf6, e4, e6, g3, d5, bg2, be7]; // END moves
    var moves = [["wp", "d2", "d4"], ["bn", "g8", "f6"], ["wp", "c2", "c4"], ["bp", "e7", "e6"],
  ["wp", "g2", "g3"], ["bp", "d7", "d5"], ["wb", "f1", "g2"], ["bb", "f8", "e7"], ["wn", "h7", "f3"]];
    var moveCounter = 0; //counter to keep track of moves
    var move = []; //place holder for specific moves
    var piece = ""; //place holder for game pieces
    var moveFrom = ""; //place holder for current piece location
    var moveTo = ""; //place holder for next piece location


  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      // console.log("reset function called");
      while(moveCounter > 0){
        game.prev();
      };
      // board = initial();
      return ;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // console.log("next function called"); //tracer bullet
      // console.log("initial move count " + moveCounter);
      if (moveCounter + 1 > moves.length){
        return;
      }
      //get next move from array of moves
      // console.log(moves[moveCounter]); //tracer bullet
      // console.log("move counter = ", moveCounter); //tracer bullet
      move = moves[moveCounter];
      piece = move[0];
      moveFrom = "#" + move[1];
      moveTo = "#" + move[2];
      // console.log(piece, moveFrom, moveTo); //tracer bullet
      //send next move to applyMove function
      game.applyMove(piece, moveFrom, moveTo);
      moveCounter++;
      // console.log("final move counter " + moveCounter);
      //increase moveCounter by 1


      // return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      // console.log("prev function called");
      // console.log("intial " + moveCounter);
      //if the move counter is not back to zero, reverse the move
      if(moveCounter > 0){
        //decrease moveCounter by 1 to call the previous move
        moveCounter--
        //reverse move order
        move = moves[moveCounter];
        piece = move[0];
        moveFrom = "#" + move[2];
        moveTo = "#" + move[1];
        //send the move to applyMove function
        game.applyMove(piece, moveFrom, moveTo);
        // console.log("final " + moveCounter);
      };
      return;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      // console.log("end function called");
      //run game.next until you reach the last move
      while(moveCounter < moves.length){
        game.next();
      };
      return;
    },
    //step through the moves to the end. will use end function but needs a delay between moves
    //to show all the moves. the pause portion will get a little tricky.
    play: function(){ //still cant get the moves to slow down
      while(moveCounter < moves.length){
        window.setTimeout(game.next(),2000);
      };
      return;
    },

    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += board[rank][file] || ' |';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(piece, from, to){
      // console.log("applyMove function called"); //tracer bullet
      // console.log(piece);
      // console.log(from);
      // console.log(to);
      $(".highlight").removeClass("highlight");
      //remove piece from the "from" spot
      $(from).removeClass();
      //add piece to the "to" spot
      $(to).addClass(piece);
      //add class "highlight" to the to and from spaces
      $(from).addClass("highlight");
      $(to).addClass("highlight")
    }, // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial

// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
