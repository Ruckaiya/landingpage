$(function () {
    let headerElem = $('header');
    let logo = $('#logo');
    let navMenu = $('#nav-menu');
    let navToggle = $('#nav-toggle');

   $('#properties-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
   });

   $('#testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
        nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
   });

   navToggle.on('click', () => {
       navMenu.css('right', '0');
   });

   $('#close-flyout').on('click', () => {
        navMenu.css('right', '-100%');
   });

   $(document).on('click', (e) => {
       let target = $(e.target);
       if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
           navMenu.css('right', '-100%');
       }
   });

   $(document).scroll(() => {
       let scrollTop = $(document).scrollTop();

       if (scrollTop >= 200) {
           navMenu.addClass('is-sticky');
           logo.css('color', '#000');
           headerElem.css('background', 'rgb(207,12,12)');
           navToggle.css('border-color', '#000');
           navToggle.find('.strip').css('background-color', '#000');
       } else {
           navMenu.removeClass('is-sticky');
           logo.css('color', '#fff');
           headerElem.css('background', 'rgb(212, 212, 212)');
           navToggle.css('bordre-color', '#fff');
           navToggle.find('.strip').css('background-color', '#fff');
       }

       headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
   });

   $(document).trigger('scroll');

   

   var elements = $('.accordion-single-details');
    
elements.each(function() {
  var detailsHeight = $(this).css('height');
  $(this).css('max-height', '0px');

  $(this).siblings('.accordion-single-brief').on('click', function() {
    
    var accordionDetails = $(this).siblings('.accordion-single-details');
    
    if (!$(this).parent().hasClass('open')) {
      $(this).parent().addClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', detailsHeight);
    } else {
      $(this).parent().removeClass('open');
      $(this).siblings('.accordion-single-details').css('max-height', '0px');
    }
  });
});


});
