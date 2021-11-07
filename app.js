/*go to top button */
$(document).ready(function(){
    
    var showgotop=300;
    $('body').append('<a href="#" id="gotop" title="������"></a>');
    var s=$('#gotop');
             
 $(document).scroll(function(){   
        var st=$(document).scrollTop();
        if(st<showgotop)
           s.fadeOut(400);
        else
            s.fadeIn(300);
   });
    
	$('#gotop').click(function(){
	$('html, body').animate({ scrollTop : 0 }, 'slow');
	return false;
	});
});

$(document).ready(function() {
 $(function() {

   $('ul.tabs').delegate('li:not(.current)', 'click', function() {
     $(this).addClass('current').siblings().removeClass('current')
       .parents('div.tabs-wrp').find('div.box').hide().eq($(this).index()).fadeIn(400);
   })

})
})(jQuery)