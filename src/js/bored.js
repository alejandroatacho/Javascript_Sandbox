//function to contain all codes
function container() {
//strings;
let a = "a5222", b = "Crust";
//int;
let x = 7, y = 8, z = 9 ,num = 5 + 5;
  return { a, b, num, y, z, x };



}

const values = container();
const web = document.getElementById('activity');

function calculation() {
  while (values.a.length < values.y) {
    if (values.a.length >= 3) {
      answer = values.a, values.b + " hi " + values.num;
      console.log(answer);
      // console.log("size: " + values.string_container.length);
      web.innerHTML = answer;
      
      return 0;
    } else {
      values.a = "Verde";
      console.log(values.a, values.b + " hi " + values.num);
      console.log("Nope");
      return 1;
    }
  }
}

function switch_case() {
  
  switch (values.y) {
    case 7:
      console.log("7");
      break;
    case 8:
      console.log("8");
      break;
    case 9:
      console.log("9");
      break;
    default:
      console.log("Nope");
      break;
  }
}
if (true) {

calculation();
switch_case();

}
