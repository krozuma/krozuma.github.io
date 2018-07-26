var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
  if(userScore >= 80) {
    return(" Excellent job! You know your capitals.");
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
 return("What is the capital of Sudan?");
 break;
 case 2:
 return("What is the capital of Guyana?");
 break;
 case 3:
 return("What is the capital of Nepal?");
 break;
 case 4:
 return("What is the capital of Iceland?");
 break;
 case 5:
 return("What is the capital of Kenya?");
 break;
 case 6:
 return("What is the capital of Peru?");
 break;
 case 7:
 return("What is the capital of Austria?");
 break;
 case 8:
 return("What is the capital of Australia?");
 break;
 case 9:
 return("What is the capital of Germany");
 break;
 case 10:
 return("What is the capital of Thailand?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Kabul", "Cairo", "Khartoum", "Jakarta"]);
 break;
 case 2:
 return(["Hergeisa", "Georgetown", "Kigali", "Kingstown"]);
 break;
 case 3:
 return(["Kathmandu", "Juba", "Kuala Lampur", "Rabat"]);
 break;
 case 4:
 return(["Reykjav&#xED;k", "Suva", "T&#xF3;rshavn", "Oslo"]);
 break;
 case 5:
 return(["N'Djamena", "Niamey", "Suva", "Nairobi"]);
 break;
 case 6:
 return(["Lisbon", "Lima", "Quito", "San Jos&#xE9;"]);
 break;
 case 7:
 return(["Gibraltar", "Prague", "Vienna", "Minsk"]);
 break;
 case 8:
 return(["Kingstown", "Port Louis", "Wellington", "Canberra"]);
 break;
 case 9:
 return(["Bern", "Berlin", "Copenhagen", "Budapest"]);
 break;
 case 10:
 return(["Jakarta", "Phnom Penh", "Bangkok", "Singapore"]);
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
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Khartoum.");
  }
  break;
 case 2:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Georgetown.");
  }
  break;
  case 3:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Kathmandu.");
  }
  break;
  case 4:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Reykjav&#xED;k.");
  }
  break;
  case 5:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Nairobi.");
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
  return("The correct answer is Lima.");
  }
  break;
  case 7:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Vienna.");
  }
  break;
  case 8:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Canberra.");
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
  return("The correct answer is Berlin.");
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
  return("The correct answer is Bangkok.");
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
