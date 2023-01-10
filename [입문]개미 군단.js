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
