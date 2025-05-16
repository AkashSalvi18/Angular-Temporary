var person = {
    Fname : "Akash",
    Lname : "Salvi",
    Age : 25,
}
function printUsername(userName :  string) : string {
    return userName;
}

if(person.Age > 18){
    console.log("Adult");
}
let userName = "Akash";
let result = printUsername(userName);
console.log(result);