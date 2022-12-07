//Event handling
//==============

// we can use JS to listen to events and act based on what the user does
//events - clicking, mouse enter and hover over something 
//or user writing something in searchbar


// we can use document.querySelector("button") to select the button
//events can be used to listen to user inputs
var button = document.querySelector("button");


function buttonClick() { console.log("Click!!!")}
button.addEventListener("click",buttonClick);//this takes in 2 parameters
//first parameter is the event 
//and the second is the function what we wanna do for the event

//mouseenter and mouseleave can be used in place of click