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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

    msg = document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({

        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";

}






function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();