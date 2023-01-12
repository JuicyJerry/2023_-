function solution(numbers, direction) {
  let answer = [];
  if ('right' === direction) {
      let pop = numbers.pop();
      answer = numbers.splice(0, numbers.length);
      answer.unshift(pop);
  } else {
      answer = numbers.splice(1, numbers.length);
      let shift = numbers.shift();
      answer.push(shift);
  } 
  return answer;
}