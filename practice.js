var firebaseConfig = {
    apiKey: "AIzaSyD0RWGDEc1ap0Z7FnHRMtDzJw1orlmKf0g",
    authDomain: "kwitter-f7f03.firebaseapp.com",
    databaseURL: "https://kwitter-f7f03-default-rtdb.firebaseio.com",
    projectId: "kwitter-f7f03",
    storageBucket: "kwitter-f7f03.appspot.com",
    messagingSenderId: "66574336994",
    appId: "1:66574336994:web:2e6a463662a64720696fbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
purpose : "My first test"
    });
}