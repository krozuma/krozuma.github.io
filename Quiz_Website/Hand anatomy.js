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
  return("What is bone F?");
  break;
  case 2:
  return("What is the name for the bones indicated by A");
  break;
  case 3:
  return("What is bone G?");
  break;
  case 4:
  return("What is bone K?");
  break;
  case 5:
  return("What is bone H?");
  break;
  case 6:
  return("What is the name for the bones indicated by D?");
  break;
  case 7:
  return("What is bone E?");
  break;
  case 8:
  return("What is bone O?");
  break;
  case 9:
  return("What is bone I?");
  break;
  case 10:
  return("What is bone R?");
  break;
  default:
  return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(questionIndex) {
  case 1:
  return(["Triquetrum", "Ulna", "Trapezium", "Hamate"]);
  break;
  case 2:
  return(["Phalanges", "Metatarsals", "Metacarpals", "Carpels"]);
  break;
  case 3:
  return(["Capitate", "Scaphoid", "Trapezoid", "Lunate"]);
  break;
  case 4:
  return(["Capitate", "Pisiform", "Trapezoid", "Hamate"]);
  break;
  case 5:
  return(["Trapezoid", "Hyoid", "Scaphoid", "Lunate"]);
  break;
  case 6:
  return(["Carpels", "Metacarpals", "Phalanges", "Metatarsals"]);
  break;
  case 7:
  return(["Trapezium", "Scaphoid", "Occipital", "Trapezoid"]);
  break;
  case 8:
  return(["Ulna", "Capitate", "Hamate", "Trapezium"]);
  break;
  case 9:
  return(["Lunate", "Scaphoid", "Hyoid", "Pisiform"]);
  break;
  case 10:
  return(["Hyoid", "Triquetrum" , "Parietal", "Lunate"]);
  break;
  }
}
nextChoices();

function compareAnswers(userAnswer) {
 switch(questionIndex) {
  case 1:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').animate({'marginLeft': "+=215px"});
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, trapezium is correct!");
  }
  else   {
   return("The correct answer is trapezium.");
  }
  break;
  case 2:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, phalanges is correct!");
  }
  else   {
   return("The correct answer is phalanges.");
  }
  break;
  case 3:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, scaphoid is correct!");
  }
  else   {
   return("The correct answer is scaphoid.");
  }
  break;
  case 4:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, capitate is correct!");
  }
  else   {
   return("The correct answer is capitate.");
  }
  break;
  case 5:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, lunate is correct!");
  }
  else   {
   return("The correct answer is lunate.");
  }
  break;
  case 6:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, metacarpals is correct!");
  }
  else   {
   return("The correct answer is metacarpals.");
  }
  break;
  case 7:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, trapezoid is correct!");
  }
  else   {
   return("The correct answer is trapezoid.");
  }
  break;
  case 8:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, hamate is correct!");
  }
  else   {
   return("The correct answer is hamate.");
  }
  break;
  case 9:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, pisiform is correct!");
  }
  else   {
   return("The correct answer is pisiform.");
  }
  break;
  case 10:
   if(userAnswer == "B") {
    userScore+= 10;
    $('#scoreBox').effect("bounce");
    $('#scoreBox').html(userScore + " pts");
    return("Yes, triquetrum is correct!");
   }
   else   {
    return("The correct answer is triquetrum.");
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
