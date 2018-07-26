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
 return("What is the name of bone number 21?");
 break;
 case 2:
 return("What is the name of bone number 8?");
 break;
 case 3:
 return("What is the name of bone number 14?");
 break;
 case 4:
 return("What is the name of bone number 10?");
 break;
 case 5:
 return("What is the name of bone number 16?");
 break;
 case 6:
 return("What is the name of bone number 24?");
 case 7:
 return("What is the name of bone number 11?");
 break;
 case 8:
 return("What is the name of bone number 13?");
 break;
 case 9:
 return("What is the name of bone number 5?");
 break;
 case 10:
 return("What is the name of bone number 12?");
 break;
 case 11:
 return("What is the name of bone number 23?");
 break;
 case 12:
 return("What is the name for the bones indicated by number 20?");
 break;
 case 13:
 return("What is the name for the bones indicated by number 6?");
 case 14:
 return("What is the name of bone number 9?");
 break;
 case 15:
 return("What is the name of bone number 22?");
 case 16:
 return("What is the name of bone number 17?");
 break;
 case 17:
 return("How many cervical vertebrae are there generally?");
 break;
 case 18:
 return("What is the name for the bones indicated by number 15?");
 break;
 case 19:
 return("How many thoracic vertebrae are there?");
 break;
case 20:
return("What is the name for the bones indicated by number 18?");
break;
case 21:
return("The forearm is composed of what two bones?");
break;
case 22:
return("How many lumbar vertebrae are there?");
break;
case 23:
return("What is the name for the bones indicated by number 19?");
break;
case 24:
return("What is the name for the bones indicated by number 25");
case 25:
return("How many bones are generally in the adult body?");
break;
default:
return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Femur", "Humerus", "Tibia", "Fibula"]);
 break;
 case 2:
 return(["Parietal", "Occipital", "Frontal", "Spenoid"]);
 break;
 case 3:
 return(["Ulna", "Humerus", "Radius", "Tibia"]);
 case 4:
 return(["Tibia", "Clavicle", "Scapula", "Occipital"]);
 break;
 case 5:
 return(["Ulna", "Humerus", "Scapula", "Radius"]);
 break;
 case 6:
 return(["Humerus", "Tibia", "Fibula", "Patella"]);
 case 7:
 return(["Manubrium", "Ilium", "Sternum", "Talus"]);
 break;
 case 8:
 return(["Clavicle", "Calcaneus", "Ulna", "Scapula"]);
 break;
 case 9:
 return(["Navicular", "Sacrum", "Pubis", "Ilium"]);
 break;
 case 10:
 return(["Hyoid", "Maxilla", "Sternum", "Parietal"]);
 break;
 case 11:
 return(["Ischium", "Trochanter", "Tibia", "Fibula"]);
 break;
 case 12:
 return(["Phalanges", "Carpals", "Metacarpals", "Metatarsals"]);
 break;
 case 13:
 return(["Ilium", "Coccyx", "Ischium", "Condyles"]);
 break;
 case 14:
 return(["Temporal", "Maxilla", "Xiphoid process", "Mandible"]);
 break;
 case 15:
 return(["Patella", "Cuboid", "Epicondyle", "Ulna"]);
 break;
 case 16:
 return(["Ulna", "Radius", "Humerus", "Tibia"]);
 break;
 case 17:
 return(["12", "5", "7", "4"]);
 case 18:
 return(["Talus", "Ribs", "Olecranon", "Metatarsals"]);
 break;
 case 19:
 return(["7", "5", "10", "12"]);
 break;
 case 20:
 return(["Carpals", "Metatarsals", "Metacarpals", "Acromion"]);
 break;
 case 21:
 return(["Fibula and tibia", "Radius and ulna", "Femur and humerus", "Scapula and clavicle"]);
 break;
 case 22:
 return(["3", "7", "5", "12"]);
 break;
 case 23:
 return(["Phalanges", "Metatarsals", "Accetabulum", "Metacarpals"]);
 break;
 case 24:
 return(["Cuneiforms", "Ilium", "Ischium", "Hyoid"]);
 break;
 case 25:
 return(["300", "173", "206", "250"]);
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
  $('#scoreBox').html(userScore + " pts");
  return("Yes, femur is correct!");
  }
  else   {
   return("The correct answer is femur.");
  }
  break;
  case 2:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, frontal is correct!");
  }
  else   {
   return("The correct answer is frontal.");
  }
  break;
  case 3:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, humerus is correct!");
   }
  else   {
   return("The correct answer is humerus.");
  }
  break;
  case 4:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, clavicle is correct!");
   }
  else   {
   return("The correct answer is clavicle.");
  }
  break;
  case 5:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, radius is correct!");
   }
  else   {
   return("The correct answer is radius.");
  }
  break;
  case 6:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, fibula is correct!");
  }
  else   {
   return("The correct answer is fibula.");
  }
  break;
  case 7:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, manubrium is correct!");
  }
  else   {
   return("The correct answer is manubrium.");
  }
  break;
  case 8:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, scapula is correct!");
   }
  else   {
   return("The correct answer is scapula.");
  }
  break;
  case 9:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, sacrum is correct!");
   }
  else   {
   return("The correct answer is sacrum.");
  }
  break;
  case 10:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, sternum is correct!");
  }
  else   {
   return("The correct answer is sternum.");
  }
  break;
  case 11:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, tibia is correct!");
  }
  else   {
   return("The correct answer is tibia.");
  }
  break;
  case 12:
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
  case 13:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, coccyx is correct!");
   }
  else   {
   return("The correct answer is coccyx.");
  }
  break;
  case 14:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, mandible is correct!");
   }
  else   {
   return("The correct answer is mandible.");
  }
  break;
  case 15:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, patella is correct!");
  }
  else   {
   return("The correct answer is patella.");
  }
  break;
  case 16:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, ulna is correct!");
  }
  else   {
   return("The correct answer is ulna.");
  }
  break;
  case 17:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, 7 is correct!");
  }
  else   {
   return("The correct answer is 7.");
  }
  break;
  case 18:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, ribs is correct!");
   }
  else   {
   return("The correct answer is ribs.");
  }
  break;
  case 19:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, 12 is correct!");
   }
  else   {
   return("The correct answer is 12.");
  }
  break;
  case 20:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, carpals is correct!");
  }
  else   {
   return("The correct answer is carpals.");
  }
  break;
  case 21:
  if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, radius and ulna is correct!");
   }
  else   {
   return("The correct answer is radius and ulna.");
  }
  break;
  case 22:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, five is correct!");
  }
  else   {
   return("The correct answer is five.");
  }
  break;
  case 23:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, metacarpals is correct!");
   }
  else   {
   return("The correct answer is metacarpals.");
  }
  break;
  case 24:
  if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, cuneiforms is correct!");
  }
  else   {
   return("The correct answer is cuneiforms.");
  }
  break;
  case 25:
  if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, 206 is correct!");
  }
  else   {
   return("The correct answer is 206.");
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
