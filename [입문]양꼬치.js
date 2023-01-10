function solution(n, k) {
    let food = 12000;
    let beverage = 2000;
    let total = food * n + beverage * k;
    let beverageService = Math.trunc(n / 10);
    
    if (beverageService >= 1) total = total - beverage * beverageService;
    return total;
}