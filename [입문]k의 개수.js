function solution(i, j, k) {
  let arr = [];
  for (let t = i; t <=j; t +=1) {
      if (String(t).length === 1)  arr.push(String(t));
      if (String(t).length > 1)  arr.push(...String(t).split(''));
  }
  arr = arr.filter((el) => el === String(k));
  return arr.length;
}