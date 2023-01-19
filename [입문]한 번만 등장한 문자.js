function solution(s) {
  s = [...s].sort();
  let obj = {};
  s.forEach((el) => {
      if (obj[el]) obj[el]++;
      else obj[el] = 1;
  });
  
  let ans = '';
  let temp = Object.keys(obj);
  Object.values(obj).forEach((el, idx) => {
      if (el === 1) ans += temp[idx];
  })
  return ans;
}

// 다른 풀이
function solution(s) {
  let res = [];
  for (let t of s) if (s.indexOf(t) === s.lastIndexOf(t)) res.push(t);
  return res.sort().join('');
}