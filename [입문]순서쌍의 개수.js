function solution(n) {
  let cnt = 0;
  
  for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= n; i++) {
          if (j * i > n) break;
          if (j * i === n) cnt++;
      }
  }
  return cnt;
}