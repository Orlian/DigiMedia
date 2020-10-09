'use strict';

let lista = $('ul');
let body = $('html');
let inputValue = $('#hakuteksti');
let topBtn = $('#top_btn');


$('#hakunappi').click(sarjaHaku);
inputValue.keyup(function(event){
  if(event.which === 13){
    sarjaHaku();
  }
});

topBtn.click(function(){
  body.animate({scrollTop:0}, 500);
});

function sarjaHaku(){
  lista.empty();
  let haku = inputValue.val();
  $.getJSON('https://api.tvmaze.com/search/shows?q=' + haku, function(data) {
    console.log(data);
    $.each(data, function(index, value) {
      let tiedot = `<li class="m-3 border border-dark rounded">
                        <div class="row">
                          <div class="col-auto">
                              <img class="border-right border-dark rounded" src="${value.show.image ?
          value.show.image.medium :
          'https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif'}" width="210px" height="295px" alt="picture of the show">
                          </div>
                           <div class="col-sm-9 mx-2 my-3"> 
                            <h3><strong>${value.show.name}</strong></h3> ${value.show.summary}
                            <p class="font-weight-light">${value.show.rating.average ?
          'Rating: ' + value.show.rating.average + ' / 10' :
          'No ratings yet'}</p>
                            <a class="" href="${value.show.officialSite ?
          value.show.officialSite :
          '#'}">${value.show.officialSite ? 'Official Site' : ''}</a>
                            </div>
                        </div>
                      </li>`;
      lista.append(tiedot);
    });
  });
}