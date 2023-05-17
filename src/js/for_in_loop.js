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
         for(let key in alien)
         {
            console.log(key, ': ', alien[key]);

         }
 } 
 object_complex();