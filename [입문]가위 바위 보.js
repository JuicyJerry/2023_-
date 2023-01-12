function solution(rsp) {
  let obj = {'2': '0', '0': '5', '5': '2'};
  return [...rsp].reduce((acc, cur) => acc += obj[cur], '');
}