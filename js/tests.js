(function() {
  // the code here is executed once in its own scope

  // it('should totally fail', function(){
  //   chai.expect(false).equals(true);
  // })

  it('it should have a game in the window', function(){
    chai.expect(window.game).to.be.equal(game);
    chai.expect(game).is.an("object");
    // chai.expect(game.board).to.exist;
    // chai.expect(game.board).to.be.a('function');
    // chai.expect(game).to.have.keys(['next', 'board']);
  });

  it('it should give me an array as the board', function(){
    chai.expect(game.board()).to.be.an('array');
    chai.expect(game.board()).to.have.length(8);
    var board = game.board();
    chai.expect(board[0]).to.be.an('array');
    chai.expect(board[0][0]).to.be.a('string');
    chai.expect(board[0][0]).to.equal('R');
  });

  it("should be able to move pieces", function(){
    game.applyMove({rank: 6, file: 3}, {rank: 4, file: 3});
    var board = game.board();
    chai.expect(board[6][3]).to.be.equal(null);
    chai.expect(board[4][3]).to.be.equal('p');
  });

  it.skip("should be able to advance to the next move", function(){


  });



})();
