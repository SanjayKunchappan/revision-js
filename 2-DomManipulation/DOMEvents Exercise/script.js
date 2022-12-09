//caching the selectors for required elements into variables
//this helps with speed as the browser doesn't have to search entire DOM to locate element again and again
var button = document.querySelector("#enter");
var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");

//
function updatelistItems () {
    var listItems =  document.querySelectorAll("li");
    return
}


//element.classList.toggle can be used to alternatively add/remove class
function toggleStrikeThrough() {
    this.classList.toggle("done"); //this
}


function inputLength () {
    return input.value.length; //returns how many characters are entered in input text field
}

function createListElement () {
    var li = document.createElement("li");//create element
    li.appendChild(document.createTextNode(input.value)); //text node for the li element
    ul.appendChild(li); //appending the created element onto ul element
    input.value = ""; // clear out the input after creating new entry in list

}

function addListAfterClick() {
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterEnter(Event) {
    if (inputLength()>0 && Event.keyCode === 13){ // keyCode 13 is for Enter
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);



//listItems is an array of all the li elements
//adding listener for each array element
listItems.forEach( function(element,i) {
    element.addEventListener("click", toggleStrikeThrough); 
});
