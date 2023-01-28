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

// 다른 풀이
function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num) if (num%3!==0 && !(''+num).includes('3')) arr.push(num);
  console.log(arr);
  return arr.pop();
}