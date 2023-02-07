function solution(common) {
  let answer = 0;
  let len = common.length;
  let diff = common[1] - common[0]; 
  let divide = common[1] / common[0]; 
  if (common[1] - common[0] === common[2] - common[1]) {
      // 등차수열
      return common[len - 1] + diff;
  } else {
      // 등비수열
      // if (common[1] - common[0] !== common[2] - common[1]) {
      return common[len - 1] * divide;
      // return common[len - 1] * divide;
  }
  
}