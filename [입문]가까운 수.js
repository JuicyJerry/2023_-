function solution(array, n) {
  let min = 0;
  let arr = [];
  array.sort((a, b) => a - b).map((el, idx) => {
      if (el < n) arr[idx] = n - el;
      else arr[idx] = el - n;
  })
  
  min = Math.min(...arr);
  return array[arr.indexOf(min)];
}

// 다른 풀이
function solution(array, n) {
  return array.reduce((a, c) => 
  Math.abs(a - c) < Math.abs(c - a) 
  ? a : Math.abs(c - a) > Math.abs(a - c) 
  ? Math.min(a, c) : c);
}