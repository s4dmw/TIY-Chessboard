(function(globals){ //IIFE y0!

  /** the purpose of this file is to populate the "choose and opening" menu
  * with the games from /apis/games.json...here goes nuffin
  */

  // console.log("menu.js loaded and ready for action"); //tracer to make sure it's loaded

  $("select#game").append('<option value="catalan">Catalan Opening: Closed Variation</option>');
  $("select#game").append('<option value="stonewall">Stonewall Attack</option>');




})(window || module && module.exports || this); //end that IIFFE tho
