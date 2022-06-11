//Question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

for (var i = 0; i < pets.length; i++) {
  if (pets[i].age >= 4.0) {
    console.log(pets[i].type);
  }
}

//Question 2

function booleanValue(argument) {
  if (argument === false || argument === true) {
    console.log(argument);
  } else if (argument !== Boolean) {
    console.log("Please pass a boolean value in");
  }
}

booleanValue(true);

//Question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");

function changeHeading() {
  heading.style.color = "blue";
  heading.innerHTML = "Updated heading";
}

button.onclick = changeHeading;
