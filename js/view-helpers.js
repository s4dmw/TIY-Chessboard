(function(globals){ // That damn IIFE again!
// Your code BELOW here...
var update = globals.update = {
  view: function(){

    // Because the game board only corresponds to the `tbody` element...
    var $chessboard = $("tbody");
    $('td').removeClass(); //clears the board so it can be re-populated
    // console.log("view tracer");
    // console.log($chessboard);
    // console.log($chessboard);
    // I always start variable names with `$` when they reference `jQuery.Collection` values
    var gameboard = game.board();

    // You could also use nested `for` loops, but this is better...
    jQuery(gameboard).each(function(rank, row){
      jQuery(row).each(function(file, piece){
        // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
        var $square = $chessboard.find('tr').eq(rank).find('td').eq(file);
        // console.log($square.get(), rank, file, piece);
        // Use the log, Luke!
        // $square.text(piece)
        if (piece){
          // console.log(rank, file, piece);
          $square.addClass(piece); //puts the pieces in their squares
        };
      });
    });
  }
};
// Don't go breaking my IIFE...
})(window || module && module.exports || this);
