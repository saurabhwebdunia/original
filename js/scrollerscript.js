 
   $(window).bind('scroll', function(){
      if ($(this).scrollTop() > 100) { $('.bcktoTop').fadeIn(); } else { $('.bcktoTop').fadeOut(); }
   });

   $('nav').stickTop('-111');

   $('.no-mobile #floatNav').stickBot('0');

   $('.time').each(function(){$(this).timeago();});

   // scroll back to top
   $('.backToTop').click(function(event){
      event.stopPropagation();
      $('body,html').animate({scrollTop: 0}, 800);
      return false;
   });
   $('.toContact').click(function(event){
      event.stopPropagation();
      var height = $('html,body').height();
      $('body,html').animate({scrollTop: height}, 800);
      return false;
   });  
 

   
   