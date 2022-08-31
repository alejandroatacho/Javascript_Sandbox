var answer;
// const p3 = document.getElementById("uniqueID1").value;
// const p4 = document.getElementById("uniqueID2").value;
// console.log (p3 + p4);

function myFunction(p5,p6) {
    // p5 = window.prompt("Put in a value");
    // p6 = window.prompt("Put in a 2nd value");
   
    let p5 = document.querySelector("uniqueID1").value;
    let p6 = document.querySelector("uniqueID2").value;
    // console.log(p3 + "and" + p4);
    // answer = p3 * p4
    // return answer
    return p5 + p6;    
}

document.getElementById("magic").innerHTML= myFunction(p5,p6); 

// document.getElementById("magic").innerHTML = myFunction(p3,p4); 