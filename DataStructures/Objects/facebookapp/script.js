var database = [
    {
        username: "Sanjay",
        password: "khushikhushi"
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
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong username and password!");
    }
}

signIn (userNamePrompt, passwordPrompt);

