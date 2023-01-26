function solution(board) {
  let arr = [];
  board.forEach((e, i) => e.forEach((t, idx) => {
      if (t === 1) arr.push([i, idx]);
  }))
  
  arr.forEach((e) => {
      const y = e[0];
      const x = e[1];
      
      try {
          board[y - 1].splice(x, 1, 1);
      } catch {}

      try {
          board[y - 1].splice(x + 1, 1, 1);
      } catch {}

      try {
          board[y].splice(x + 1, 1, 1);
      } catch {}

      try {
          board[y + 1][x + 1] = 1;
      } catch {}

      try {
          board[y + 1][x] = 1;
      } catch {}

      try {
          board[y + 1][x - 1] = 1;
      } catch {}

      try {
          board[y][x - 1] = 1;
      } catch {}

      try {
          board[y - 1][x - 1] = 1;
      } catch {}
  })
  
  let cnt = 0;
  for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board.length; x++) {
          if (board[y][x] === 0) cnt++;
      }
  }
  return cnt;    
}