(function(globals){ //IIFE y0!

  /** the purpose of this file is to populate the "choose and opening" menu
  * with the games from /apis/games.json...here goes nuffin
  */

  // console.log("menu.js loaded and ready for action"); //tracer to make sure it's loaded

  //need to get a list of games from games.json
  $.ajax("apis/games.json").then(function(){
    // console.log("ajax tracer");
    games = arguments[0];
    // console.log(games[0]); //tracer
    // console.log(games[1]); //tracer
    $.each(games, function(value){
      // console.log(games[value].id); //tracer
      // console.log(games[value].name); //tracer
       $("select#game").append('<option value='+games[value].id+'>'+games[value].name+'</option>');
    });
  });




  // $("select#game").append('<option value='+option1+'>Catalan Opening: Closed Variation</option>');
  // $("select#game").append('<option value='+option2+'>Stonewall Attack</option>');






})(window || module && module.exports || this); //end that IIFFE tho
