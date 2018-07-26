var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
 if(userScore >= 200) {
  return(" Excellent job! You've mastered this material.");
 }
 else if(userScore > 150) {
  return(" Good job. With a little bit more work you can master this material.");
 }
 else {
  return(" Keep working, you'll get this stuff down eventually.");
  }
 }

function nextQuestion() {
 switch(questionIndex) {
 case 1:
 return("Waver =");
 break;
 case 2:
 return("Lucid =");
 break;
 case 3:
 return("Demur =");
 break;
 case 4:
 return("Hubris =");
 break;
 case 5:
 return("Plummet =");
 break;
 case 6:
 return("Quotidian =");
 break;
 case 7:
 return("Indifferent =");
 break;
 case 8:
 return("Erudite =");
 break;
 case 9:
 return("Obfuscate =");
 break;
 case 10:
 return("Neologism =");
 break;
 case 11:
 return("Sordid =");
 break;
 case 12:
 return("Germane =");
 break;
 case 13:
 return("Urbane =");
 break;
 case 14:
 return("Evanescent =");
 break;
 case 15:
 return("Laud =");
 break;
 case 16:
 return("Enervate =");
 break;
 case 17:
 return("Occlude =");
 break;
 case 18:
 return("Craven =");
 break;
 case 19:
 return("Dubious =");
 break;
 case 20:
 return("Hackneyed =");
 break;
 case 21:
 return("Inherent =");
 break;
 case 22:
 return("Preen =");
 break;
 case 23:
 return("Soporific =");
 break;
 case 24:
 return("Probity =");
 break;
 case 25:
 return("Terse =");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Stubborn", "To vacillate", "To bet", "Disinterested"]);
 break;
 case 2:
 return(["Rounded", "Opaque", "Wise", "Clear"]);
 break;
 case 3:
 return(["To flatter", "To object", "To woo", "To locate"]);
 break;
 case 4:
 return(["Decadent", "Remorseful", "Obtuse", "Prideful"]);
 break;
 case 5:
 return(["To arrange", "To abscond", "To drop", "To flourish"]);
 break;
 case 6:
 return(["Sturdy", "Inventive", "Commonplace", "Deferential"]);
 break;
 case 7:
 return(["Surprised", "Uninformed", "Vague", "Disinterested"]);
 break;
 case 8:
 return(["Scholarly", "Classical", "Ignorant", "Grandiloquent"]);
 break;
 case 9:
 return(["To object", "To adjust", "To brighten", "To confuse"]);
 break;
 case 10:
 return(["A recruit", "An argument", "A new phrase", "A new order"]);
 break;
 case 11:
 return(["Orderly", "Clandestine", "Clean", "Vile"]);
 break;
 case 12:
 return(["Lengthy", "Pertinent", "Germanic", "Dense"]);
 break;
 case 13:
 return(["Depressed", "Bucolic", "Witty", "Sophisticated"]);
 break;
 case 14:
 return(["Fleeting", "Significant", "Stolid", "Grand"]);
 break;
 case 15:
 return(["To praise greatly", "To undermine", "To equivocate", "To threaten"]);
 break;
 case 16:
 return(["To improve", "To weaken", "To anesthetize", "To prompt"]);
 break;
 case 17:
 return(["To look into", "To destroy", "To raise", "To close"]);
 break;
 case 18:
 return(["Cowardly", "Evil", "Destitute", "Chiseled"]);
 break;
 case 19:
 return(["Cleaver", "Abstract", "Doubtful", "Close minded"]);
 break;
 case 20:
 return(["Critical", "Trite", "Inventive", "Laconic"]);
 break;
 case 21:
 return(["A permanent quality", "Stable", "Fish-like", "Homebound"]);
 break;
 case 22:
 return(["To primp", "To confess", "To dote", "To learn"]);
 break;
 case 23:
 return(["Cleanly", "Sleep inducing", "Horrific", "Clumsy"]);
 break;
 case 24:
 return(["A small amount", "Shrewd", "Likely", "Integrity"]);
 break;
 case 25:
 return(["A tense situation", "Concise verbiage", "Consolatory", "Skillful"]);
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
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
  return("The correct answer is to vacillate.");
 }
 break;
 case 2:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is to clear.");
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
  return("The correct answer is to object.");
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
  return("The correct answer is to prideful.");
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
  return("The correct answer is to drop.");
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
  return("The correct answer is commonplace.");
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
  return("The correct answer is disinterested.");
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
  return("The correct answer is scholarly.");
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
  return("The correct answer is to confuse.");
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
  return("The correct answer is a new phrase.");
 }
 break;
 case 11:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is vile.");
 }
 break;
 case 12:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is pertinent.");
 }
 break;
 case 13:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is sophisticated.");
 }
 break;
 case 14:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is fleeting.");
 }
 break;
 case 15:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is to praise greatly.");
 }
 break;
 case 16:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is to weaken.");
 }
 break;
 case 17:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is to close.");
 }
 break;
 case 18:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is cowardly.");
 }
 break;
 case 19:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is a doubtful.");
 }
 break;
 case 20:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is trite.");
 }
 break;
 case 21:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is a permanent quality.");
 }
 break;
 case 22:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is to primp.");
 }
 break;
 case 23:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is sleep inducing.");
 }
 break;
 case 24:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is integrity.");
 }
 break;
 case 25:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is concise verbiage.");
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
 });

 $('#answerA').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("A");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
 });
 $('#answerB').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("B");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
 });
 $('#answerC').on('click', function(e) {
  e.preventDefault();
  $("input:text").val("C");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
 });
 $('#answerD').click(function(e) {
  e.preventDefault();
  $("input:text").val("D");
  var userAnswer = $('#answer').val();
  $('#answerParagraph').html('<p>' + compareAnswers(userAnswer) + '</p>');
  questionIndex++;
  $('#answerParagraph').show();
 });
});
