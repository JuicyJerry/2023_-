function solution(my_string) {
  let el = my_string.split(" ");
  // let el1 = my_string.match(/\S/g); // 왜 안 될까 ㅠㅠ
  let ans = Number(el[0]);
  let len = el.length;
  
  for (let i = 1; i < len; i+=2) {
      if (el[i] === '+') {
          ans += parseInt(el[i + 1]);
      } else if (el[i] === '-') {
          ans -= parseInt(el[i + 1]);
      }
  }
  return ans;
}