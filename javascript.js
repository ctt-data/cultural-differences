
$( document ).ready(function() {

	// Start editing here
	
$("#answer_question_1").hide();
$("#question_2").hide();

$("#first").click(function() {
  message = "Correct!";
  $("#answer_text").text(message);
  $("#answer_question_1").show();
});

$("#second").click(function() {
  message = "Try again!";
  $("#answer_question_1").hide();
  $("#answer_text").text(message);
});

$("#third").click(function() {
  message = "Not quite!";
  $("#answer_question_1").hide();
  $("#answer_text").text(message);
});

$("#next_question").click(function() {
  $("#question_2").show();
  $("#answer_text").text(message);
});

$("#fourth").click(function() {
  message = "Correct!";
  $("#answer_text_2").text(message);
  //show function
});

$("#fifth").click(function() {
  message = "Try again!";
  $("#answer_text_2").text(message);
});

$("#sixth").click(function() {
  username = $("#user_input").val();
  message = "Not quite!";
  $("#answer_text_2").text(message);
});



	// Stop editing here
	
});
