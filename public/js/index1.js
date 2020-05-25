
// var name = document.getElementById("name");
// var email = document.getElementById("email");
// var subject = document.getElementById("subject");
// var message = document.getElementById("message");
// var button = document.getElementById("button");
function saveData()
{
     window.alert("Thanks for suggesting!");
     // Get a reference to the database service
var database = firebase.database();
firebase.database().ref('users/' + "userId").set({
     username: "rishdf",
     email: "sdkfjasd",
     profile_picture : "fdskjf"
   });
}