
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
  return input.reduce((accum, item) => {
    const splitString = item.split(": ");
    console.log(splitString);
    const package = splitString[0];
    const dependency = splitString[1];
    return splitString;
  }, {})
}

format(validInput2);
