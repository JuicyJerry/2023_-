function solution(quiz) {
  let total = [];
  let answer;
  quiz.forEach((el, i) => {
      let t = el.split(' ');
      answer = Number(t[0]);
      for (let i = 1; i < t.length; i += 2) {
          
          if (t[i] === '+') answer += Number(t[i + 1]);
          else if (t[i] === '-') answer -= Number(t[i + 1]);
          
          if ('=' === t[i]) {
              if (answer === Number(t[i + 1])) total.push('O');
              else if(answer !== Number(t[i + 1])) total.push('X');                
          }
      }
  })
  return total;
}