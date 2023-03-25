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
 function object_complex() {
    let alien = {
        name:'Hinamizawa',
        tech:'JS',
        laptop:{
            cpu: 'i7',
            ram: '16GB',
            storage: '1TB'
            },
        }
        console.log(alien.laptop.cpu.length);
 }   
 function object_complex2() {
    let alien = {
        name:'Hinamizawa',
        tech:'JS',
        laptop:{
            cpu: 'i7',
            ram: '16GB',
            storage: '1TB'
            },
        }
        console.log(alien.laptop?.ram);
        // delete alien.laptop
 }   
    (function() {
        // object_manual();
        // object_manual2();
        object_complex();
        object_complex2();
        })();