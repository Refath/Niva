
$(document).ready(function() {
	$(".gtext").hide();
	$(".atext").hide();
	$(".ytext").hide();
	$(".ftext").hide();

	$(".gClick").click(function() {
		$(".gtext").toggle("fast");
	});

	$(".aClick").click(function() {
		$(".atext").toggle("fast");
	});

	$(".yClick").click(function() {
		$(".ytext").toggle("fast");
	});

	$(".fClick").click(function() {
		$(".ftext").toggle("fast");
	});

	$(".speedClick").click(function() {
		$(".speedtext").toggle("fast");
	});

	$(".gtext").keyup(function() {
		var newimg = "https://" + $(this).val();
		var link = "https://" + $(this).val() + ".com";

		function store() {
			var inputEmail = document.getElementById("gtext");
			localStorage.setItem("gtext", gtext.value);
		}
		$(".glink").attr("href", link);
		$(".gSave").click(function() {
			$(".gChange").html(newimg);
			imageUrl = newimg + ".com/favicon.ico";
			$(".r1c").css("background-image", "url(" + imageUrl + ")");
		});
	});
});

$(".ytext").keyup(function() {
	var newimg = "https://" + $(this).val();
	var link = "https://" + $(this).val() + ".com";

	$(".ylink").attr("href", link);
	$(".ySave").click(function() {
		$(".yChange").html(newimg);
		imageUrl = newimg + ".com/favicon.ico";
		$(".r2c").css("background-image", "url(" + imageUrl + ")");
	});
});

$(".atext").keyup(function() {
	var newimg = "https://" + $(this).val();
	var link = "https://" + $(this).val() + ".com";

	$(".alink").attr("href", link);
	$(".aSave").click(function() {
		$(".aChange").html(newimg);
		imageUrl = newimg + ".com/favicon.ico";
		$(".r4c").css("background-image", "url(" + imageUrl + ")");
	});
});

$(".ftext").keyup(function() {
	var newimg = "https://" + $(this).val();
	var link = "https://" + $(this).val() + ".com";

	$(".flink").attr("href", link);
	$(".fSave").click(function() {
		$(".fChange").html(newimg);
		$(".fChange").html(newimg);
		imageUrl = newimg + ".com/favicon.ico";
		$(".r3c").css("background-image", "url(" + imageUrl + ")");
	});
});

$("#stop").click(function() {
	$(".parent, .r1c, .r2c, .r3c, .r4c").addClass("off");
});
$("#start").click(function() {
	$(".parent, .r1c, .r2c, .r3c, .r4c").removeClass("off");
});

$(".bgSave").click(function() {
	var newimg = $(this).val();
	$("body").css("background-image", url(newimg));

	$(".bgSave").click(function() {
		$(".bgChange").html(newimg);
	});
});

var rotationSpeed = 30,
	TimeLine = new TimelineMax({ repeat: -1 });

$(".speedSave").click(function() {
	rotationSpeed = $(".speedtext").val();
	rotationSpeed != NaN ? rotationSpeed : 3;
	TimeLine.duration(rotationSpeed);
});

TimeLine.to(".rcc", rotationSpeed, {
	rotation: -360,
	transformOrigin: "center",
	ease: Power0.easeNone,
	force3D: true
});

TimeLine.to(
	".parent",
	rotationSpeed,
	{
		rotation: 360,
		transformOrigin: "center",
		ease: Power0.easeNone,
		force3D: true
	},
	"-=" + rotationSpeed
);

$(".r1c", ".r2c", ".r3c", ".r4c").css("animation-duration", rotationSpeed);

$("#Btn").click(function() {
	$(".blurredBg").css("backgroundImage", "url('" + $("#ImageUrl").val() + "')");
});

/**vex.defaultOptions.className = 'vex-theme-os'
vex.dialog.alert({
    message: 'Hey there! Welcome to Niva! You can organize all your favorite websites, and access them with just a click. Why don’t we get started? :) Just hover over that Settings text to the left, and paste the URL of your favorite website!',
    className: 'vex-theme-flat-attack' // Overwrites defaultOptions
})
**/

$(".simple").click(function() {
	$(
		"#wide, #narrow, .r1c, .r2c, .r3c, .r4c,.r1l, .r2l, .r3l, .r4l,.name,.social li"
	).css({
		display: "none"
	});
	$(".main-menu").css({
		top: "0px",
		height: "100%"
	});
	$(".blurredBg").css({
		"background-image": "url(http://i.imgur.com/b3eE7TR.gif)"
	});
});




// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
( function( $ ) {

	// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});
$(document).ready(function() {
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}


});




$(".tdlist").click(function() {
	$(".gChange, .aChange, .yChange, .fChange,.speedChange, .bgChange, .simple, .gClick, .aClick, .yClick, .fClick,.speedSave, #Btn, .gSave, .aSave, .ySave, .fSave ,.bgChange, .fSave,.speedClick,.speedtext,#ImageUrl,.settingstxt").css({
		display: "none"
	});
	$(".todolistnew").css({
		display:"visible"
	});
});


$(function(){
var $listItems = $('li');
var $list = $('ul');
function updateCount () {
    var $countActive = $('li.active').length;
    $('p span').text($countActive);
}    


// add new item

var $form = $('#newItemForm');
var $newItem = $('#addButton');
var $buttonNewItem = $('#showForm');
var $newName = $('#itemDescription');

$buttonNewItem.on('click', function() {
    $form.show();
    $buttonNewItem.hide();
});

$form.on('submit', function(e){
    
e.preventDefault();
$('ul').prepend('<li class = \"active\">' + $('input:text').val() + '</li>');
console.log($('li'));
updateCount();
$form.hide();
$buttonNewItem.show();


})

$('ul').on('click', 'li', function(){
  
    if ($(this).hasClass('active')){
        $(this)
        .insertAfter($list.children().last())
        .attr('class','done');
        updateCount();
    }
    else if($(this).attr('class') == 'done'){
        $(this).remove();
        updateCount();
    }
});

});