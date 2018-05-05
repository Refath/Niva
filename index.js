$(document).ready(function() {
	$(".gtext").hide();
	$(".atext").hide();
	$(".ytext").hide();
	$(".ftext").hide();
	$(".speedtext").hide();
	
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

$(".speedSave").click(function() {
	rotationSpeed = $(".speedtext").val();
	rotationSpeed != NaN ? rotationSpeed : 3;
	TimeLine.duration(rotationSpeed);
});

var rotationSpeed = 30,
	TimeLine = new TimelineMax({ repeat: -1 });

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

$(".tdlist").click(function() {
	$(".gChange, .aChange, .yChange, .fChange,.speedChange, .bgChange, .simple, .gClick, .aClick, .yClick, .fClick,.speedSave, #Btn, .gSave, .aSave, .ySave, .fSave ,.bgChange, .fSave,.speedClick,.speedtext,#ImageUrl,.settingstxt,.containweather,.containcontacts").css({
		display: "none"
	});
	$(".containtodolist").css({
		display: "block"
	});
});

$(".contactlist").click(function() {
	$(".gChange, .aChange, .yChange, .fChange,.speedChange, .bgChange, .simple, .gClick, .aClick, .yClick, .fClick,.speedSave, #Btn, .gSave, .aSave, .ySave, .fSave ,.bgChange, .fSave,.speedClick,.speedtext,#ImageUrl,.settingstxt,.containweather,#ddbtn,.containtodolist").css({
		display: "none"
	});
	$(".containcontacts").css({
		display: "block"
	});
});

$(".settingslist").click(function() {
	$(".containcontacts,.containtodolist").css({
		display: "none"
	});
	$(".gChange, .aChange, .yChange, .fChange,.speedChange, .bgChange, .simple, .gClick, .aClick, .yClick, .fClick,.speedSave, #Btn, .gSave, .aSave, .ySave, .fSave ,.bgChange, .fSave,.speedClick,.speedtext,#ImageUrl,.settingstxt,.containweather,#ddbtn").css({
		display: "block"
	});
	$(".gClick, .aClick, .yClick, .fClick,.speedClick, .bgClick, .simple").css({
		"margin-left":"60px"
	});
	$(".gSave, .aSave, .ySave, .fSave,.speedSave, .bgSave,#Btn").css({
		"margin-left":"67px"
	});
});



$(".settingshome").click(function() {
	$(".selectbuttons, .settingshome, .todolisthome, .contactshome").css({
		display: "none"
	});
	$(".containsettings").css({
		display: "block"
	});
});

$(".todolisthome").click(function() {
	$(".selectbuttons, .settingshome, .todolisthome, .contactshome").css({
		display: "none"
	});
	$(".containtodolist").css({
		display: "block"
	});
});

$(".contactshome").click(function() {
	$(".selectbuttons, .settingshome, .todolisthome, .contactshome").css({
		display: "none"
	});
	$(".containcontacts").css({
		display: "block"
	});
});



jQuery(document).ready(function ($) {

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

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/

  loadWeather('New York','2459115'); //@params location, woeid
});

function loadWeather(location, woeid,) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;F</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
   
  });
}



$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var dateTime = new Date();
      var userTimeStamp = dateTime.toLocaleString("en-US"); 
      var userLongitude = position.coords.longitude;
      var userLatitude =  userLatitude = position.coords.latitude;
      var api = "https://api.openweathermap.org/data/2.5/weather?lat="+userLatitude+"&lon="+userLongitude+"&appid=80186bc6ef5c092a7aa7bcdb10ea8c80";
      console.log(api);
      // this is just a conveneient way copy/paste the link to the JSON data if you want to look at it
      $("#weather-container").html("your latitude: " + position.coords.latitude + "<br>your longitude: " + position.coords.longitude);
      $.getJSON(api, function(data) {
       // API call from OpenWeatherMap.Org - https://openweathermap.org/api         
        var tempKelvin = data.main.temp;
        var tempFahrenheit = (tempKelvin * (9/5) - 459.67).toFixed(0);
        var tempCelsius = (tempKelvin - 273.15).toFixed(0);
         // API only gives temp in Kelvin, have to convert to F and C, also rounds off long default decimal
        var tempSwitch = true;
        // for toggle button to switch between C/F
        var windSpeedSwitch = true;
        // for toggle button to switch between imperial/metric
        var userCity = data.name;
        var userCountry = data.sys.country;
        var userWeatherType = data.weather[0].description;
        var userWindSpeed = data.wind.speed;
        var userWindSpeedImp = (userWindSpeed * 2.23694).toFixed(0);
        var weatherIconCode = data.weather[0].icon;
        var weatherIconUrl = "http://openweathermap.org/img/w/" + weatherIconCode + ".png";
        $("#weatherIcon").html("<img src='"+weatherIconUrl+"'>");   
        $('#userTime').html("Time: &nbsp;"+userTimeStamp);
        $('#userLocation').html("Location: &nbsp;"+userCity+", "+userCountry);
        $('#userCountry').html("Country: &nbsp;"+userCountry);
        $('#userTemp').html("It's &nbsp;"+tempCelsius+" \xB0"+"C");
        $('#tempUnitSwitch').click(function(){
          if(tempSwitch===false) {
            $('#userTemp').html("It's &nbsp;"+tempCelsius+" \xB0"+"C");
            tempSwitch=true;
          }
          else {
            $('#userTemp').html("It's &nbsp;"+tempFahrenheit+" \xB0"+"F");
            tempSwitch=false;
          }
        });
        $('#userWeatherType').html("Conditions: &nbsp;"+userWeatherType);    
        $('#userWindSpeed').html("Wind: &nbsp;"+userWindSpeed+" m/S");
        $('#windUnitSwitch').click(function(){
          if(windSpeedSwitch===false) {
            $('#userWindSpeed').html("Wind Speed: &nbsp;"+userWindSpeed+" m/S");
            windSpeedSwitch=true;
          }
          else {
            $('#userWindSpeed').html("Wind Speed: &nbsp;"+userWindSpeedImp+" mpH");
            windSpeedSwitch=false;
          }
        });
      });
    });  
  }
});

//Each item should look like:
//<li><input type = "checkbox"/> <span>Write turotial</span></li>

/**function updateItemStatus() {
	
	var cbId = this.id.replace("cb_",""); 
	var itemText = document.getElementById("item_", cbId)
	
	itemText.style.textDecoration = "line-through";
	
}

function addNewItem(list,itemText){
	
		totalItems++;

		var listItem = document.createElement("li");

		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.id = "cb_" + totalItems;
		checkBox.onclick = updateItemStatus;

		var span = document.createElement("span");
		span.id = "item_" + totalItems;
		span.innerText = itemText;

		listItem.appendChild(checkBox);
		listItem.appendChild(span);


		list.appendChild(listItem);
		
}

/**$("#checkBox").change(function () {
    if ($("#checkBox").prop("checked")) {
        // do something
    } else {
        // do something else
    }
});**/
/**

inItemText.onkeyup = function(event) {
	
	var inItemText = document.getElementById("inItemText");
	var itemText = event.which;
	
	// Event.which (13) = ENTER
	// ONLY proceed if key up = ENTER
	if(event.which == 13){
		var itemText = inItemText.value;
		if (itemText == "" || itemText == " "){
			return false;
		} 
		addNewItem(document.getElementById("todoList"),itemText);	
		
		inItemText.focus();
		inItemText.select();
		
		
		}
	}
**/
$(document).ready(function() {
var removeImg = '<img src= "https://www.icon2s.com/wp-content/uploads/2013/07/ios7-trash-icon.png" width = "22px" class = "removeicon">';
	var completeImg = '<img src = "https://www.shareicon.net/data/128x128/2016/11/28/857777_circle_512x512.png" class = "completeicon" width = "22px">';
	document.getElementById("add").addEventListener('click', function(){
		
		var value = document.getElementById("addtask_TD").value;
		var lookat = document.getElementById("addtask_TD");
		if(value) {
			addItemTodo(value);
			lookat.focus();
			lookat.select();
		}
		
	});
	
	function addItemTodo(text){
		var list = document.getElementById('todo');
		
		var item = document.createElement('li');
		item.innerText = text;
		
		var buttons = document.createElement('div');
		buttons.classList.add('buttons');
		
		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.classList.add('btn');
//		$(".remove").attr("id","delete");
		remove.innerHTML = removeImg;
		
		var complete = document.createElement('button');
		complete.classList.add('complete');
		complete.classList.add('btn');
	//	$(".complete").attr("id","done");

		complete.innerHTML = completeImg;
		$(remove).click(function(){
    $(item).fadeOut(1000);
});

$(complete).click(function(){
    $(this).find('.completeicon').attr('src',"https://png.icons8.com/cotton/50/000000/checkmark.png")
});
		buttons.appendChild(remove);
		buttons.appendChild(complete);
		item.appendChild(buttons);
		
		list.appendChild(item);
	
	}
});