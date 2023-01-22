function solution(n) {
  return [...String(n)].map((el) => parseInt(el)).reduce((a, c) => a + c, 0);
}