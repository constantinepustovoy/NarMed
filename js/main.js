// console.log("hi!");

$(function(){

  $(window).scroll(function() {

    if($(this).scrollTop() >= 430) {
      $('.navigation-menu').addClass('sticky-menu');
      $('.nav-inner-cover').addClass('nav-menu'); 

    }
    else{
      $('.navigation-menu').removeClass('sticky-menu');
      $('.nav-inner-cover').removeClass('nav-menu'); 
    }

  });

});