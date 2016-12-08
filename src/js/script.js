

'use strict'

$(function() {


    $('.jcarousel')
        .jcarousel({
            animation: 'slow',
            wrap: 'circular'
        })

    .jcarouselAutoscroll({
        interval: 6000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel_prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel_next').jcarouselControl({
        target: '+=1'
    });

    $('.grid').isotope({
        // options
        itemSelector: '.grid--item',
        layoutMode: 'fitRows'
    });


var search = '';

  function getImgByRequest(search){

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=thumbnail',
    success: function(data){
      var html = $('#template').html();
      var content = tmpl(html, {data: data.images});

      $('.grid').remove();
      $('.ideas__title').append(content);
      $('.grid').isotope({
        itemSelector: '.tile--ideas',
        layoutMode: 'masonry',
        masonry: {
                gutter: 5
            }
      });
    }
  });
}
 
    $('.form__input').on('click', function(e) {
        e.preventDefault();
        var query = $('.form__edit');
        getImgByRequest(encodeURIComponent(query.val()));
        query.val('');

    });


    getImgByRequest();

});
