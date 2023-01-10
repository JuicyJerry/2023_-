function solution(my_string, letter) {
  return my_string.split('').filter((el) => el !== letter).join('');
}

/* 다른 풀이1 */
return my_string.split(letter).join('');

/* 다른 풀이2 */
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

/* 다른 풀이3 */
function solution(my_string, letter) {
  let regExp = new RegExp(letter, 'g');
  return my_string.replace(regExp, '');
}