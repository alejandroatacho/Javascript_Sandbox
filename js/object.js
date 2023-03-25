function object_manual() {
    let alien = {};
    alien[1] = "max";
    alien[2] = "john";
    alien[3] = "jane";
    console.log(alien);
}
function object_manual2()
{
    let alien = {
        name:'Hinamizawa',
        tech:'JS',
        age: 20,
        address: {
            city: 'Kolkata',
            state: 'WB',
            country: 'India'
        },
        skills: ['HTML', 'CSS', 'JS', 'PHP', 'Python'],
        isMarried: false
        };
        console.log(alien);
    }
    
    (function() {
        object_manual();
        object_manual2();
        })();