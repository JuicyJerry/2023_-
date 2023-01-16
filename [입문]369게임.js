function solution(order) {
  let arr = [...String(order)].map((el) => Number(el));
  return arr.reduce((a, c) => c % 3 === 0 && c !== 0 ? a += 1 : a += 0, 0);
}

// 다른 풀이
function solution(order) {
  return [...order.toString().matchAll(/[3|6|9]/g)].length;
}