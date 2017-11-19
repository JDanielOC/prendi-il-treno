
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

var trainName = "";
var destination = "";
var firstTrain = 0;
var frequency = 0;

// Capture Button Click
$("#add-train").on("click", function () {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    trainName = $("#trainName-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#firstTrain-input").val().trim();
    frequency = $("#frequency-input").val().trim();
    // Code in the logic for storing and retrieving the most recent user.
    database.ref().set({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    })

    // Don't forget to handle the "initial load"  <--- what??????

});


// Create Firebase "watcher" Hint: .on("value")

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







