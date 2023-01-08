function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i+=2) {
      if (i % 2 !== 0) answer.push(i);
  }
  return answer;
}