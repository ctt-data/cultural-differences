
$( document ).ready(function() {

	// Start editing here
$("#first").click(function(){
username = $("#user_input").val()
message = "Great, let´s be friends!"
   $("#answer_text").text(message)
  })

$("#second").click(function(){
username = $("#user_input").val()
message = "Too bad!"
   $("#answer_text").text(message)
  })

$("#third").click(function(){
username = $("#user_input").val()
message = "Try again!"
   $("#answer_text").text(message)
  })



	// Stop editing here
	
});
