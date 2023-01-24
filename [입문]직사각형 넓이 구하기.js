function solution(dots) {
    let rowArr = dots.map((el) => el[0]);
    let columnArr = dots.map((el) => el[1]);
    
    let rMax = Math.max(...rowArr);    
    let rMin = Math.min(...rowArr);    
    let width = rMax - rMin;
    
    let cMax = Math.max(...columnArr);    
    let cMin = Math.min(...columnArr);    
    let height = cMax - cMin;
    
    let area = width * height;
    return area < 0 ? area *= -1 : area *= 1;
}