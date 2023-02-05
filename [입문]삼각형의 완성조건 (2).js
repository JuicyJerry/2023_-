function solution(sides) {
  // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

  // 주어진 두 변이 최대 길이의 변이 아닌 경우
  // 가장 긴 변(x)의 길이가 다른 두 변의 길이의 합보다 작은 경우

  // 주어진 두 변 중에 최대 길의 변이 있는 경우
  // 주어진 두 변 중 긴 변의 길이가 나머지 한 변의 길이와 나머지 한 변의 길이보다 작은 경우

  // x < side1 + side2
  // max(side) < x + min(side)
  // max(side) - min(side) < x < side1 + side2

  let maxNum = Math.max(...sides);
  let minNum = Math.min(...sides);
  let sum = sides.reduce((a, c) => a + c, 0);
  return sum - (maxNum - minNum) - 1; // 시작지점으로 개수를 새기 때문에 -1를 해준다
}