function solution(babbling) {
  return babbling
  .map((_) => _.replace(/aya|ye|woo|ma/g, '')).filter((e) => e = !e).length;
}  
