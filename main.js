$(document).on('ready', function() {

var addZero = function(i){
	if (i < 10) {
		i = "0" + i;
	};
	return i;
};

var timeNow = function(){
	var now = new Date();
	var h = addZero(now.getHours());
	var m = addZero(now.getMinutes());
	var timeString = h + ":" + m;
	console.log(timeString);
	return timeString;
}

setInterval(function(){
	clockText.text(timeNow())
}, 1000);

// $('.clock-text').append(timeNow);

// *************************FUNCTIONS***********************************

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


// ***********************ELEMENT VARIABLES******************************


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














































  
});