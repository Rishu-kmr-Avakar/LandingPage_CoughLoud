
var name = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var button = document.getElementById("button");

function saveData()
{
    window.alert("Ok");
    //var userId = fireabase.auth().currentUser.uid;
    var firebaseR = fireabase.database().ref();
    firebaseR.child("posts").set("some value");
}