var person = {
    Fname: "Akash",
    Lname: "Salvi",
    Age: 25,
};
function printUsername(userName) {
    return userName;
}
if (person.Age > 18) {
    console.log("Adult");
}
var userName = "Akash";
var result = printUsername(userName);
console.log(result);
