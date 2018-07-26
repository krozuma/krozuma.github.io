var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
 if(userScore >= 80) {
  return(" Excellent job! You're a trivia pro.");
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
 return("Which rare metal is used to coat spark plugs due to its high melting point?");
 break;
 case 2:
 return("Who wrote the epic poem 'Inferno'?");
 break;
 case 3:
 return("What is a proton composed of?");
 break;
 case 4:
 return("The theoretical boundary of the heliosphere where solar winds stop is called what?");
 break;
 case 5:
 return("What is the capital of Eritrea?");
 break;
 case 6:
 return("Which composer wrote the 1812 Overture?");
 break;
 case 7:
 return("Which film won the Academy Award for Best Picture in 1943?");
 break;
 case 8:
 return("What is the sixth planet from the sun?");
 break;
 case 9:
 return("What is the largest waterfall in the world?");
 break;
 case 10:
 return("Which US city has the second most major (MLB, NFL, NBA and NHL) sports championships?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Iridium", "Tungsten", "Gold", "Ruthenium"]);
 break;
 case 2:
 return(["William Shakespeare", "Homer", "John Milton", "Dante"]);
 break;
 case 3:
 return(["Two up quarks and a down quark", "Two down quarks and an up quark", "An electron and a neutron", "Two up quarks and an electron"]);
 break;
 case 4:
 return(["Heliosheath", "Solar wall", "Helioterminus", "Heliopause"]);
 break;
 case 5:
 return(["Asmara", "Addis Ababa", "Harare", "Luanda"]);
 break;
 case 6:
 return(["Beethoven", "Richard Wagner", "Franz Schubert", "Tchaikovsky"]);
 break;
 case 7:
 return(["Hamlet", "How Green Was My Valley", "Casablanca", "For Whom the Bell Tolls"]);
 break;
 case 8:
 return(["Saturn", "Neptune", "Jupiter", "Mars"]);
 break;
 case 9:
 return(["Niagara Falls", "Angel Falls", "Victoria Falls", "Sutherland Falls"]);
 break;
 case 10:
 return(["New York", "Boston", "Chicago", "Los Angeles"]);
 break;
 }
}
nextChoices();

function compareAnswers(userAnswer) {
 switch(questionIndex) {
 case 1:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("Yes, iridium (element #77) is correct!");
 }
 else   {
  return("The correct answer is iridium (element #77).");
 }
 break;
 case 2:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Dante.");
 }
 break;
 case 3:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is two up quarks and a down quark.");
 }
 break;
 case 4:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is the heliopause.");
 }
 break;
 case 5:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Asmara.");
 }
 break;
 case 6:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Tchaikovsky.");
 }
 break;
 case 7:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Casablanca.");
 }
 break;
 case 8:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Saturn.");
 }
 break;
 case 9:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("Yes, Victoria Falls, in Southern Africa, is correct! It's combined height of 355 ft and width 5,604 ft combine to form the greatest sheet of falling water in the world.");
 }
 else   {
  return("The correct answer is Victoria Falls, in Southern Africa. It's combined height of 355 ft and width 5,604 ft combine to form the greatest sheet of falling water in the world.");
 }
 break;
 case 10:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct! Boston has 36 championships while New York has the most (54).");
 }
 else   {
  return("The correct answer is Boston with 36 championships. New York has the most (54).");
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
