function solution(number) {
  let answer = 0;

  function combination(cur, start) {
      if (cur.length === 3) {
          answer += cur.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
          return;
      }
      for (let i = start; i < number.length; i++) {
          console.log(i, number[i]);
          combination([...cur, number[i]], i + 1);
      }
  }
  combination([], 0);
  return answer;
}
