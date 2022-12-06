//  if (firstName === "Sanjay"||"Khushi") {
//     this was wrong as " " any character inside quotes would trigger this to be true

var firstName = prompt("Enter your name!");
if (firstName === "Sanjay" || firstName === "Khushi") {
  alert("Hi " + firstName + "!");
} else if (firstName === "") {
  alert("Name not entered, please enter a name!");
} else {
  alert("The name you entered is " + firstName + ". You are not authorised!");
}
