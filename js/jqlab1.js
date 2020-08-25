'use strict';

$(function() {
  $('p:eq(1)').attr('id', 'sp');

  $('#fp').remove();

  $('#fdiv').css({backgroundColor: 'grey', color: 'white'});

  $('button').click(function() {
    $('#fdiv').append('<p id="tp">Hello User!</p>');
  });


  $('#sdiv').hover(function() {
    //$('#4p').show();
    $('#4p').text('About to click a link...');
  }, function() {
    //$('#4p').hide();
    $('#4p').html('&nbsp;');
  });

});
