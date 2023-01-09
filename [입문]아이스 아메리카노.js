function solution(money) {
  let answer = [];
  let cnt = 0;
  
  while (true) {
      if (money < 5500) break;
      money -= 5500;
      cnt += 1;
  }
  answer = [cnt, money];
  return answer;
}