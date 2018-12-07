
$( document ).ready(function() {

	// Start editing here
	$("#question_1").hide();
$("#answer_question_1").hide();
$("#question_2").hide();
$("#answer_question_2").hide();
$("#next_question").hide();
$("#question_3").hide();
$("#answer_question_3").hide();
$("#next_question_2").hide();
$("#question_4").hide();
$("#answer_question_4").hide();
$("#next_question_3").hide();
$("#final_question").hide();
$("#question_5").hide();
$("#answer_question_5").hide();
$("#finish").hide();
$("#finish_1").hide();

$("#intro").click(function() {
  $("#question_1").show();
  window.scrollTo({
    left: 0,
    top: $("#question_1").offset().top,
    behavior: "smooth"
  });
});

$("#first").click(function() {
  message = "Correct!";
  $("#answer_text").text(message);
  $("#answer_question_1").show();
  $("#next_question").show();

$("#second").click(function() {
  message = "Try again!";
  $("#answer_question_1").hide();
  $("#answer_text").text(message);
  $("#next_question").hide();
});

$("#third").click(function() {
  message = "Not quite!";
  $("#answer_question_1").hide();
  $("#answer_text").text(message);
  $("#next_question").hide();
});

$("#next_question").click(function() {
  $("#question_2").show();
  window.scrollTo({
    left: 0,
    top: $("#question_2").offset().top,
    behavior: "smooth"
  });
});

$("#fourth").click(function() {
  message = "Think again!";
  $("#answer_text_2").text(message);
  $("#answer_question_2").hide();
  $("#next_question_2").hide();
  //show function
});

$("#fifth").click(function() {
  message = "Correct!";
  $("#answer_text_2").text(message);
  $("#answer_question_2").show();
  $("#next_question_2").show();
});

$("#sixth").click(function() {
  message = "Another guess!";
  $("#answer_text_2").text(message);
  $("#answer_question_2").hide();
  $("#next_question_2").hide();
});

$("#next_question_2").click(function() {
  $("#question_3").show();
  window.scrollTo({
    left: 0,
    top: $("#question_3").offset().top,
    behavior: "smooth"
  });
});

$("#seventh").click(function() {
  message = "Try again!";
  $("#answer_text_3").text(message);
  $("#answer_question_3").hide();
  $("#next_question_3").hide();
});

$("#eighth").click(function() {
  message = "Right!";
  $("#answer_text_3").text(message);
  $("#answer_question_3").show();
  $("#next_question_3").show();
});

$("#ninth").click(function() {
  message = "Yes!";
  $("#answer_text_3").text(message);
  $("#answer_question_3").show();
  $("#next_question_3").show();
});

$("#next_question_3").click(function() {
  $("#question_4").show();
  window.scrollTo({
    left: 0,
    top: $("#question_4").offset().top,
    behavior: "smooth"
  });
});

$("#tenth").click(function() {
  message = "Try again!";
  $("#answer_text_4").text(message);
  $("#answer_question_4").hide();
  $("#final_question").hide();
});

$("#eleventh").click(function() {
  message = "Another guess!";
  $("#answer_text_4").text(message);
  $("#answer_question_4").hide();
  $("#final_question").hide();
});

$("#twelfth").click(function() {
  message = "Correct!";
  $("#answer_text_4").text(message);
  $("#answer_question_4").show();
  $("#final_question").show();
});

$("#final_question").click(function() {
  $("#question_5").show();
  window.scrollTo({
    left: 0,
    top: $("#question_5").offset().top,
    behavior: "smooth"
  });
});

$("#thirteenth").click(function() {
  message = "Try again!";
  $("#answer_text_5").text(message);
  $("#answer_question_5").hide();
});

$("#fourteenth").click(function() {
  message = "Right!";
  $("#answer_text_5").text(message);
  $("#answer_question_5").show();
  $("#finish").show();
});

$("#fifteenth").click(function() {
  message = "Another guess!";
  $("#answer_text_5").text(message);
  $("#answer_question_5").hide();
});

$("#finish").click(function() {
  $("#finish_1").show();
  window.scrollTo({
    left: 0,
    top: $("#finish_1").offset().top,
    behavior: "smooth"
  });
});


	// Stop editing here
	
});
