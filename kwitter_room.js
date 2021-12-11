var firebaseConfig = {
      apiKey: "AIzaSyBIhvFfOtzrBwBPGcS4BPMLOch4B0Ymgp0",
      authDomain: "kwitter-27d53.firebaseapp.com",
      projectId: "kwitter-27d53",
      storageBucket: "kwitter-27d53.appspot.com",
      messagingSenderId: "398268081444",
      appId: "1:398268081444:web:96437a2f78f352e6bf3fb1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "add room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

}
function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room Name-",room_name);
      row="<div class='room_name' id="+room_name+" onclick='redirecttoRoomName(this.id)'>#"+room_name+"</div><hr></hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
