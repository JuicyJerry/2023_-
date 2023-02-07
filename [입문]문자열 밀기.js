function solution(A, B) {
  let cnt = 0;
  if (A === B) return 0;
  
  let temp = A;
  for (let x = 0; x < A.length; x++) {
      if (temp === B) {
          cnt = x;
          break;
      }
      temp = temp[A.length - 1] + temp.slice(0, A.length - 1);
  }
  return !!cnt ?  cnt : -1;
}