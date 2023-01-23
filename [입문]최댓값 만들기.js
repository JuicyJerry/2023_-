function solution(numbers) {
    let arr = [];
    for (let j = 0; j < numbers.length; j++) {
        for (let i = j + 1; i < numbers.length; i++) {
            arr.push(numbers[j] * numbers[i]);
        }
    }
    return arr.sort((a, b) => b - a)[0];    
}