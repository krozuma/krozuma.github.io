var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
 if(userScore >= 80) {
  return(" Excellent job! You've mastered this material.");
 }
 else if(userScore > 50) {
  return(" Good job. With a little bit more work you can master this material.");
 }
 else {
  return(" Keep working, you'll get this stuff down eventually.");
  }
 }

function nextQuestion() {
 switch(questionIndex) {
 case 1:
 return("What is the capital of Brazil?");
 break;
 case 2:
 return("What is the capital of Uzbekistan?");
 break;
 case 3:
 return("What is thd capital of Taiwan?");
 break;
 case 4:
 return("What is the capital of Cameroon?");
 break;
 case 5:
 return("What is the capital of Tajikistan?");
 break;
 case 6:
 return("What is the capital of Venezuela?");
 break;
 case 7:
 return("What is the capital of Eritrea?");
 break;
 case 8:
 return("What is the capital of Algeria?");
 break;
 case 9:
 return("What is the capital of Jamaica?");
 break;
 case 10:
 return("What is the capital of the Philippines?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Bogot&#xE1;", "San Jos&#xE9;", "Tegucigalpa", "Bras&#xED;lia"]);
 break;
 case 2:
 return(["Tashkent", "Yerevan", "Ulaanbaatar", "Chisinau"]);
 break;
 case 3:
 return(["Tokyo", "Taipei", "Hong Kong", "Singapore"]);
 break;
 case 4:
 return(["Nairobi", "Niamey", "Ouagadougou", "Yaound&#xE9;"]);
 break;
 case 5:
 return(["Zagreb", "Vilnius", "Dushanbe", "Kabul"]);
 case 6:
 return(["Caracas", "Buenos Aires", "Bogot&#xE1;", "Asunci&#xF3;n"]);
 break;
 case 7:
 return(["Asmara", "Addis Ababa", "Windhoek", "Naypyidaw"]);
 break;
 case 8:
 return(["Khartoum", "Doha", "Algiers", "Baghdad"]);
 break;
 case 9:
 return(["Aruba", "Kingston", "Alofi", "Port Louis"]);
 break;
 case 10:
 return(["Roseau", "Cebu", "Manila", "St. George's"]);
 break;
 }
}
nextChoices();

function compareAnswers(userAnswer) {
 switch(questionIndex) {
 case 1:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Bras&#xED;lia.");
 }
 break;
 case 2:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Tashkent.");
 }
 break;
 case 3:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Taipei.");
 }
 break;
 case 4:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Yaound&#xE9;.");
 }
 break;
 case 5:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Dushanbe.");
 }
 break;
 case 6:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Caracas.");
 }
 break;
 case 7:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Asmara.");
 }
 break;
 case 8:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Algiers.");
 }
 break;
 case 9:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Kingston.");
 }
 break;
 case 10:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Manila.");
 }
 break;
 }
}

$(document).ready(function() {
  $('#play').on('click', function(e) {
  e.preventDefault();
  $('#intro').hide("puff");
  $('#game').show("fold", 900);
  $('#questionParagraph').html('<p>' + nextQuestion() + '</p>');
  $('#answerA').html('<p>' + "A) " + nextChoices()[0] + '</p>');
  $('#answerB').html('<p>' + "B) " + nextChoices()[1] + '</p>');
  $('#answerC').html('<p>' + "C) " + nextChoices()[2] + '</p>');
  $('#answerD').html('<p>' + "D) " + nextChoices()[3] + '</p>');
  choicesIndex++;
  $('#answerParagraph').hide();
  });

 $('#next').on('click', function(e) {
  e.preventDefault();
  $('#questionParagraph').html('<p>' + nextQuestion() + '</p>');
  $('#answerA').html('<p>' + "A) " + nextChoices()[0] + '</p>');
  $('#answerB').html('<p>' + "B) " + nextChoices()[1] + '</p>');
  $('#answerC').html('<p>' + "C) " + nextChoices()[2] + '</p>');
  $('#answerD').html('<p>' + "D) " + nextChoices()[3] + '</p>');
  choicesIndex++;
  $('#answerParagraph').hide();
  $('#answerSection').show("slide");
 });

 $('#answerA').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("A");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
  $('#answerSection').hide("puff");
 });
 $('#answerB').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("B");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
  $('#answerSection').hide("puff");
 });
 $('#answerC').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("C");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
  $('#answerSection').hide("puff");
 });
 $('#answerD').click(function(e) {
  e.preventDefault();
  $("input:text").val("D");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
  $('#answerSection').hide("puff");
 });
});
