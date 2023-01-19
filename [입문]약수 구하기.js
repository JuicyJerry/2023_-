function solution(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
      if (n % i === 0) ans.push(i);
  }
  return ans;
}

// 다른 풀이
function solution(n) {
  return Array(n).fill(0).map((el, idx) => el + idx + 1).filter((el) => n % el === 0);
}