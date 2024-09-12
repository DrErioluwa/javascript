//object (key: value)
const person = {name: "Shola"}
// console.log(person)

// Array
const myArray = [{name: "Shola"}, "Obi", 29, true, undefined, null, [{age: 22}]]
// console.log(Array.isArray(myArray));
// console.log(typeof(myArray));

// console.log(myArray.length);

// console.log(myArray[1]);

const myData = {
    name: "John",
    age: 21,
    cars: [
        {name:"Ford", models:["fiesta", "focus", "mustang"]},
        {name: "BMW", models:["320", "x3", "x5"]},
        {name:"Tesla", models:["500", "panda"]},
    ]
}

// console.log(myData.name);
// console.log(myData.age);
// console.log(myData.cars)

// myData.cars.forEach(e => {
//     console.log(e.name);
// }) 


// myData.cars.forEach(e => {
//     e.models.forEach(i => {
//         console.log(i);
//     })
// })

myData.cars.forEach(e => {
    console.log(e.models[0]);
})
