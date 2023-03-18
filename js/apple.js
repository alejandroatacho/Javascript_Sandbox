let num_holder = 5;
let num_holder2 = 10;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  rl.question('Where do you live ? ', function (country) {
    console.log(`${name}, is a citizen of ${country}`);
    rl.close();
  });
});

rl.on('close', function () {
    console.log('Have a great day!');
});
// var flag = true;
// let i = 0;
// function infinite_loop() {
//     while (flag == true) {
//         // console.log(magic_num);
//         i++;
//         console.log((magic_num * i) * (5 * 3) + " is the magic number");
//         // if (i >= 5) {
//         //     stop();
//         //     }  
//         if (i >= 5) {
//             flag = false;
//         }
//         else {
//             continue;
//         }
//     }
    
// }
// infinite_loop();
//     // let input = console.log(magic_num);
