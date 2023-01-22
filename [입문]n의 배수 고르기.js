function solution(n, numlist) {
  let els = numlist.filter((el) => el % n === 0);
  return els;
}