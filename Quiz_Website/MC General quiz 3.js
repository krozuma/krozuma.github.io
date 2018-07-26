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
 return("What is the symbol for tin?");
 break;
 case 2:
 return("What is the capital of Lebanon?");
 break;
 case 3:
 return("Who holds the MLB 56 game hitting streak record?");
 break;
 case 4:
 return("Who wrote 'The Stranger'?");
 break;
 case 5:
 return("Carbon and other elements are alloyed with which metal to make steel?");
 break;
 case 6:
 return("Who painted Les Demoiselles d'Avignon?");
 break;
 case 7:
 return("Latissimus dorsi is a superficial muscle in which body region?");
 break;
 case 8:
 return("Which film won the Oscar for best picture in 1972?");
 break;
 case 9:
 return("A bow is what part of a vessel or ship?");
 break;
 case 10:
 return("The Peloponnesian War was fought by two leagues lead by which states?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Ti", "Tn", "As", "Sn"]);
 break;
 case 2:
 return(["Beirut", "Dakar", "Cairo", "Rabat"]);
 break;
 case 3:
 return(["Wade Boggs", "Joe DiMaggio", "Ty Cobb", "Tony Gwynn"]);
 break;
 case 4:
 return(["Jack Kerouac", "Albert Camus", "Fyodor Dostoyevsky", "James Joyce"]);
 break;
 case 5:
 return(["Iron", "Aluminum", "Zinc", "Lead"]);
 break;
 case 6:
 return(["Claude Monet", "Pablo Picasso", "Camille Pissarro", "Pierre-Auguste Renoir"]);
 break;
 case 7:
 return(["The arms", "The head", "The legs", "The back"]);
 break;
 case 8:
 return(["'The Godfather'", "'Cabaret'", "'The Sting'", "'Patton'"]);
 break;
 case 9:
 return(["Back end", "Left side", "Top side", "Forward end"]);
 break;
 case 10:
 return(["Athens and Sparta", "Rome and Britain", "Persia and Athens", "Macedonia and Thrace"]);
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
  return("The correct answer is Sn.");
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
  return("The correct answer is Beirut.");
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
  return("The correct answer is Joe DiMaggio.");
 }
 break;
 case 4:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Albert Camus.");
 }
 break;
 case 5:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Iron.");
 }
 break;
 case 6:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Pablo Picasso.");
 }
 break;
 case 7:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is the back.");
 }
 break;
 case 8:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is 'The Godfather.'");
 }
 break;
 case 9:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is the forward end.");
 }
 break;
 case 10:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Athens and Sparta.");
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
  $('#game').show();
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
