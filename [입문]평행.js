function solution(dots) {
  let arr = [];
  
  for (let y = 0; y < dots.length; y++) {
      for (let x = y + 1; x < dots.length; x++) {
          const inclination = (dots[y][1] - dots[x][1])  / (dots[y][0] - dots[x][0]);
          if (arr.includes(inclination)) return 1;
          arr.push(inclination);
      }
  }
  return 0;    
}