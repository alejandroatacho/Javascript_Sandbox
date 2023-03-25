function for_1(){
    
for (let i = 1; i <= 100; i++)
{
    if (i%3===0)
    {
        console.log(i)
    }
}
}
function while_1()
{   let num = 564782
    while (num>0) {
        console.log(num % 10)
        num = parseInt(num / 10)
    }
}
if (1 == 1) {
    for_1()
    while_1()
}
