var userScore = 0;
var questionIndex = 1;

function nextQuestion() {
 switch(questionIndex) {
  case 1:
  return("What is the second highest mountain in the world?");
  break;
  case 2:
  return("What is the name of element number six, which is the basis of life?");
  break;
  case 3:
  return("Which Dostoyevsky novel features the guilt ridden character, Raskolnikov?");
  break;
  case 4:
  return("Which Macedonian conqueror was said to be Aristotle's pupil?");
  break;
  case 5:
  return("Who was US president number 26?");
  break;
  case 6:
  return("The human forearm is composed of what two bones?");
  break;
  case 7:
  return("Which Dutch painter is famous for 'The Night Watch', 'Belshazzar's Feast' and 'The Anatomy Lesson of Dr. Nicolaes Tulp'?");
  break;
  case 8:
  return("What is the capital of Sweden?");
  break;
  case 9:
  return("What is the earliest known civilization? It was located in present day Iraq and Kuwait.");
  break;
  case 10:
  return("Which popular AMC TV show was about a high school chemistry who became a talented methamphetamine cook?");
  break;
  default:
  return("That's all for now. Thanks for playing Quiz Show! Please hit refresh to play again.");
  break;
 }
}

function compareAnswers(userAnswer) {
 switch(questionIndex) {
 case 1:
 if(userAnswer.toUpperCase() == "K2") {
  userScore+= 10;
  $('#scoreBox').animate({'marginLeft': "+=215px"});
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct! K2 is 28,251 ft high.");
   }
 else   {
  return("The correct answer is K2.");
 }
 break;
 case 2:
 if(userAnswer.toUpperCase() == "CARBON") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
  return("Carbon is correct!");
  }
 else {
  return("The correct answer is Carbon.");
 }
 break;
 case 3:
  if(userAnswer.toUpperCase() == "CRIME AND PUNISHMENT") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("Correct!");
 }
 else {
  return("The correct answer is Crime and Punishment.");
 }
 break;
 case 4:
  if(userAnswer.toUpperCase() == "ALEXANDER THE GREAT") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("Excellent!");
 }
 else {
  return("The correct answer is Alexander the Great.");
 }
 break;
 case 5:
  if(userAnswer.toUpperCase() == "THEODORE ROOSEVELT") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("That's correct!");
 }
 else if(userAnswer.toUpperCase() == "TEDDY ROOSEVELT") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  return("That's correct!");
 }
 else {
  return("The correct answer is Theodore 'Teddy' Roosevelt.");
 }
 break;
 case 6:
 if(userAnswer.toUpperCase() == "RADIUS AND ULNA") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, that's correct!");
 }
 else if(userAnswer.toUpperCase() == "ULNA AND RADIUS") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  return("Yes, that's correct!");
 }
 else if(userAnswer.toUpperCase() === "THE ULNA AND RADIUS") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  return("Yes, that's correct!");
   }
 else if(userAnswer.toUpperCase() == "THE RADIUS AND ULNA") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  return("Yes, that's correct!");
 }
 else {
  return("The correct answer is the Radius and Ulna.");
 }
 break;
 case 7:
 if(userAnswer.toUpperCase() == "REMBRANDT") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("You got it!");
 }
 else {
  return("The correct answer is Rembrandt.")
 }
 break;
 case 8:
 if(userAnswer.toUpperCase() == "STOCKHOLM") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct.");
 }
 else {
  return("We were looking for Stockholm.");
 }
 case 9:
 if(userAnswer.toUpperCase() == "MESOPOTAMIA") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Correct!");
 }
 else {
  return("No, the correct answer is Mesopotamia.");
 }
 break;
 case 10:
 if(userAnswer.toUpperCase() == "BREAKING BAD") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Correct!");
 }
 else {
  return("I'm sorry, the correct answer is Breaking Bad.");
 }
 break;
 default:
 return("That's all for now. Thanks for playing Quiz Show! Please hit refresh to play again.");
 }
}

$(document).ready(function() {
 $('#next').on('click', function(e) {
  e.preventDefault();
 $('#questionParagraph').html('<p>' + nextQuestion() + '</p>');
 $('#answerParagraph').hide();
 });
 $('#return').on('click', function(e) {
  e.preventDefault();
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
  console.log(userAnswer);
  });
});
