var database = [
    {
        username: "Sanjay",
        password: "sanjay123"
    },
    {
        username: "Aman",
        password: "aman123"
    },
    {
        username: "Khushi",
        password: "khushi123"
    },
    {
        username: "Sanjeev",
        password: "sanjeev123"
    }
];


var newsfeed = [
	{
		username: "Aman",
		timeline: "Bangalore sucks!"
	},
	{
		username: "Khushi",
		timeline: "Duniya ********* hai!"
	},
	{
		username: "Sanjeev",
		timeline: "I'm getting married!!!"
	},
    {
		username: "Sanjay",
		timeline: "Hello there!"
	}

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(user,pass) {
    for (var i=0; i<database.length; i++){
        if (user === database[i].username && 
            pass === database[i].password) {
            return true;        
        } 
    } return false;
}


function signIn(user, pass) {
    console.log(isUserValid(user, pass));
    if (isUserValid(user,pass)) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong username and password!");
    }    
}


signIn (userNamePrompt, passwordPrompt);

