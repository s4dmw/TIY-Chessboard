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
  it("should be able to move pieces", function(){
    chai.expect(game.applyMove).to.exist;
    chai.expect(game.applyMove).to.be.a('function');
    chai.expect(game.applyMove()).to.be.an('undefined');
    game.applyMove({rank: 6, file: 3}, {rank: 4, file: 3});
    var board = game.board();
    chai.expect(board[6][3]).to.be.equal(null);
    chai.expect(board[4][3]).to.be.equal('p');
  });

//tests for game.next
  it("should be able to advance to the next move", function(){
    chai.expect(game.next).to.exist;
    chai.expect(game.next).to.be.a('function');
    chai.expect(game.next()).to.be.an('object');
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
