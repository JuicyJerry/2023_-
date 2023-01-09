function solution(my_string, n) {
  var answer = '';
  my_string.split('').forEach((el) => {
      for (let i = 0; i < n; i++) answer += el;
  })
  return answer;
}

/*
  function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
  }
*/