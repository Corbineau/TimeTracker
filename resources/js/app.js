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

  var db = firebase.database();

//need to have the on-click event

$("button").on("click", (event) => {
    event.preventDefault();
    //get the new employee values from the input fields. Doing these as variables instead of an object because I am in a ton of pain and this is less thinking.
    let name = $("#name").val().trim();
    let role = $("#role").val().trim();
    let startDate = $("#date").val().trim();
    let rate = $("#rate").val().trim();
    //store them in the database
    db.ref().push( {
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    })
    //append new info to the employee table
    db.ref().on("child_added", function(childSnapshot) {

        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().rate);

        //calculate the # of months worked, and the total paid til now
        let monthsWorked = 0;
        let payToDate = 0;

        //and then no really append it to the html
        let newRow = $("<tr>");
        newRow.append($(`<td>${name}</td><td>${role}</td><td>${startDate}</td><td>${monthsWorked}</td><td>${rate}</td><td>${payToDate}</td>`));
        $("tbody").append(newRow);


        //handle errors
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    }); 
});