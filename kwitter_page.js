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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
