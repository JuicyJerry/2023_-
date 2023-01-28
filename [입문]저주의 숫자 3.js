function solution(n) {
  // 3의 배수, 숫자 3 사용하지 않음
  let arr = new Array(2).fill(0);
  for (let i = 0; i < 100; i++) {
      arr[i] = new Array(2).fill(i + 1);
  }
  
  let next = 0;
  for (let i = 0; i < 187; i++) {
      if (i % 3 !== 0 && String(i).indexOf(3) == -1) {
          arr[next][1] = i;
          next++;
      }
      if (next > 100) break;
  }
  return arr[n - 1][1];
}