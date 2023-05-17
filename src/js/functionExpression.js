const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function test(a, b) {
  return Number(a) + Number(b);
}

rl.question('Enter value 1: ', (a) => {
  rl.question('Enter value 2: ', (b) => {
    console.log("Your answer is: " + test(a, b));
    rl.close();
  });
});
