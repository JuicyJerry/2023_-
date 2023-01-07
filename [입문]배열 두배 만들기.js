function solution(numbers) {
  let answer = numbers.map((el) => el * 2);
  // let answer = numbers.map((el) => doubling(el));
  return answer;
}

function doubling(num) {
  return num *= 2;
}