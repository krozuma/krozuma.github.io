userScore = 0;
$(document).ready(function() {
  $('#return').on('click', function(e) {
  e.preventDefault();
  var userAnswer = $('#answer').val()
  $('#next').on('click', function () {}

if(userAnswer.toUpperCase() == "K2") {
  $('main').load('Gen1corr.html main');
  userScore+= 10;
  $('#scoreBox').html('<h1>' + userScore + " pts" + '</h1>');
   }
 else {
  $('main').load('Gen1wro.html main');
 }
  });
 });
