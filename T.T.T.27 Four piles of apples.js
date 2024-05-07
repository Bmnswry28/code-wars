function fourPiles(n, y) {
    // Try all possible values of x from 1 to n
    for (let x = 1; x <= n; x++) {
      const pile1 = x + y;
      const pile2 = x - y;
      const pile3 = x * y;
      const pile4 = Math.floor(x / y); // Integer division
  
      // Check if the sum of the piles equals n and all piles are positive
      if (pile1 + pile2 + pile3 + pile4 === n && [pile1, pile2, pile3, pile4].every(pile => pile >= 1)) {
        return [pile1, pile2, pile3, pile4];
      }
    }
  
    // If no solution is found, return an empty list
    return [];
  }
  
  // Tests
  console.log(fourPiles(48, 3)); // Output: [12, 6, 27, 3]
  console.log(fourPiles(100, 4)); // Output: [20, 12, 64, 4]
  console.log(fourPiles(25, 4)); // Output: []
  console.log(fourPiles(24, 4)); // Output: []