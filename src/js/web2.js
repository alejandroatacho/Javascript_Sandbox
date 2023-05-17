const output = document.getElementById('output');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');


function yes() {
    output.innerHTML = input1.value * input2.value;
    // if (output.innerHTML >= 50) {
    //     alert("You have a number higher then 50: " + output.innerHTML);
    // }
    // else {
    //     alert("You have a number lower then 50: " + output.innerHTML);
    // }

}