function solution(hp) {
  let general = 5;
  let solider = 3;
  let worker = 1;
  let number = 0;
  
  // first
  number += Math.floor(hp / general);
  hp = Math.ceil(hp % general);
  
  // second
  number += Math.floor(hp / solider);
  hp = Math.ceil(hp % solider);
  
  // last
  if (hp < 1) return number;
  number += Math.floor(hp / worker);
  
  return number;
}

/* 다른 사람 풀이 */
function solution(hp) {
  return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}


/* 다른 사람 풀이 */
function solution(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - (장군개미 * 5)) / 3);
  const 일개미 = hp - ((장군개미 * 5) + (병정개미 * 3));
  return 장군개미+병정개미+일개미;
}