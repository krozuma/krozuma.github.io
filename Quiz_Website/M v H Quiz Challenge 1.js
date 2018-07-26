var userScore = 0;
var computerScore = 0;
var questionIndex = 1;
var choicesIndex = 1;
var comVar;

function evaluation() {
 if(userScore > computerScore) {
  return(" You win! Way to represent for humanity--you've staved off the computer hoard looking to enslave it.");
 }
 else {
  return(" Computer wins. Uh-oh, this is te frist in the computer domination of the world ");
  }
 }

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
 return("You earned " + userScore + " points. Computer earned " + computerScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["McKinly", "K2", "Everest", "Kilimanjaro"]);
 break;
 case 2:
 return(["Gold", "Carbon", "Oxygen", "Silicon"]);
 break;
 case 3:
 return(["Crime and Punishment", "War and Peace", "The Brothers Karamazov", "Anna Karenina"]);
 break;
 case 4:
 return(["Genghis Khan", "Julius Caesar", "Alexander the Great", "Napoleon Bonaparte"]);
 break;
 case 5:
 return(["Abraham Lincoln", "Grover Cleveland", "Woodrow Wilson", "Theodore Roosevelt"]);
 break;
 case 6:
 return(["Radius and ulna", "Tibia and fibula", "Scapula and clavicle", "Occipital and parietal"]);
 break;
 case 7:
 return(["Vincent van Gogh", "Peter Paul Rubens", "Rembrandt", "Michelangelo"]);
 break;
 case 8:
 return(["Stockholm", "Oslo", "Viena", "Kiev"]);
 break;
 case 9:
 return(["Egypt", "Greece", "Cush", "Mesopotamia"]);
 break;
 case 10:
 return(["Mad Men", "Breaking Bad", "Mr. Smith", "The Cook"]);
 break;
 }
}
nextChoices();

function computerChoice(computerAnswer) {
  switch(questionIndex) {
   case 1:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers K2, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 2:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers carbon, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 3:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Crime and Punishment, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 4:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Alexander the Great, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 5:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Theodore Roosevelt, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 6:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers radius and ulna, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 7:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Rembrandt, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 8:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Stockholm, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 9:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Mesopotamia, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
   case 10:
   if(Math.floor(Math.random() * 11) < 8) {
   computerScore+= 10;
   $('#compScore').effect("bounce");
   $('#compScore').html(computerScore + " pts");
   $('#answerParagraph').html('<p>Computer answers Breaking Bad, which is correct.<p>');
   $('#answerSection').hide("puff");
   $('#hide').show("slide");
   $('#answerParagraph').show();
   }
   else {
   $('#answerParagraph').html('<p>Computer answers incorrectly.<p>');
   $('#answerParagraph').show();
   }
   break;
    }
   }

function compSecondChance(compAnswer) {
  if(Math.floor(Math.random() * 11) < 8) {
    computerScore+= 10;
    $('#compScore').effect("bounce");
    $('#compScore').html(computerScore + " pts");
    $('#answerParagraph').html('<p>Computer answers correctly.</p>');
  }
 else {
  alert("Computer loses!");
 }
}

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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is K2.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is carbon.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is 'Crime and Punishment'.");
  }
  break;
  case 4:
  if(userAnswer == "C") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("That's correct!");}
  else   {
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Alexander the Great.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Theodore Roosevelt.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is radius and ulna.");
  }
  break;
  case 7:
  if(userAnswer == "C") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("That's correct!");}
  else   {
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Rembrandt.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Stockholm.");
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
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Mesopotamia.");
  }
  break;
  case 10:
  if(userAnswer == "B") {
   userScore+= 10;
   $('#scoreBox').effect("bounce");
   $('#scoreBox').html(userScore + " pts");
   return("That's correct!");
  }
  else   {
   window.setTimeout(function(){compSecondChance()},1000);
   return("The correct answer is Breaking Bad.");
  }
  break;
 }
}

$(document).ready(function() {
 $('#hide').hide();
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
  comVar = window.setTimeout(function(){computerChoice()},10250);
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
  comVar = window.setTimeout(function(){computerChoice()},10250);
  $('#answerParagraph').hide();
  $("#answerButtons").show("slide");
 });

 $('#hide').on('click', function(e) {
  e.preventDefault();
  $('#answerSection').show("slide");
  $('#answerParagraph').hide();
  $('#hide').hide("puff");
  questionIndex++;
  $('#questionParagraph').html('<p>' + nextQuestion() + '</p>');
  $('#answerA').html('<p>' + "A) " + nextChoices()[0] + '</p>');
  $('#answerB').html('<p>' + "B) " + nextChoices()[1] + '</p>');
  $('#answerC').html('<p>' + "C) " + nextChoices()[2] + '</p>');
  $('#answerD').html('<p>' + "D) " + nextChoices()[3] + '</p>');
  choicesIndex++;
  comVar = window.setTimeout(function(){computerChoice()},10250);
 });

  $('#answerA').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("A");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  clearTimeout(comVar);
  $('#answerParagraph').show();
  $("#answerButtons").hide("puff");
 });

 $('#answerB').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("B");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  clearTimeout(comVar);
  $('#answerParagraph').show();
  $("#answerButtons").hide("puff");
 });

 $('#answerC').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("C");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  clearTimeout(comVar);
  $('#answerParagraph').show();
  $("#answerButtons").hide("puff");
 });

 $('#answerD').click(function(e) {
  e.preventDefault();
  $("input:text").val("D");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  clearTimeout(comVar);
  $('#answerParagraph').show();
  $("#answerButtons").hide("puff");
 });
});
