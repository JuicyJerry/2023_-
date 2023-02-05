function solution(numlist, n) {
  // n과 가까운 숫자순대로 배치
  // 거리의 숫자가 같을 경우, 큰 숫자가 먼저 배치
  let answer = [];
  numlist.forEach((e, i) => {
      let diff = Math.abs(e - n);
      let arr = [];
      answer.push([e, diff]);
  })
  answer.sort((a, b) =>  a[1] - b[1] || b[0] - a[0]);
  return answer.map((e) => e.splice(0, 1)[0]);
}