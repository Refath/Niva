
$(document).ready(function(){$('.gClick').click ( function(){
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

$('.speedClick').click ( function(){
						$(".speedtext").toggle('fast');
});

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

      $(".ytext").keyup(function(){
          var newimg = $(this).val();
          $(".ylink").attr("href", newimg);
				$('.ySave').click ( function(){
						$(".yChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r2c').css('background-image', 'url(' + imageUrl + ')');});
     });

      $(".atext").keyup(function(){
          var newimg = $(this).val();
          $(".alink").attr("href", newimg);
				$('.aSave').click ( function(){
						$(".aChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r3c').css('background-image', 'url(' + imageUrl + ')');});
     });


      $(".ftext").keyup(function(){
          var newimg = $(this).val();
          $(".flink").attr("href", newimg);
				$('.fSave').click ( function(){
						$(".fChange").html(newimg);
  imageUrl="http://s2.googleusercontent.com/s2/favicons?domain_url="+newimg;
$('.r4c').css('background-image', 'url(' + imageUrl + ')');});
     });

	
		$( "#stop" ).click(function() {
			$( ".parent, .r1c, .r2c, .r3c, .r4c" ).addClass( "off" );
		});
		$( "#start" ).click(function() {
			$( ".parent, .r1c, .r2c, .r3c, .r4c"  ).removeClass( "off" );
		});

	$(".bgtext").click(function(){
          var newimg = $(this).val();
          $(body).css("background-image", "url("+newimg+")");
				$('.bgSave').click ( function(){
						$(".bgChange").html(newimg);
 
				});
     });
	
var rotationSpeed = 3,
		TimeLine = new TimelineMax({repeat:-1});

$('.speedSave').click(function() {
	rotationSpeed = $(".speedtext").val();
	rotationSpeed != NaN ? rotationSpeed : 3
	TimeLine.duration(rotationSpeed);
});

TimeLine.to(".rcc", rotationSpeed, {
	rotation:-360,
	transformOrigin:"center",
	ease: Power0.easeNone,
	force3D: true,
});

TimeLine.to(".parent", rotationSpeed, {
	rotation:360,
	transformOrigin:"center",
	ease: Power0.easeNone,
	force3D: true,
}, "-=" + rotationSpeed);

$("#Btn").click(function(){
    $(".blurredBg").css("backgroundImage", "url('"+$("#ImageUrl").val()+"')");
});
