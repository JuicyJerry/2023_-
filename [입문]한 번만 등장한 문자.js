function solution(s) {
  let obj = {};
  [...s].forEach((el) => {
      if (obj[el]) obj[el]++;
      else obj[el] = 1; 
  });
  let ans = '';
  console.log(obj);
  let tt = Object.keys(obj);
  let t = Object.values(obj).sort((a, b) => a - b).forEach((el, idx) => {
      // console.log(el);
      if (el === 1) ans += tt[idx];
  })
  return ans;
}