// FILTER
//
// Use .filter to create an array of pet objects that only holds the hamsters.
//     let pets = [
//     {
//         name: 'Spot',
//         type: 'Hamster'
//     },
//     {
//         name: 'Harry',
//         type: 'Hamster'
//     },
//     {
//         name: 'Kitty',
//         type: 'Cat'
//     }
// ]
//
// let hamsters = []; // new array to hold objects

let pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
]
let hamsters = pets.filter (
    function (eachElement){
        return eachElement.type == 'Hamster'
    }
)
console.log (hamsters)

