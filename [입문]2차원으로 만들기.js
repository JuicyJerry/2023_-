function solution(num_list, n) {
  const answer = [];
  let arr = [];
  
  for (let t of num_list) {
      arr.push(t)
      
      if (arr.length >= n) {
          answer.push(arr); 
          arr = [];
      }
  }
  return answer;
}