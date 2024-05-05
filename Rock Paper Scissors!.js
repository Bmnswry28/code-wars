const rps = (p1, p2) => {
    const choices = ['rock', 'paper', 'scissors'];
    const beatMap = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
  
    const p1Choice = choices.indexOf(p1.toLowerCase());
    const p2Choice = choices.indexOf(p2.toLowerCase());
  
    if (p1Choice === p2Choice) {
      return 'Draw!';
    } else if (p1Choice === -1 || p2Choice === -1) {
      return 'Invalid input';
    } else if (beatMap[choices[p1Choice]] === choices[p2Choice]) {
      return 'Player 1 won!';
    } else {
      return 'Player 2 won!';
    }
  };