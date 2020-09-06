'use strict';


$(function(){
  $('#hakunappi').click(function() {
    lista.empty();
    let haku = $('#hakuteksti').val();
    $.getJSON('https://api.tvmaze.com/search/shows?q=$' + haku,function(data) {
      console.log(data, haku);
      /*
       for(let i = 0; i < data.length; i++){
          console.log(data[i]);
       }
       */
      $.each(data, function(index, value){
        console.log(value);
      });
    });
  });

  let lista = $('ul');

});