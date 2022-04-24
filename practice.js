
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtPoCwNLAiy_VVv3CZypzB-j-SDlGYgZI",
    authDomain: "kwitter-4a8bb.firebaseapp.com",
    databaseURL: "https://kwitter-4a8bb-default-rtdb.firebaseio.com",
    projectId: "kwitter-4a8bb",
    storageBucket: "kwitter-4a8bb.appspot.com",
    messagingSenderId: "267681042026",
    appId: "1:267681042026:web:c7047e76876b4bd1898413"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    Amogh : "how do you do?"
    
    });
}


