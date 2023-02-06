function solution(chicken) {
  let freeChicken = Math.floor(chicken / 10);
  let left = Math.floor(freeChicken / 10);
  let freeChickenCoupon = Math.floor(left / 10);
  let freeLeft = Math.floor(freeChickenCoupon);
  let answer = freeChickenCoupon >= 1 ? freeChicken + left + freeChickenCoupon + freeLeft : freeChicken + left;
  return answer;
}