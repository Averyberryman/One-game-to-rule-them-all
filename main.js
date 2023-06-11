function createPlayer(id, token) {
    return {
      id: id,
      token: token,
      wins: 0
    };
  }

  
var player1 = createPlayer('one', '🗡');  // Aragorn
var player2 = createPlayer('two', '👁');  // Sauron

