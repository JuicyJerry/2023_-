function solution(balls, share) {
  let p = (num) => {
      let total = BigInt(1);
      for (let  i = 1; i <= num; i++) total *= BigInt(i);
      return total;
  }
  const ballNum = p(balls);
  const shareNum = p(share);
  const diffNum = p(balls- share);
  const answer = ballNum / (diffNum * shareNum);
  return answer;
}