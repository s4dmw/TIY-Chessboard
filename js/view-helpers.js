// TODO: Should probably live in `js/view-helpers.js` one day...
;(function(globals){ // That damn IIFE again!
// Your code BELOW here...

  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  // TODO: Don't use COPY-PASTA!
  var gameboard = [
    [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
    [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
    [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
  ];

  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);
      // Use the log, Luke!

      if (piece) $square.text(piece); // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this);
