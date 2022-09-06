// body.append("Hello World");
const body = document.body;
const div = document.createElement("div");
// div.innerText = "Hello World";
div.innerHTML = "<h1><bold>Hello World</bold></h1>";
body.append(div);

