
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
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name"); 
 document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addroom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log ("room name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToroomname(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML+= row;

      });});}
getData();
  
function redirectToroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
Window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}