'use strict';

$('button').click(function(){
  $('#advice').text('select your favourite colour among the colours');
  $('img:eq(0)').attr('src', 'img/blue.jpg');
  $('img:eq(1)').attr('src', 'img/red.jpg');
  $('img:eq(2)').attr('src', 'img/yellow.jpg');
  $('#sel').text('your favourite colours in order');
  $('img').show();
  $('ul').empty();
});

$('img').click(function() {
  $(this).hide();
  let source = $(this).attr('src');
  if(source.includes('blue')){
    $('ul').append('<li>blue</li>')
  } else if(source.includes('red')){
    $('ul').append('<li>red</li>')
  } else {
    $('ul').append('<li>yellow</li>')
  }
});