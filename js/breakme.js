var num = 5;
var num1 = 10;
const fake_num = "1";
const fake_num2 = "1";

function numChecker() {
    const fake = fake_num + fake_num2;
    const real = num + num1;
    var typeOfReal = typeof(real);
    var typeOfFake = typeof(fake);


    console.log(fake + " " + typeOfFake)
    console.log(real + " " + typeOfReal)
}
numChecker();