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
 return("Who painted the 'Night Watch' in 1642?");
 break;
 case 2:
 return("Who sculpted 'Moses'?");
 break;
 case 3:
 return("Who created this painting?");
 break;
 case 4:
 return("Who painted 'Large Cowper Madonna'?");
 break;
 case 5:
 return("Who created this painting?");
 break;
 case 6:
 return("When did Leonardo da Vinci paint the 'Mona Lisa'?");
 break;
 case 7:
 return("Who painted 'The Arnolfini Portrait'?");
 break;
 case 8:
 return("Who created this painting?");
 break;
 case 9:
 return("Who painted 'The Garden of Earthly Delights'?");
 break;
 case 10:
 return("Who created this painting?");
 break;
 case 11:
 return("Who created this painting?");
 break;
 case 12:
 return("What is this structure?");
 return;
 case 13:
 return("Who painted 'The Luncheon of the Boating Party'?");
 break;
 case 14:
 return("Who created this painting?");
 break;
 case 15:
 return("What is the title of this painting?");
 break;
 case 16:
 return("Who created this painting?");
 break;
 case 17:
 return("Who painted 'The Dance Class'?");
 break;
 case 18:
 return("Who painted 'Sunlight on the Coast'?");
 break;
 case 19:
 return("When did David paint 'The Death of Jean-Paul Marat'?")
 break;
 case 20:
 return("Who created this painting?");
 break;
 case 21:
 return("Who created this painting?");
 break;
 case 22:
 return("Who painted 'Wheat Field with Crows'?");
 break;
 case 23:
 return("Who is the architect of this structure?");
 break;
 case 24:
 return("Who created this painting?");
 break;
 case 25:
 return("Who created this fresco?");
 break;
 default:
 return("You earned " + userScore + " points." + evaluation());
 }
}

function nextChoices() {
 switch(choicesIndex) {
 case 1:
 return(["Peter Paul Rubens", "Rembrandt", "Jan van Eyck", "Raphael"]);
 break;
 case 2:
 return(["Leonardo da Vinci", "Donatello", "Gian Lorenzo Bernini", "Michelangelo"]);
 break;
 case 3:
 return(["Jacques-Louis David", "Caravaggio", "Peter Paul Rubens", "Titian"]);
 break;
 case 4:
 return(["Raphael", "Leonardo da Vinci", "Johannes Vermeer", "Gian Bernini"]);
 break;
 case 5:
 return(["Rembrandt", "Peter Paul Rubens", "Caravaggio", "Jan van Eyck"]);
 break;
 case 6:
 return(["Between 1610 and 1612", "Between 1503 and 1506", "Between 1457 and 1459", "Between 1490 and 1493"]);
 break;
 case 7:
 return(["Johannes Vermeer", "Michelangelo", "Jan van Eyck", "Pieter Bruegel the Elder"]);
 break;
 case 8:
 return(["Diego Val&#xE1;zquez", "El Greco", "Francisco Goya", "Titian"]);
 break;
 case 9:
 return(["Hieronymus Bosch", "Rembrandt", "Pieter Bruegel the Elder", "Gian Lorenzo Bernini"]);
 break;
 case 10:
 return(["El Greco", "Georges de La Tour", "Johannes Vermeer", "Diego Val&#xE1;zquez"]);
 break;
 case 11:
 return(["Edgar Degas", "Vincent van Gogh", "Claude Monet", "Pierre-Auguste Renoir"]);
 break;
 case 12:
 return(["Notre-Dame de Paris", "Big Ben", "Canterbury", "St. Peter's Basilica"]);
 break;
 case 13:
 return(["Pierre-Auguste Renoir", "&#xC9;douard Manet", "Paul C&#xE9;zanne", "Claude Monet"]);
 break;
 case 14:
 return(["Georges de La Tour", "Johannes Vermeer", "Rembrandt", "Titian"]);
 break;
 case 15:
 return(["'The Dinner Party'", "'Jesus and His Disciples'", "'Socratic Discourse'", "'The Last Supper'"]);
 break;
 case 16:
 return(["Michelangelo", "Peter Paul Rubens", "Raphael", "Leonardo da Vinci"]);
 break;
 case 17:
 return(["Camille Pissarro", "Edgar Degas", "Mary Cassatt", "Georges Seurat"]);
 break;
 case 18:
 return(["Winslow Homer", "J. M. W. Turner", "Albert Bierstadt", "Rosa Bonheur"]);
 break;
 case 19:
 return(["1780", "1690", "1808", "1793"]);
 break;
 case 20:
 return(["Georges Seurat", "Berthe Morisot", "Alfred Sisley", "Mary Cassatt"]);
 break;
 case 21:
 return(["Rembrandt", "Peter Paul Rubens", "Francisco de Zurbar&#xE1;n", "Gian Bernini"]);
 break;
 case 22:
 return(["&#xC9;douard Manet", "Theodore Robinson", "Vincent van Gogh", "Edgar Degas"]);
 break;
 case 23:
 return(["Frank Gehry", "Frank Llyod Wright", "Adrian Smith", "Richard Morris Hunt"]);
 break;
 case 24:
 return(["Claude Monet", "Paul C&#xE9;zanne", "&#xC9;douard Manet", "Francisco Goya"]);
 break;
 case 25:
 return(["Gian Bernini", "Eug&#xE8;ne Delacroix", "Leonardo da Vinci" , "Michelangelo"]);
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
  return("The correct answer is Rembrandt.");
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
  return("The correct answer is Michelangelo.");
 }
 break;
 case 3:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, David painted the 'The Oath of the Horatii.'");
 }
 else   {
  return("The correct answer is Jacques-Louis David, who painted 'The Oath of the Horatii.'");
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
  return("The correct answer is Raphael.");
 }
 break;
 case 5:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Caravaggio painted 'The Calling of Saint Matthew'.");
 }
 else   {
  return("The correct answer is Caravaggio, who painted 'The Calling of Saint Matthew.'");
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
  return("The correct answer is between 1503 and 1506.");
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
  return("The correct answer is Jan van Eyck.");
 }
 break;
 case 8:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Francisco Goya painted 'The Third of May 1808.'");
 }
 else   {
  return("The correct answer is Francisco Goya, who painted 'The Third of May 1808.'");
 }
 break;
 case 9:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Hieronymus Bosch.");
 }
 break;
 case 10:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Diego Val&#xE1;zquez painted 'Las Meninas.'");
 }
 else   {
  return("The correct answer is Diego Val&#xE1;zquez, who painted 'Las Meninas.'");
 }
 break;
 case 11:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Vincent van Gogh painted 'Starry Night.'");
 }
 else   {
  return("The correct answer is Vincent van Gogh, who painted 'Starry Night.'");
 }
 break;
 case 12:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, it's the Cathédrale Notre-Dame de Paris.'");
 }
 else   {
  return("The correct answer is Notre-Dame de Paris.'");
 }
 break;
 case 13:
 if(userAnswer == "A") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Pierre-Auguste Renoir.");
 }
 break;
 case 14:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Rembrandt painted 'The Anatomy Lesson of Dr. Nicolaes Tulp'.");
 }
 else   {
  return("The correct answer is Rembrandt who painted 'The Anatomy Lesson of Dr. Nicolaes Tulp'.");
 }
  break;
  case 15:
  if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, it's 'The Last Supper' by Leonardo da Vinci.");
 }
 else   {
  return("The correct answer is 'The Last Supper' by Leonardo da Vinci");
 }
 break;
 case 16:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Raphael painted 'The School of Athens.'");
 }
 else   {
  return("The correct answer is Raphael who painted 'The School of Athens.'");
 }
 break;
 case 17:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Edgar Degas");
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
  return("The correct answer is Winslow Homer.");
 }
 break;
 case 19:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is 1793.");
 }
 break;
 case 20:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Mary Cassatt painted 'At the Opera.'");
 }
 else   {
  return("The correct answer Mary Cassatt who painted 'At the Opera.'");
 }
 break;
 case 21:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Peter Paul Rubens painted 'Ecce Homo.'");
 }
 else   {
  return("The correct answer is Peter Paul Rubens, who painted 'Ecce Homo.'");
 }
 break;
 case 22:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("That's correct!");
 }
 else   {
  return("The correct answer is Vincent van Gogh.");
 }
 break;
 case 23:
 if(userAnswer == "B") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Frank Llyod Wright is the architect of 'Fallingwater.'");
 }
 else   {
  return("The correct answer is Frank Llyod Wright, who is the architect of 'Fallingwater.'");
 }
 break;
 case 24:
 if(userAnswer == "C") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, &#xC9;douard Manet painted 'Luncheon on the Grass.'");
 }
 else   {
  return("The correct answer is &#xC9;douard Manet, who painted 'Luncheon on the Grass.'");
 }
 break;
 case 25:
 if(userAnswer == "D") {
  userScore+= 10;
  $('#scoreBox').effect("bounce");
  $('#scoreBox').html(userScore + " pts");
  return("Yes, Michelangelo painted 'The Creation of Adam.'");
 }
 else   {
  return("The correct answer is Michelangelo, who painted 'The Creation of Adam.'");
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
  $('#artSlides').carousel('next');
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
