$(document).on('ready', function() {

// string padding helper function
var addZero = function(i){
	if (i < 10) {
		i = "0" + i;
	};
	return i;
};

// timeNow function - returns current time string in hours and mins...
// needs to be placed before reference to 'clockText JQ object'.... 
// didn't work when at bottom of text file.
var timeNow = function(){
	
	var now = new Date();
	var h24 = addZero(now.getHours());
	var m = addZero(now.getMinutes());

	//h12 variable created to store 12 hour clock hours value
	if (h24 === 12){
			var h12 = 12;
	}
	else {
		h12 = h24%12;
	}
	
	var timeString = h12 + ":" + m;
		//variable isPM used to set pm indicator to on/off
	var isPM = false;
	
	//conditional check of hours value sets isPM variable to true/false
	if (now.getHours() > 11){
		isPM = true;
		$('.pm-indicator').css('display','visible');
	}
	else {
		isPm =false;
		$('.pm-indicator').css('display','none');
	}
	return timeString;
}

setInterval(function(){
	clockText.text(timeNow())
}, 1000);

// *********************^^^ FUNCTIONS ^^^****************************************

var outerShell = $('<div class="outer-shell"></div>');
var innerShell = $('<div class="inner-shell"></div>');

var pm = $('<h6 class="pm-label">PM</h6>');
var auto = $('<h6 class="auto-label">AUTO</h6>');

var clockScreen = $('<div class="clock-screen"></div>');

var pmIndicator = $('<h4 class="pm-indicator">*</h4>');
var autoIndicator = $('<h4 class="auto-indicator">*</h4>')

var clockText = $('<p class="clock-text"></p>');

var fmFrequency = $('<p class="fm-frequency">FM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;88 &nbsp;92 &nbsp;96 &nbsp;100 &nbsp;104 &nbsp;108 &nbsp;&nbsp;&nbspMHz</p>');
var amFrequency = $('<p class="am-frequency">AM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;53 &nbsp;65 &nbsp;80 &nbsp;100 &nbsp;130 &nbsp;165 &nbsp;&nbsp;&nbsp10kHz</p>');


// *******************^^^ ELEMENT VARIABLES ^^^**********************************


$('body').prepend(outerShell);

outerShell.prepend(innerShell);

innerShell.prepend(pm);
innerShell.prepend(auto);
innerShell.prepend(clockScreen);
innerShell.append(fmFrequency);
innerShell.append(amFrequency);


clockScreen.prepend(pmIndicator);
clockScreen.prepend(autoIndicator);
clockScreen.prepend(clockText);

// *******************^^^ JQUERY METHODS TO CREATE DOM ELEMENTS ^^^**************
















































  
});