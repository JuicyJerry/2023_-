const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    let n = Number(input[0]);
    let triangle = '';
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (i === n - 1) flag = false;
        for (let j = 0; j < i + 1; j++) {
            triangle += '*';
        }
        if (flag === false) break;
        triangle += '\n';
    }    
    console.log(triangle);
});

/*
  function solution(n) {
      for(let i = 1; i < n + 1; i++) {
          console.log('*'.repeat(i));
      }
  }
*/