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
 return("Atomic radius decreases in what direction?");
 break;
 case 2:
 return("Atomic radius increases in what direction?");
 break;
 case 3:
 return("?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Down a period", "From family to family", "Across a period (to the right)", "Across a period (to the left)"]);
 break;
 case 2:
 return(["Traveling down a group", "Traveling up a group", "From family to family", "Only within a series"]);
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
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is across a period (to the left).");
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
  return("The correct answer is traveling down a group.");
 }
 break;
 case 3:
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
