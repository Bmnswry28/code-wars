function solve(n, k) {
    let arr = Array.from({length: n}, (_, i) => i);
  
    for (let i = 0; i < n; i++) {
      let start = i;
      let end = n - 1;
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
  
    return arr.indexOf(k);
  }