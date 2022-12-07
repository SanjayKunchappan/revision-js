// DOM Selectors
// --------------
// getElementsByTagName
document.getElementsByTagName("h1");
// getElementsByClassName
document.getElementsByClassName("className");
// getElementById
document.getElementById("idName");


//query selectors are better as we use the same selectors as CSS.
// querySelector
document.querySelector("h1"); //selects first element only
// querySelectorAll
document.querySelectorAll("li"); //selects all elements 

// getAttribute
document.querySelector("h1").getAttribute("height");
// setAttribute
document.querySelector("h1").setAttribute("height","500px");

// ##Changing Styles
// style.{property} //ok
document.querySelector("h1").style.background="yellow";


var headertags = document.querySelector("h1");
// className //best
headertags.className = "coolTitle"; // .coolTitle should be defined in CSS
// classList //best
headertags.classList; //returns all classes of selected element.
// classList.add
headertags.classList.add("done");
// classList.remove
headertags.classList.remove("done");
// classList.toggle
headertags.classList.toggle("done");


// ##Bonus
// innerHTML //DANGEROUS
headertags.innerText="ABCD";


// parentElement
headertags.parentElement; //to access parent element
// children
headertags.children; // to get all children

// ##It is important to CACHE selectors in variables
// this helps with speed as the browser doesn't have to search entire DOM to locate element again and again