// var moves = [{from:{rank:6, file:3}, to:{rank: 4, file: 3}}];


(function() {

//general tests
  it('it should have a game in the window', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).is.an("object");
    chai.expect(game.board).to.exist;
    chai.expect(game.board).to.be.a('function');
  });

//tests for the game.board function
  it('it should give me an array as the board', function(){
    chai.expect(game.board()).to.be.an('array');
    chai.expect(game.board()).to.have.length(8);
    var board = game.board();
    chai.expect(board[0]).to.be.an('array');
    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');
  });

// tests for game.reset
  it('it should reset the game', function(){
    chai.expect(game.reset).to.exist;
    chai.expect(game.reset).to.be.a('function');
  });

//tests for game.applyMove
//once function is written, i can run these tests
  it("should be able to move a piece", function(){
    chai.expect(game.applyMove).to.exist;
    chai.expect(game.applyMove).to.be.a('function');
    // chai.expect(game.applyMove()).to.be.an('undefined');
    //check pre-condition
    game.reset() //intialize the board
    var board = game.board();
    chai.expect(board[6][3]).to.equal('p');
    chai.expect(board[4][3]).to.be.null;
    //action
    game.applyMove(6, 3, 4, 3);
    //post-condition
    var board = game.board();
    // console.log(game.tracer());
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');
  });

  it("should be able to move another piece", function(){
    //pre-condition - same as post of 1st move
    var board = game.board();
    chai.expect(board[2][5]).to.be.null;
    chai.expect(board[0][6]).to.be.equal('N');
    //action
    game.applyMove(0, 6, 2, 5);
    //post-condition - after 2nd move
    var board = game.board();
    chai.expect(board[0][6]).to.be.null;
    chai.expect(board[2][5]).to.be.equal('N');
  });

//tests for game.next
  it("should perform the first move", function(){
    chai.expect(game.next).to.exist;
    chai.expect(game.next).to.be.a('function');
    //pre-condition
    game.reset(); //intialize the board
    var board = game.board();
    chai.expect(board[6][3]).to.equal('p');
    chai.expect(board[4][3]).to.be.null;
    //action
    game.next();
    //post-condition
    var board = game.board();
    chai.expect(board[6][3]).to.be.null;
    chai.expect(board[4][3]).to.be.equal('p');
  });

  it("should perform the 2nd move", function(){
    //pre-condition
    game.reset();
    var board = game.board();
    chai.expect(board[2][5]).to.be.null;
    chai.expect(board[0][6]).to.be.equal('N');
    //action
    game.next();
    game.next();
    //post-condition
    var board = game.board();
    chai.expect(board[0][6]).to.be.null;
    chai.expect(board[2][5]).to.be.equal('N');
  });


//tests for game.previous
  it("should be able to return to the previous move", function(){
    chai.expect(game.prev).to.exist;
    chai.expect(game.prev).to.be.a('function');
    chai.expect(game.prev()).to.be.an('object');
  });


//tests for game.end
  it("should be able to advance to the end of the game", function(){
    chai.expect(game.end).to.exist;
    chai.expect(game.end).to.be.a('function');
    chai.expect(game.end()).to.be.an('object');
  });

//tests for the tracer function
  it("should send a representation of the board to the console", function(){
    chai.expect(game.tracer).to.exist;
    chai.expect(game.tracer).to.be.a('function');
    chai.expect(game.tracer()).to.be.an('string');
  });






})();
