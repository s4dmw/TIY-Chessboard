var highlightIndex;

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
  var gameCounter = 0;

  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
   //trying use moves.json to get the moves


//leaving Catalan moves in as default so you dont have to run browser-sync
   var moves = [
     {from:{rank: 6, file: 3}, to:{rank: 4, file: 3}},
     {from:{rank: 0, file: 6}, to:{rank: 2, file: 5}},
     {from:{rank: 6, file: 2}, to:{rank: 4, file: 2}},
     {from:{rank: 1, file: 4}, to:{rank: 2, file: 4}},
     {from:{rank: 6, file: 6}, to:{rank: 5, file: 6}},
     {from:{rank: 1, file: 3}, to:{rank: 3, file: 3}},
     {from:{rank: 7, file: 5}, to:{rank: 6, file: 6}},
     {from:{rank: 0, file: 5}, to:{rank: 1, file: 4}},
     {from:{rank: 7, file: 6}, to:{rank: 5, file: 5}}
   ]; //end moves


  // You don't need to understand `globals` yet...
  var game = globals.game = {


    /**grab the moves from games.json based on the menu selction
    */
    moves: function(gameSelection){
      $.ajax("apis/"+gameSelection+"/moves.json").then(function(){
       moves = arguments[0].moves});
    }, // end moves function

    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    }, //end board function

    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();
      gameCounter = 0;
      return this;
    }, //end reset function

    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
     //based on the current move/counter call the applyMove function with the arguments
     // from and to for the next move in the moves array
     // if the game is at the last move, dont attempt advance the game any further
     // increase the game counter by one

    next: function(){
      if (gameCounter < moves.length){
        var move = moves[gameCounter]
        game.applyMove(move.from.rank, move.from.file, move.to.rank, move.to.file);
        gameCounter ++
      };
      return this;
    }, // end next function

    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
     //based on the current move/counter call the applyMove function with the arguments
     // from and to for the previous move in the moves array
     // if the game is at the start (game counter = 0), dont step back any further
     // decrease the game counter by one

    prev: function(){
    if (gameCounter > 0){
      gameCounter --;
      var move = moves[gameCounter];
      game.applyMove(move.to.rank, move.to.file, move.from.rank, move.from.file);
    };
      return this;
    }, //end prev function

    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
     //move from the current move/counter to the end of the game
     //loop through the next function until the game counter has reached the
     //last move (moves.length)

    end: function(){
      while(gameCounter < moves.length){
        game.next();
      };
      return this;
    }, //end end function...hehe

    

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
          bullet += (board[rank][file] || ' ') + '|';
        }
        bullet += '\n';
      }
      return bullet;
  }, // tracer function

    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     */
     //take the from and to arguments and apply them to the board
     //remove the piece in "from" spot and add it to the "to" spot

    applyMove: function(fromRank, fromFile, toRank, toFile){


    board[toRank][toFile] = board[fromRank][fromFile];
    board[fromRank][fromFile] = null;

    //asign the index of the move so view-helpers can highlight the spot
    // yes it's convoluted
    highlightIndex = toRank*8+toFile;

    } // END applyMove
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
