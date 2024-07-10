const people = ["Aaron","Mel","Jhon"];
const one = 1;
const STR = "Hello World";
const b = true;
const employee = {
    firtName: "Chinnarat",
    lastName: "Ritmaha",
};


function sayHello(person){
    console.log("Hello " + person.firstName);

}


console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array);
sayHello(employee);