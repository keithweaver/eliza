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
function runDemo2(){
	createInfoNotification("Starting demo 2...", 4);


	$(".send-textbox").val('Hi it\'s nice to see you this afternoon.');
	getUserInput();

	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 3000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 6000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 9000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 12000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 15000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 18000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 21000);
	setTimeout(function(){
		$(".send-textbox").val('I had a dream about my dog.');
		getUserInput();
	}, 23000);
	
	
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