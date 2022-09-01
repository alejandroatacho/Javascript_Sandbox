function myFunction(){

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    id: '12345'
    };
    let person2 = {
        name: undefined,
        age: undefined,
        city: undefined,
        id: undefined
    };
document.getElementById('magic').innerHTML = person.name + " is " +
    person.age + " years old and lives in " + person.city + " with the id:"
        + person.id;
}