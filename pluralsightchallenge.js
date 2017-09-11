
// Starting with what I'm given...

const validInput1 = ["KittenService: CamelCaser", "CamelCaser: "];
const expectedOutput1 = "CamelCaser, KittenService";
const validInput2 = [
  "KittenService: ",
  "Leetmeme: Cyberportal",
  "Cyberportal: Ice",
  "CamelCaser: KittenService",
  "Fraudstream: Leetmeme",
  "Ice: "
];
const expectedOutput2 = "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream";
const invalidInput1 = [
  "KittenService: ",
  "Leetmeme: Cyberportal",
  "Cyberportal: Ice",
  "CamelCaser: KittenService",
  "Fraudstream: ",
  "Ice: Leetmeme"
 ];

// Format data so that the data is easier to work with

function format(input) {
  //split packages from dependencies
  const tree = input.reduce((accum, item) => {
    const splitString = item.split(": ");
    const package = splitString[0];
    const dependency = splitString[1];
    let dependencies = [];

    // set package as key and dependency as value
    dependencies.push(dependency);
    if (dependency === '') {
      dependencies = [];
    }
    accum[package] = dependencies;
    return accum;
  }, {})

  console.log(tree);
  return tree;
}

format(validInput2);

//create a sorted dependency graph
function graph(object) {
  const sorted = [];  //sorted list of items with no duplicates
  const iterated = {}; //items already looped over
  const keys = Object.keys(obj);
  const sortedString;

  //Sort packages
  keys.forEach(function iterate(key, ancestors) {

    //create ancestors array if it doesn't yet exist
    if (!Array.isArray(ancestors)) {
      ancestors = [];
    }
    //push key (with value) to the ancestors array in order to later check for cycles
    ancestors.push(key);
    //set value of key to true in order to keep track of visted items
    iterated[key] = true;

    //check for cycle
    obj[key].forEach(dependency) {
      //if the key/dependency is in ancestors already then a cycle exists
      if (ancestor.includes(dependency)) {
        throw new Error("Yikes a cycle exists!")
      }
      //now what
    }
  })
}
