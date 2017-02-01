var currentNotifications = [];

$(document).ready(function(){
	setTimeout(function(){
		createInfoNotification("Run the demo by sending \"run demo1\"",9);
	}, 1000);
	setTimeout(function(){
		createInfoNotification("If you like this project, please go star it!",6);
	}, 2000);
	setInterval(function(){
		for(var i = 0;i < currentNotifications.length;i++){
			var currentNotification = currentNotifications[i];

			refershNotifications();
		}
	}, 1000);
});
function createInfoNotification(message, seconds){
	createNotification(message, "info", seconds);
}
function createNegativeNotification(message, seconds){
	createNotification(message, "negative", seconds);
}
function createPositiveNotification(message, seconds){
	createNotification(message, "positive", seconds);
}
function createNotification(message, type, seconds){
	//console.log("createNotification(" + message + "," + type + ")");
	currentNotifications.push({ message : message, cyclesRemaining : seconds, type : type });
	var typeClass = "";
	var typeText = "";

	if(type == "positive"){
		typeClass = "positive-notification";
		typeText = "dark-text";
	}else if(type == "negative"){
		typeClass = "negative-notification";
		typeText = "light-text";
	}else{
		typeClass = "info-notification";
		typeText = "dark-text";
	}

	html = '<div class="notification-wrapper ' + typeClass + '"><p class="notification-text ' + typeText + '">' + message + '</p></div>';

	$("#notification-area").append(html);
}
function refershNotifications(){
	var html = '';
	for(var i = 0;i < currentNotifications.length;i++){

		var typeClass = "";
		var typeText = "";

		if(currentNotifications[i].type == "positive"){
			typeClass = "positive-notification";
			typeText = "dark-text";
		}else if(currentNotifications[i].type == "negative"){
			typeClass = "negative-notification";
			typeText = "light-text";
		}else{
			typeClass = "info-notification";
			typeText = "dark-text";
		}

		var currentNotificationHTML = '<div class="notification-wrapper ' + typeClass + '"><p class="notification-text ' + typeText + '">' + currentNotifications[i].message + '</p></div>';
	
		

		

		if(currentNotifications[i].cyclesRemaining > 0){
			// console.log(currentNotifications[i]);
			currentNotifications[i].cyclesRemaining--;
			html += currentNotificationHTML;
		}
	}
	
	$("#notification-area").html(html);
}