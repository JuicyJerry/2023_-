function solution(n) {
  let total = 0;
  for (let t = 2; t <= n; t+=2) total += t;
  return total;
}