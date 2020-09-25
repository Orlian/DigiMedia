'use strict';

let lista = $('ul');

$(function() {
  $('#hakunappi').click(function() {
    lista.empty();
    let haku = $('#hakuteksti').val();
    $.getJSON('https://api.tvmaze.com/search/shows?q=' + haku, function(data) {
      console.log(data);
      $.each(data, function(index, value) {
        let tiedot = `<li class="list-group-item">
                        <div class="row">
                          <div class="col-sm-2">
                              <img src="${value.show.image ?
                              value.show.image.medium :
                              'https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif'}" width="210px" height="295px">
                          </div>
                           <div class="col-sm-10"> 
                            <h3>${value.show.name}</h3> ${value.show.summary}
                            </div>
                        </div>
                      </li>`;
        lista.append(tiedot);
      });
    });
  });
});