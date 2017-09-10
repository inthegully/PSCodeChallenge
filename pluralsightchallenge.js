let validInput1 = ["KittenService: CamelCaser", "CamelCaser: "];
let expectedOutput1 = "CamelCaser, KittenService";
let validInput2 = ["KittenService: ",
   "Leetmeme: Cyberportal",
   "Cyberportal: Ice",
   "CamelCaser: KittenService",
   "Fraudstream: Leetmeme",
   "Ice: "];
let expectedOutput2 = "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream";
let invalidInput1 = ["KittenService: ",
   "Leetmeme: Cyberportal",
   "Cyberportal: Ice"
   "CamelCaser: KittenService",
   "Fraudstream: ",
   "Ice: Leetmeme"];
