function runDemo1(){
	createInfoNotification("Starting demo 1...", 4);


	$(".send-textbox").val('Hi it\'s nice to see you this afternoon.');
	getUserInput();

	setTimeout(function(){
		$(".send-textbox").val('I had a really long week. It was a very stressful week at school.');
		getUserInput();
	}, 3000);
	setTimeout(function(){
		$(".send-textbox").val('Yeah it was a lot of back to back assignments and tests. I had very little sleep because everything took so much time.');
		getUserInput();
	}, 6000);
	
}
function printResponses(){
	for (var word in responses) {
		if (responses.hasOwnProperty(word)) {
			console.log(word);
			for(var i = 0;i < responses[word].length;i++){
				console.log("    " + responses[word][i]);
			}
		}
	}
}