$(document).ready(function () {



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

    //Create newTrain variable with train parameters
    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };

    //push data to database object
    database.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);

    alert("Thank you for adding a new train to the schedule!");

    // clear form on submission

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

    //calculations of time
    var firstTimeConverted = moment(firstTrain, "hh:mm:ss a").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("Current Time: " + moment(currentTime).format("hh:mm:ss a"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var minLeft = diffTime % frequency;
    console.log(minLeft);

    // Minute Until Train
    var trainRemainder = frequency - minLeft;
    console.log("MINUTES TILL TRAIN: " + trainRemainder);

    // Next Train
    var nextArrival = moment().add(trainRemainder, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"));


    //append data (and format time) to table on html page
    $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + moment(firstTrain, "HH:mm").format("hh:mm A") + "</td><td>" + frequency + "</td><td>" + moment(nextArrival).format("hh:mm A") + "</td><td>" + trainRemainder + "</td></tr>");


    //add setInterval to refresh trainTable every 10 seconds -- ISSUE: not sure what to load... the html page or the database?
    // var auto_refresh;

    // function resetFunction() {
    //     auto_refresh = setInterval(function () {
    //          $('#trainTable').load('#trainTable');
    //          }, 10000);
    // };

},



// Create Error Handling

function (errorObject) {
    console.log(err);


});

});