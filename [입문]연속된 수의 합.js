function solution(num, total) {
    let start = 0;
    let test = new Array(num).fill(0).map((e, i) => i).reduce((a, c) => a + c, 0);
    
    while (test !== total) {
        if (test < total) start++;
        else start--;
        test = new Array(num).fill(0).map((e, i) => i + start).reduce((a, c) => a + c, 0);
    }
    return new Array(num).fill(0).map((e, i) => i + start);
}