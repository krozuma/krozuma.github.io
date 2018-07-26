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
 return("Where would you find examples of domain Archaea?");
 break;
 case 2:
 return("Organisms in this kingdom have flagella, dual nuclei; and simple cytoskeletons?");
 break;
 case 3:
 return("This domain has an internal membranous stystem and symbiosis with prokaryotes like mitochondria?");
 break;
 case 4:
 return("Yeasts are an example of which kingdom?");
 break;
 case 5:
 return("Organisms in this kingdom are characterized as multicellular eukaryotes that (generally) photosynthesize?");
 break;
 case 6:
 return("Which organism is an example of kingdom Animalia and phylum Cnidaria?");
 break;
 case 7:
 return("Which organism is an example of kingdom Animalia and phylum Mollusca?");
 break;
 case 8:
 return("Which organism is an example of kingdom Animalia and phylum Aves?");
 break;
 case 9:
 return("Organisms from from kingdom Animalia and what phylum produce milk, have keratinized hair and have large brains?");
 break;
 case 10:
 return("Organisms from kingdom Animalia and what phylum feed with clawlike appendages and generally have simple eyes?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Deserts", "Jungles", "Deep-sea vents", "Rivers"]);
 break;
 case 2:
 return(["Archaezoa", "Euglenozoa", "Stramenopila", "Rhodophyta"]);
 break;
 case 3:
 return(["Eukarya", "Archaea", "Bacteria", "Monera"]);
 break;
 case 4:
 return(["Rhodophyta", "Fungi", "Plantae", "Animalia"]);
 break;
 case 5:
 return(["Plantae", "Euglenozoa", "Fungi", "Stramenopila"]);
 break;
 case 6:
 return(["Giant panda", "Salmon", "Box jellyfish", "Earth worm"]);
 break;
 case 7:
 return(["Razor clam", "Gecko lizard", "Red Kangaroo", "Fruit bat"]);
 break;
 case 8:
 return(["Black Widow spider", "Bald Eagle", "Bull shark", "Poison Dart frog"]);
 break;
 case 9:
 return(["Osteichthyes", "Chelicerata", "Mammalia", "Reptillia"]);
 break;
 case 10:
 return(["Chelicerata", "Amphibia", "Nemertea", "Annelida"]);
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
  return("The correct answer is deep-sea vents.");
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
  return("The correct answer is Archaezoa.");
 }
 break;
 case 3:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Eukarya.");
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
  return("The correct answer is Fungi.");
 }
 break;
 case 5:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Plantae.");
 }
 break;
 case 6:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is box jellyfish.");
 }
 break;
 case 7:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Razor clam.");
 }
 break;
 case 8:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Bald Eagle.");
 }
 break;
 case 9:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html("Player Score: " + userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is deep-sea vents.");
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
  return("The correct answer is Chelicerata.");
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
