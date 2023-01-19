function solution(my_string, num1, num2) {
  let str = [...my_string];
  str.splice(num1, 1, my_string[num2]);
  str.splice(num2, 1, my_string[num1]);
  return str.join('');
}

// 다른 풀이
function solution(my_string, num1, num2) {
  let result = [...my_string];
  [result[num1], result[num2]] = [result[num2], result[num1]];
  return result.join('');
}