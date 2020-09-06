'use strict';

let lista = $('ul');

$(function(){
  $('#hakunappi').click(function() {
    lista.empty();
    let haku = $('#hakuteksti').val();
    $.getJSON('https://api.tvmaze.com/search/shows?q=$' + haku,function(data) {
      $.each(data, function(index, value){
        if(value.show.image !== null){
          lista.append('<li><img src="' + value.show.image.medium + '" width="210px" height="295px"><h3>'+ value.show.name +'</h3>'+ value.show.summary + '</li>')
        } else {
          lista.append('<li><img src="https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif" width="210px" height="295px"><h3>'+ value.show.name +'</h3>'+ value.show.summary + '</li>')
        }
      });
    });
  });
});