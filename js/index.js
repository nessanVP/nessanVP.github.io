 $(document).ready(function(){ 

  $('a[href^="#"]').on('click',function(e) {
    e.preventDefault();
    
       $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    
    var target = this.hash;
    var $target = $(target);
    
    $('html,body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function() {
      window.location.hash = target;
    });
  });
 });