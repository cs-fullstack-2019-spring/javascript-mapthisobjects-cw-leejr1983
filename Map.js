// MAP
//
// Use .map to create a new array of objects where each object has a
// property for petnumber and pettype based on the elements in the array.
// Print the new array of objects.
// let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects

main()

function main(){


    let petName = ["dog", "cat", "pig", "hamster"];

    pet_objects = petName.map(function (petnumber,pettype) {

        let newObj = {};
        newObj.ndx = pettype
        newObj.val = petnumber

        return newObj

    })

console.log(pet_objects)

    }

