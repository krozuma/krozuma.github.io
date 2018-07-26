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
 return("What is the capital of China?");
 break;
 case 2:
 return("What is the capital of Greenland?");
 break;
 case 3:
 return("What is the capital of Honduras?");
 break;
 case 4:
 return("What is the capital of Denmark?");
 break;
 case 5:
 return("What is the capital of Saint Lucia?");
 break;
 case 6:
 return("What is the capital of Croatia?");
 break;
 case 7:
 return("What is the capital of Papua New Guinea?");
 break;
 case 8:
 return("What is the capital of Israel?");
 break;
 case 9:
 return("What is the capital of Cuba?");
 break;
 case 10:
 return("What is the capital of Romania?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(questionIndex) {
 case 1:
 return(["Manila", "Hanoi", "Beijing", "Hong Kong"]);
 break;
 case 2:
 return(["Stockholm", "Reykjav&#xED;k", "Nuuk", "Oslo"]);
 break;
 case 3:
 return(["Santiago", "Tegucigalpa", "Montevideo", "Madrid"]);
 break;
 case 4:
 return(["Amsterdam", "Bern", "Brussels", "Copenhagen"]);
 break;
 case 5:
 return(["Castries", "Juba", "St. Peter Port", "West Island"]);
 case 6:
 return(["Prague", "Zagreb", "Vilnius", "Tirana"]);
 break;
 case 7:
 return(["Lilongwe", "Manama", "Port-au-Prince", "Port Moresby"]);
 break;
 case 8:
 return(["Jerusalem", "Nazareth", "Juda", "Haifa"]);
 break;
 case 9:
 return(["Buenos Aires", "Apia", "Havana", "Bogot&#xE1;"]);
 break;
 case 10:
 return(["Sofia", "Kiev", "Baku", "Bucharest"]);
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
  return("That's correct!");
   }
 else   {
  return("The correct answer is Beijing.");
 }
 break;
 case 2:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is Nuuk.");
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
  return("The correct answer is Tegucigalpa.");
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
  return("The correct answer is Copenhagen.");
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
  return("The correct answer is Castries.");
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
  return("The correct answer is Zagreb.");
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
  return("The correct answer is Port Moresby.");
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
  return("The correct answer is Jerusalem.");
}
break;
case 9:
if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is Havana.");
}
break;
case 10:
if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is Bucharest.");
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
