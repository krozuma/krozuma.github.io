var userScore = 0;
var questionIndex = 1;
var choicesIndex = 1;

function evaluation() {
 if(userScore >= 176) {
  return(" Excellent job! You've mastered this material.");
 }
 else if(userScore > 110) {
  return(" Good job. With a little bit more work you can master this material.");
 }
 else {
  return(" Keep working, you'll get this stuff down eventually.");
  }
 }

function nextQuestion() {
 switch(questionIndex) {
 case 1:
 return("What is structure 1?");
 break;
 case 2:
 return("What is structure 1.1?");
 break;
 case 3:
 return("What is structure 1.2?");
 break;
 case 4:
 return("What is structure 1.3?");
 break;
 case 5:
 return("What is structure 1.4?");
 break;
 case 6:
 return("What is structure 1.5?");
 break;
 case 7:
 return("What is structure 2?");
 break;
 case 8:
 return("What is structure 3?");
 break;
 case 9:
 return("What is structure 4?");
 break;
 case 10:
 return("What is structure 5?");
 break;
 case 11:
 return("What is structure 6?");
 break;
 case 12:
 return("What is structure 7?");
 break;
 case 13:
 return("What is structure 8?");
 break;
 case 14:
 return("What is structure 9?");
 break;
 case 15:
 return("What is structure 10?");
 break;
 case 16:
 return("What is structure 11?");
 break;
 case 17:
 return("What is structure 12?");
 break;
 case 18:
 return("What is structure 13?");
 break;
 case 19:
 return("What is structure 14?");
 break;
 case 20:
 return("What is structure 15?");
 break;
 case 21:
 return("What is structure 16?");
 break;
 case 22:
 return("What is structure 17?");
 break;
 case 23:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Lysosome", "Center", "Nucleus", "Golgi Apparatus"]);
 break;
 case 2:
 return(["Peroxisome", "Reticulum", "Nuclear pore", "Actin"]);
 break;
 case 3:
 return(["Centrosome", "Cytoplasm", "Ribosome", "Chromatin"]);
 break;
 case 4:
 return(["Nuclear wall", "Actin", "Nuclear envelope", "Rostrum"]);
 break;
 case 5:
 return(["Nucleus", "Lysosome", "Marrow", "Plasma"]);
 break;
 case 6:
 return(["Endrorostrum", "Spondulum", "Centrome", "Nucleolus"]);
 break;
 case 7:
 return(["Perimesium", "Superficial membrane", "Plasma membrane", "Cell wall"]);
 break;
 case 8:
 return(["Transverse process", "Hyoid", "Actin", "Golgi vesicles"]);
 break;
 case 9:
 return(["Chromatin", "Peroxisome", "Ribosomes", "Lysosome"]);
 break;
 case 10:
 return(["Actin", "Centrosome", "Latisimus dorsi", "Rough endoplasmic reticulum"]);
 break;
 case 11:
 return(["Smooth endoplasmic reticulum", "Spondulum", "Mastoid", "Mitochondrion"]);
 break;
 case 12:
 return(["Actin filaments", "Trebeculae", "Endoplasmic ligaments", "Centrosome"]);
 break;
 case 13:
 return(["Axon", "Flagellum", "Hillock", "Proboscis"]);
 break;
 case 14:
 return(["Peroxisome", "Lysosome", "Centrosome", "Anteoxisome"]);
 break;
 case 15:
 return(["Transfillament", "Spondulum", "Actin", "Microtubule"]);
 break;
 case 16:
 return(["Lysosome", "Actisome", "Endosome", "Perisome"]);
 break;
 case 17:
 return(["Vesicles", "Ganglia", "Ions", "Free ribosomes"]);
 break;
 case 18:
 return(["Trebeculae", "Spondulum", "Mitochondrion", "Golgi apparatus"]);
 break;
 case 19:
 return(["Intermediate filaments", "Transfillament", "Epifillament", "Endofillament"]);
 break;
 case 20:
 return(["Ectoplasm", "Cytoplasm", "Transplasm", "Epiplasma"]);
 break;
 case 21:
 return(["Cell pore", "Secretory vesicle", "Spondulum", "Transport vesicle"]);
 break;
 case 22:
 return(["Lysosome", "Episome", "Peroxisome", "Centrosome"]);
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
  return("The correct answer is nucleus.");
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
  return("The correct answer is nuclear pore.");
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
  return("The correct answer is chromatin.");
 }
 break;
 case 4:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is nuclear envelope.");
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
 return("The correct answer is nucleus.");
 }
 break;
 case 6:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is nucleolus.");
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
  return("The correct answer is plasma membrane.");
 }
 break;
 case 8:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, golgi vesicles (or apparatus) is correct!" );
 }
 else   {
  return("The correct answer is golgi vesicles (or apparatus).");
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
  return("The correct answer is ribosomes.");
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
  return("The correct answer is rough endoplasmic reticulum.");
 }
 break;
 case 11:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is smooth endoplasmic reticulum.");
 }
 break;
 case 12:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is actin filaments.");
 }
 break;
 case 13:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is flagellum.");
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
 return("The correct answer is peroxisome.");
 }
 break;
 case 15:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is microtuble.");
 }
 break;
 case 16:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is lysosome.");
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
  return("The correct answer is free ribosomes.");
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
  return("The correct answer is mitochondrion.");
 }
 break;
 case 19:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is intermediate filaments.");
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
 return("The correct answer is cytoplasm.");
 }
 break;
 case 21:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
 return("The correct answer is secretory vesicle.");
 }
 break;
 case 22:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, centrosome with two centrioles is correct");
 }
 else   {
  return("The correct answer is centrosome with two centrioles.");
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
  $('#answerSection').show("slide");
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
