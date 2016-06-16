var profile = require("./profile.js");
//console.dir(process.argv);
//var users = process.argv.slice(2);
var users = ["chalkers", "davidkeller3", "davemcfarland", "nickpettit"];

//Or just users.forEach(profile.get);
users.forEach(function(username){
profile.get(username);
});

//profile.get("davidkeller3");
//profile.get("chalkers");