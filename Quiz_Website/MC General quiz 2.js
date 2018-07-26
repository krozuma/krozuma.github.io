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
 return("Who wrote the 'The Sun Also Rises'?");
 break;
 case 2:
 return("Who holds the NBA record for most points in a game (100)?");
 break;
 case 3:
 return("What is the symbol for element number 82, lead?");
 break;
 case 4:
 return("Which painter's 'Impression, Sunrise' inspired the derisive term 'Impressionism'?");
 break;
 case 5:
 return("Which philosopher is famous for the phrase 'I think, therefore I am'?");
 break;
 case 6:
 return("Which radioactive element is commonly found in smoke detectors, in small quantities?");
 break;
 case 7:
 return("What is the de faco capital of the European Union?");
 break;
 case 8:
 return("Which hormone is known as the 'bonding hormone'?");
 break;
 case 9:
 return("Who performed the first human heart transplant operation in December of 1967?");
 break;
 case 10:
 return("What river is said to be, somewhat controversially, the longest in the world?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["J. K. Rowling", "Ernest Hemingway", "Hermann Hesse", "James Joyce"]);
 break;
 case 2:
 return(["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "Kareem Abdul-Jabbar"]);
 break;
 case 3:
 return(["Le", "L", "Au", "Pb"]);
 break;
 case 4:
 return(["&#xC9;douard Manet", "Vincent van Gogh", "Edgar Degas", "Claude Monet"]);
 break;
 case 5:
 return(["Plato", "John Locke", "Ren&#xE9; Descartes", "Aristotle"]);
 break;
 case 6:
 return(["Radium", "Plutonium", "Americium", "Radon"]);
 break;
 case 7:
 return(["Rome", "Brussels", "London", "Bern"]);
 break;
 case 8:
 return(["Oxytocin", "Estrogen", "Testosterone", "Prolactin"]);
 break;
 case 9:
 return(["Sanjay Gupta", "Joseph Lister", "Roger Penrose", "Christiaan Barnard"]);
 break;
 case 10:
 return(["Amazon", "Mississippi", "Nile", "Yangtze"]);
 }
}
nextChoices();

function compareAnswers(userAnswer) {
 switch(questionIndex) {
 case 1:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Ernest Hemingway.");
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
  return("The correct answer is Wilt Chamberlain.");
 }
 break;
 case 3:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Pb which comes from the Latin word plumbum.");
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
  return("The correct answer is Claude Monet.");
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
  return("The correct answer is Ren&#xE9; Descartes.");
 }
 break;
 case 6:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Americium.");
 }
 break;
 case 7:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Brussels, Belgium.");
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
  return("The correct answer is oxytocin.");
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
  return("The correct answer is Christiaan Barnard.");
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
  return("The correct answer is the Nile, which is 4,258 miles long.");
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
