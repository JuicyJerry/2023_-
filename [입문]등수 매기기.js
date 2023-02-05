function solution(score) {
  let avg = score.map((e) => e = e.reduce((a,c) => a + c, 0) / e.length);
  let sorted = avg.slice().sort((a, b) => b- a);
  return avg.map((e) => sorted.indexOf(e) + 1);
}