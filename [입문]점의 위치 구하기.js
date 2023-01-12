function solution(dot) {
  let sign = dot.reduce((acc, cur) => cur < 0 ? acc += 'm' : acc += 'p', '');
  let quadrant = {'pp': 1, 'mp' : 2, 'mm' : 3, 'pm' : 4};
  return quadrant[sign];
}