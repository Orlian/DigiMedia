'use strict';

let lista = $('ul');

$(function(){
  $('#hakunappi').click(function() {
    lista.empty();
    let haku = $('#hakuteksti').val();
    $.getJSON('https://api.tvmaze.com/search/shows?q=$' + haku,function(data) {
      $.each(data, function(index, value){
        if(value.show.image !== null){
          lista.append('<li><img src="' + value.show.image.medium + '"><h3>'+ value.show.name +'</h3>'+ value.show.summary + '</li>')
        } else {
          lista.append('<li><img src=""><h3>'+ value.show.name +'</h3>'+ value.show.summary + '</li>')
        }
      });
    });
  });
});