const div1 = document.querySelector('#home_button');
let i = 0;
div1.addEventListener('click', function() {
    console.log("You clicked the home button");
    i++;
    console.log(i);
    if (i >= 3) {
        div1.style.backgroundColor = "red";
        i += 1;
    } else {
        div1.style.backgroundColor = "blue";
        i = 0;
    }

});