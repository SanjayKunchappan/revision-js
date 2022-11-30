var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];
//adding an exclamation to the end of each todolist item
//for loop
for (var i=0; i < todos.length; i++) {
    todos[i]=todos[i]+ "!";
    console.log(todos[i]);
}

//clearing the whole array
var todosLength = todos.length;
// as the length of the array changes for each pop,
//we save the initial length and run the loop that many times
for (var i=0; i<todosLength; i++) {
    todos.pop();
}
