
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

database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());

        console.log(snapshot.val().trainName);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().firstTrain);
        console.log(snapshot.val().frequency);

        $("#trainName-display").text(snapshot.val().trainName);
        $("#destination-display").text(snapshot.val().destination);
        $("#firstTrain-display").text(snapshot.val().firstTrain);
        $("#frequency-display").text(snapshot.val().frequency);

        //watch the class video to fill in missing parts







    },




    // Create Error Handling

    function (errorObject) {
        console.log(err);
    });







