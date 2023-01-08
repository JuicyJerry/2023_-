function solution(n) {
  let pieces = 6;
  while (true) {
      if (pieces % 6 === 0 && pieces % n == 0) return pieces / 6;
      pieces += 6;
  }
}