var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
  if(userScore >= 200) {
    return(" Excellent job! You've mastered this material.");
   }
   else if(userScore > 125) {
    return(" Good job. With a little bit more work you can master this material.");
   }
   else {
    return(" Keep working, you'll get this stuff down eventually.");
   }
 }

 function nextQuestion() {
  switch(questionIndex) {
   case 1:
   return("Vapid =");
   break;
   case 2:
   return("Loquacious =");
   break;
   case 3:
   return("Mollify =");
   break;
   case 4:
   return("Stymie =");
   break;
   case 5:
   return("Bombastic =");
   break;
   case 6:
   return("Alacrity =");
   break;
   case 7:
   return("Pristine =");
   case 8:
   return("Pungent =");
   break;
   case 9:
   return("Hegemony =");
   break;
   case 10:
   return("Phlegmatic =");
   break;
   case 11:
   return("Spurious =");
   break;
   case 12:
   return("Obdurate =");
   break;
   case 13:
   return("Ameliorate =");
   break;
   case 14:
   return("Opaque =");
   case 15:
   return("Sacrosanct =");
   break;
   case 16:
   return("Inveigle =");
   break;
   case 17:
   return("Sedulous =");
   break;
   case 18:
   return("Tacit =");
   break;
   case 19:
   return("Rescind =");
   case 20:
   return("Truculent =");
   break;
   case 21:
   return("Veracity =");
   break;
   case 22:
   return("Voracious =");
   break;
   case 23:
   return("Bucolic =");
   break;
   case 24:
   return("Dearth =");
   case 25:
   return("Pervade =");
   default:
   return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
  case 1:
  return(["Vaporous", "Unintelligent", "Dull", "Laconic"]);
  break;
  case 2:
  return(["Talkative", "Fluid", "Intelligent", "Terse"]);
  break;
  case 3:
  return(["To anger", "To sooth", "To impugn", "To destroy"]);
  case 4:
  return(["To block", "To stink", "To squander", "To retaliate"]);
  break;
  case 5:
  return(["Combative", "Voracious", "Weak", "Pompous speech"]);
  break;
  case 6:
  return(["Humorous imitation", "Overly sensitive", "Quick witted", "Enthusiastic willingness"]);
  break;
  case 7:
  return(["Corrupted", "Pure", "Stale", "Light green"]);
  break;
  case 8:
  return(["A strong smell", "Combative", "Snub-nosed", "Derisive"]);
  break;
  case 9:
  return(["A field of hedges", "Flexible rule", "A dominant ideology", "An elite school"]);
  case 10:
  return(["Pragmatic", "Calm", "Mucosy", "Emotional"]);
  break;
  case 11:
  return(["Barbed", "Invalid", "Truthful", "Closed in"]);
  break;
  case 12:
  return(["Intractable", "Phony", "Circular", "Laconic"]);
  case 13:
  return(["To destroy", "To excuse", "To improve", "To impugn"]);
  case 14:
  return(["Glassy", "Round", "Viscous", "Not transparent"]);
  break;
  case 15:
  return(["Sacred", "Morbid", "Unintelligible", "Expensive"]);
  case 16:
  return(["To censure", "To quote", "To obtain by flattery", "To move stealthfully"]);
  break;
  case 17:
  return(["Diligent", "Truthful", "Unmovable", "Vain"]);
  break;
  case 18:
  return(["Craven", "Bold", "Implied", "Unhindered"]);
  break;
  case 19:
  return(["To send away", "To retract", "To cut", "To object"]);
  break;
  case 20:
  return(["Witty", "Strange", "Strong", "Fierce"]);
  break;
  case 21:
  return(["Dishonesty", "Approximate reality", "Truthfulness", "Ascetic"]);
  break;
  case 22:
  return(["Insatiable appetite", "Vicious", "Mean spirited", "Very large"]);
  break;
  case 23:
  return(["Sickly", "Urbane", "Delicate", "Pastoral"]);
  break;
  case 24:
  return(["A fort", "Scarcity", "A serious person", "A bird species"]);
  break;
  case 25:
  return(["To parade", "To permeate", "To adjust", "To stifle"]);
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
  return("The correct answer is dull.");
}
break;
case 2:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is talkative.");
}
break;
case 3:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to sooth.");
}
break;
case 4:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to block.");
}
break;
case 5:
if(userAnswer == "D") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is to pompous speech.");
}
break;
case 6:
if(userAnswer == "D") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is enthusiastic willingness.");
}
break;
case 7:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is pure.");
}
break;
case 8:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is a strong smell.");
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
  return("The correct answer is a dominant ideology.");
}
break;
case 10:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is calm.");
}
break;
case 11:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is invalid.");
}
break;
case 12:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is intractable.");
}
break;
case 13:
if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is to improve.");
}
break;
case 14:
if(userAnswer == "D") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is not transparent.");
}
break;
case 15:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is sacred.");
}
break;
case 16:
if(userAnswer == "C") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else   {
 return("The correct answer is obtain by flattery.");
}
break;
case 17:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is diligent.");
}
break;
case 18:
if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is implied.");
}
break;
case 19:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to retract.");
}
break;
case 20:
if(userAnswer == "D") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is to pompous speech.");
}
break;
case 21:
if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
   }
 else   {
  return("The correct answer is truthfulness.");
}
break;
case 22:
if(userAnswer == "A") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to insatiable appetite.");
}
break;
case 23:
if(userAnswer == "D") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
 return("The correct answer is to pastoral.");
}
break;
case 24:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to scarcity");
}
break;
case 25:
if(userAnswer == "B") {
 userScore+= 10;
 $('#scoreBox').effect("bounce");
 $('#scoreBox').html(userScore + " pts");
 return("That's correct!");
}
else {
  return("The correct answer is to permeate.");
}
break;
 }
}

$(document).ready(function() {
 $('#game').hide();
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










