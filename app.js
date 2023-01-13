const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});



const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//   rating: 10,
//   review: "Damn!"
// });

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great Fruit!"
});

const strawberry = new Fruit({
  name: "Strawberry",
  score: 10,
  review: "Amazing Fruit!"
});

// strawberry.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

// person.save();


/**const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird Texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the fruits to fruitsDB");
  }
});*/ 


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {
          
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
    }
  }
);

Person.updateOne({_id: "6333a8d727c718ac0ede338b"}, {favouriteFruit: strawberry}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Succesfully updated the document.");
  }
});

Fruit.deleteOne({_id: "63373e9f694d33868dae22cc"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully deleted the document.");
  }
});

