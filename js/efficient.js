const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function hello(user) {
      return 'Hello ' + user + '!';
  }
  
  readline.question("What's your name? ", (name) => {
      console.log(hello(name));
      readline.close();
  });
  