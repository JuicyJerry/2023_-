function solution(array) {
  let target =  array.slice().sort((a, b) => b - a)[0];
  let answer;
  
  try {
      array.forEach((el, idx) => {
          if (el == target) {
              throw answer = [el, idx];
              // throw [el, idx]; undefined 리턴
          }
      })
  } catch(e) {
      console.log(e);
  }
  return answer;
}

//  다른 큰 수 찾기
function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}




