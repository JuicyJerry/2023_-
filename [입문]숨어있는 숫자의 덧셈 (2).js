function solution(my_string) {
  let arr = [...my_string];
  let total = [];
  let t = '';
  
  for (let i = 0; i < arr.length; i++) {
      if (!isNaN(Number(arr[i]))) {
          t += arr[i];
          
          if (isNaN(Number(arr[i + 1]))) {
              total.push(t);
              t = '';
          }
      }
  }
  return total.reduce((a, c) => a + Number(c), 0);
}

// 다른 풀이
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// 다른 풀이
// isInteger를 활용할 수 있다