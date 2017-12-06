$(document).ready(function(){

		var traintime = new Firebase("https://train-time-6a2ec.firebaseio.com/");


		var config = {
	    apiKey: "AIzaSyBXYMwtQGUuGLmGFlTI9nvv03o01n9JPzI",
	    authDomain: "train-time-6a2ec.firebaseapp.com",
	    databaseURL: "https://train-time-6a2ec.firebaseio.com",
	    projectId: "train-time-6a2ec",
	    storageBucket: "train-time-6a2ec.appspot.com",
	    messagingSenderId: "268245443482"
	  };
	  
	  firebase.initializeApp(config);

	  var trainName = "";
	  var destination = "";
	  var firstTrainTime = "";
	  var frequency = "";

	  train name = $("#trainName").val().trim();
	  destination = $("#destination").val().trim();
	  fist train time = $("#firstTrainTime").val().trim();;
	  frequecy = $("#frequecy").val().trim();

	  database.ref().set({
	  	trainName : trainName,
	  	destination : destination,
	  	firstTrainTime : firstTrainTime,
	  	frequecy : frequecy,
	  });
	 });

	database.ref().on("value", function(snapshot){

		console.log(snapshot.val());

		console.log(snapshot.val().trainName);
		console.log(snapshot.val().destination);
		console.log(snapshot.val().fistTrainTime);
		console.log(snapshot.val().frequecy);

		$("#displayed-data").text(snapshot.val().trainName + "|" + snapshot.val().destination + "|" + snapshot.val().firstTraintTime + "|" + snapshot.val().frequecy);

		trainData.push(trainName);
		trainData.push(destination);
		trainData.push(firstTrainTime);
		trainData.push(frequency);

	});

	function(){
		
	  var firstTrainTime = "";

	  var firstTimeconverted = moment(firstTime, "hh:mm").subtact(1, "years");

	  var current time = moment();
	  console.log("CURRENT TIME:" + moment(currentTime).format("hh:mm"));

	  var diffTime = moment().diff(moment(firstTimeVonverted), "minutes");
	  console.log("DIFFERENT IN TIME: " + diffTime);

	  var tRemainder = diffTime % tFrequency;
	  console.log(tRemainder);

	  var tMinutestillTrain = tFrequency - tremainder;
	  console.log("MINUTES TILL TRAIN: " + tMinutestillTrain);

	  var nexttrain = moment().add(tMinutestilltrain, "minutes");
	  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

	}




