const firebaseConfig = {
      apiKey: "AIzaSyBRGftMmC-3to41nNWxY_x3SfNu8mhsUwc",
      authDomain: "chat-app-f21f1.firebaseapp.com",
      databaseURL: "https://chat-app-f21f1-default-rtdb.firebaseio.com",
      projectId: "chat-app-f21f1",
      storageBucket: "chat-app-f21f1.appspot.com",
      messagingSenderId: "77874423879",
      appId: "1:77874423879:web:b7ce51706fe299eff7a962",
      measurementId: "G-7H04QYH3EQ"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg = document.getElementById("msg").value; 
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = ""; 
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }