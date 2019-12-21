(function ($) {
 $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
     
      $('.newnav').css('display', 'flex');

    } else if (scrollTop == 0) {

    
     $('.newnav').css('display', 'none');
    }
  });
})(jQuery);
