//include the database code here

var config = {
    apiKey: "AIzaSyCHlHCclA3zjaaCRo5Q9tJkqe7t0cWKaL8",
    authDomain: "timetrackercream.firebaseapp.com",
    databaseURL: "https://timetrackercream.firebaseio.com",
    projectId: "timetrackercream",
    storageBucket: "timetrackercream.appspot.com",
    messagingSenderId: "584206027961"
  };
  firebase.initializeApp(config);

  db = firebase.database();

//need to have the on-click event

$("#").on("click", () => {
    event.preventDefault();
    //get the new employee values from the input fields. Doing these as variables instead of an object because I am in a ton of pain and this is less thinking.
    let name = $("#name").val().trim();
    let role = $("#role").val().trim();
    let startDate = $("#startDate").val().trim();
    let rate = $("#monthlyRate").val().trim();
    //store them in the database
    db.ref().push( {
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    })
    //append new info to the employee table
    dataRef.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().email);
        console.log(childSnapshot.val().age);
        console.log(childSnapshot.val().comment);
        console.log(childSnapshot.val().joinDate);

        //and then no reallt append it to the html
    }); 
});