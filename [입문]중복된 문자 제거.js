function solution(my_string) {
  let ans = [];
  for (let i of my_string.split('')) {
      if (ans.indexOf(i) === -1) ans.push(i);
  }
  return ans.join('');
}