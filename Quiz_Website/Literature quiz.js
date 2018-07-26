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
 return("Who wrote <i>Don Quixote</i>?");
 break;
 case 2:
 return("Who wrote <i>Faust</i>?");
 break;
 case 3:
 return("Which novel did James Joyce write?");
 break;
 case 4:
 return("Who wrote <i>For Whom the Bell Tolls</i>?");
 break;
 case 5:
 return("Who wrote <i>The Sound and the Fury</i>?");
 break;
 case 6:
 return("Who wrote <i>The Idiot</i>?");
 break;
 case 7:
 return("Who wrote <i>The Divine Comedy</i>?");
 break;
 case 8:
 return("Who wrote the <i>Do Not Go Gentle Into That Good Night</i>?");
 break;
 case 9:
 return("Who wrote <i>War and Peace</i>?");
 break;
 case 10:
 return("Who wrote <i>Middlemarch</i>?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Mario Vargas Llosa", "Jorge Luis Borges", "Miguel de Cervantes", "Charles Dickens"]);
 break;
 case 2:
 return(["Johann Wolfgang von Goethe", "Edgar Allan Poe", "Rudyard Kipling", "Nathaniel Hawthorne"]);
 break;
 case 3:
 return(["<i>To the Lighthouse</i>", "<i>Far From the Madding Croud</i>", "<i>A Moveable Feast</i>", "<i>A Portrait of the Artist as a Young Man</i>"]);
 break;
 case 4:
 return(["Leo Tolstoy", "Ernest Hemingway", "George Orwell", "John Steinbeck"]);
 break;
 case 5:
 return(["Mark Twain", "Eugene O'Neill", "William Faulkner", "Albert Camus"]);
 break;
 case 6:
 return(["Fyodor Dostoyevsky", "Thomas Mann", "Leo Tolstoy", "Vladimir Nabokov"]);
 break;
 case 7:
 return(["William Shakespeare", "Virgil", "Dante", "Homer"]);
 break;
 case 8:
 return(["Dylan Thomas", "Robert Frost", "Emily Dickinson", "Walt Whitman"]);
 break;
 case 9:
 return(["Ernest Hemingway", "Victor Hugo", "F. Scott Fitzgerald", "Leo Tolstoy"]);
 break;
 case 10:
 return(["George Eliot", "Charles Dickens", "Thomas Hardy", "Jules Verne"]);
 break;
 }
}
nextChoices();

function compareAnswers(userAnswer) {
 switch(questionIndex) {
 case 1:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Miguel de Cervantes.");
 }
 break;
 case 2:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Johann Wolfgang von Goethe.");
 }
 break;
 case 3:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is <i>A Portrait of the Artist as a Young Man</i>.");
 }
 break;
 case 4:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Ernest Hemingway.");
 }
 break;
 case 5:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is William Faulkner.");
 }
 break;
 case 6:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Fyodor Dostoyevsky.");
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
  return("The correct answer is Dante.");
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
  return("The correct answer is Dylan Thomas.");
 }
 break;
 case 9:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Leo Tolstoy.");
 }
 break;
 case 10:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is George Eliot.");
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
