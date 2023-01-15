function solution(my_string) {
  let t = Array.from(my_string.replace(/[a-z]/gi, '')).map((el) => Number(el)).reduce((acc, cur) => acc + cur, 0);
  return t;
}