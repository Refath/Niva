$('.gClick').click ( function(){
						$(".gtext").toggle('fast');
});

$('.aClick').click ( function(){
						$(".atext").toggle('fast');
});

$('.yClick').click ( function(){
						$(".ytext").toggle('fast');
});

$('.fClick').click ( function(){
						$(".ftext").toggle('fast');
});

$(document).ready(function(){
      $(".gtext").keyup(function(){
          var newimg = $(this).val();
          $(".glink").attr("href", newimg);
				$('.gSave').click ( function(){
						$(".gChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r1c').css('background-image', 'url(' + imageUrl + ')');
				});
			});
	
}); 

$(document).ready(function(){
      $(".ytext").keyup(function(){
          var newimg = $(this).val();
          $(".ylink").attr("href", newimg);
				$('.ySave').click ( function(){
						$(".yChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r2c').css('background-image', 'url(' + imageUrl + ')');});
     });
}); 

$(document).ready(function(){
      $(".atext").keyup(function(){
          var newimg = $(this).val();
          $(".alink").attr("href", newimg);
				$('.aSave').click ( function(){
						$(".aChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r3c').css('background-image', 'url(' + imageUrl + ')');});
     });
}); 

$(document).ready(function(){
      $(".ftext").keyup(function(){
          var newimg = $(this).val();
          $(".flink").attr("href", newimg);
				$('.fSave').click ( function(){
						$(".fChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r4c').css('background-image', 'url(' + imageUrl + ')');});
     });
});

/**$('.noRotate').click ( function(){
		function stopAnimation(".parent")
{
    $('.parent').css("-webkit-animation", "none");
    $('.parent').css("animation", "none");
}
});**/

(function( $ ) {
	$(function() {
		$( "#stop" ).click(function() {
			$( ".parent, .r1c, .r2c, .r3c, .r4c" ).addClass( "off" );
		});
		$( "#start" ).click(function() {
			$( ".parent, .r1c, .r2c, .r3c, .r4c"  ).removeClass( "off" );
		});
	});

})( jQuery );
