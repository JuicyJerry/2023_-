function solution(s) {
  let ans = 0;
  let arr = [];
  let t = s.split(' ');
  t.forEach((el, idx) => {
          if (t[idx + 1] != 'Z' && el != 'Z') arr.push(el); 
      }
  );
 return arr.reduce((acc, cur) => acc + parseInt(cur), 0);
}