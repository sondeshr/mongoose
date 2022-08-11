const Person = require("./models/person");


Person.insertMany([{
    name:"ekram selmi ",
    age:27,
    favoriteFoods:["favFoodOne","favFoodTwo","favFoodThree"]
}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});

Person.create([
    {
        name:"Person 1",
        age:20,
        favoriteFoods:["favFoodFour","favFoodFive"]
    },
    {
        name:"Person 2",
        age:40,
        favoriteFoods:["favFoodSix","favFoodSeven"]
    },
    {
      
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});

Person.find().then(remainingPerson => {console.log(remainingPerson)});


let id = "123";
Person.findById(id, function (err, docs) {console.log(docs)});

Person.findOneAndUpdate({"name":"ekram selmi "},{$set:{age:"28"}})
.then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});

let id = "123"; 
Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});

Person.remove({name:"ekram selmi"})
.then(removedPersons => {console.log("Removed Person :",removedPersons)});
