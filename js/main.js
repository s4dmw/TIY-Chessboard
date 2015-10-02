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
  var gameCounter = 0
  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [[6, 3, 4, 3], [0, 6, 2, 5]
    // TODO: Fill me in!

    // game.applyMove({from:{rank: 6, file: 3}, to:{rank: 4, file: 3}});

    /* possible structure [from{ , }, to{ , }]
    */
  ]; // END moves

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
      board = initial();
      gameCounter = 0;
      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
//based on the current move/counter call the applyMove function with the arguments
// from and to for the next move in the moves array
// if the game is at the last move, dont attempt advance the game any further
// increase the game counter by one
      var move = moves[gameCounter]
      // console.log(move);
      game.applyMove(move[0], move[1], move[2], move[3]);
      gameCounter ++

      return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
//based on the current move/counter call the applyMove function with the arguments
// from and to for the previous move in the moves array
// if the game is at the start (game counter = 0), dont step back any further
// decrease the game counter by one
    gameCounter --;
    var move = moves[gameCounter];
    game.applyMove(move[2], move[3], move[0], move[1]);

      return this;
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
//move from the current move/counter to the end of the game
//loop through the next function until the game counter has reached the
//last move (moves.length)

      return this;
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
          bullet += (board[rank][file] || ' ') + '|';
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
    applyMove: function(fromRank, fromFile, toRank, toFile){
//take the from and to arguments and apply them to the board
//remove the piece in "from" spot and add it to the "to" spot
    // console.log("applyMove tracer");
    // console.log(fromRank, fromFile, toRank, toFile);
    // console.log("applyMove tracer 2");

    board[toRank][toFile] = board[fromRank][fromFile];
    board[fromRank][fromFile] = null;


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
