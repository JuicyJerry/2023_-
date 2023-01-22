function solution(array) {
  array = array.map((el) => String(el)).join('').match(/[7]/g);
  return array === null ? 0 : array.length;
}