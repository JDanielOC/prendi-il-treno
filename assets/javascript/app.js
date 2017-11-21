
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC1l8ng_f-j8pThYt6rjFgpeX8X3dVRo4s",
        authDomain: "prendiiltreno.firebaseapp.com",
        databaseURL: "https://prendiiltreno.firebaseio.com",
        projectId: "prendiiltreno",
        storageBucket: "prendiiltreno.appspot.com",
        messagingSenderId: "106708772058"
    };
firebase.initializeApp(config);

// Create a variable to reference the database

var database = firebase.database();

// Capture Button Click
$("#add-train").on("click", function () {
            event.preventDefault();

    // User Input
  var trainName = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#firstTrain-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
  };

  database.ref().push(newTrain);
    
  console.log(newTrain.trainName);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  alert("Thank you for adding a new train to the schedule!");

  // clear form

  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#firstTrain-input").val("");
  $("#frequency-input").val("");

});
  
// database listener - .on("value")

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
        console.log(childSnapshot.val());

var trainName = childSnapshot.val().trainName;
var destination = childSnapshot.val().destination;
var firstTrain = childSnapshot.val().firstTrain;
var frequency = childSnapshot.val().frequency;






//Add time calculations here...

var nextArrival = "Next Train";
var minLeft = 0;

$("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrain + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minLeft + "</td></tr>");





    },




    // Create Error Handling

    function (errorObject) {
        console.log(err);
    });







