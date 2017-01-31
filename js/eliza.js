var responses = {
	"NOTFOUND" : [
					"What does that suggest to you?",
					"I see.",
					"I'm not sure I understand you fully.",
					"Can you elaborate?",
					"That is quite interesting.",
					"Please tell me more.",
					"Let's change focus a bit... Tell me about your family.",
					"Can you elaborate on that?",
					"Why do you say that *?"
				],
	"sorry" : ["Please don't apologize."],
	"always" : ["Can you think of a specific example?"],
	"because" : ["Is that the real reason?"],
	"maybe" : ["You  don't seem very certain."],
	"i think" : ["Do you really think so?"],
	"you" : ["We were discussing you, not me.","Why do you say that about me?","Why do you care whether I \"*\"?"],
	"yes" : ["Why do you think so?","You seem quite positive."],
	"no" : ["Why not?","Are you sure?"],
	"i am" : ["I am sorry to hear you are *.","How long have you been *?","Do you believe it is normal to be *?","Do you enjoy being *?","Did you come to me because you are *?"],
	"i'm" : ["I am sorry to hear you are *.","How long have you been *?","Do you believe it is normal to be *?","Do you enjoy being *?","Did you come to me because you are *?"],
	"i feel" : ["Tell me more about such feelings.","Do you often feel *?","Do you enjoy feeling *?","Why do you feel that way?"],
	"family" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"mother" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"father" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"mom" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"sister" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"brother" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"husband" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"wife" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"],
	"child" : ["Did you have close friends as a child?","What is your favorite childhood memory?","Do you remember any dreams or nightmares from childhood?","Did the other children sometimes tease you?","How do you think your childhood experiences relate to your feelings today?"],
	"dream" : ["What does that dream suggest to you?","Do you dream often?","What persons appear in your dreams?","Are you disturbed by your dreams?"],
	"nightmare" : ["What does that dream suggest to you?","Do you dream often?","What persons appear in your dreams?","Are you disturbed by your dreams?"],
	"hello" : ["Hi again! How is going?","How are you today? Any problems?"],
	"good afternoon" : ["Hi again! How is going?","How are you today? Any problems?"],
	"good morning" : ["Hi again! How is going?","How are you today? Any problems?"],
	"hi" : ["Hi again! How is going?","How are you today? Any problems?"],
	"goodbye" : ["Goodbye.  Thank you for talking to me."],
	"i need" : ["Why do you need *?","Would it really help you to get *?","Are you sure you need *?"],
	"why don\'t you" : ["Do you really think I don't *?","Perhaps eventually I will *.","Do you really want me to *?"],
	"why can\'t i" : ["Do you think you should be able to *?","If you could *, what would you do?","I don't know -- why can't you *?","Have you really tried?"],
	"i can\'t" : ["How do you know you can't \"*\"?","Perhaps you could * if you tried.","What would it take for you to *?"]
};
var endChatTerms = ["goodbye","I have to leave","I have to leave.","quit","bye","exit"];

var keywords = [];
var chatHistory = [];



function startElizaChat(){
	console.log("startElizaChat");

	for (var word in responses) {
		keywords.push(word);
	}

	chatHistory.push({ isEliza : true, content : "Hi there, welcome to my office. I'm here to chat about anything. What's on your mind?" });

	displayChat();

	console.log(chatHistory);
	// printResponses();
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
function sendElizaNewMessage(newMessage){
	console.log("sendElizaNewMessage");

	//Add to UI
	chatHistory.push({ isEliza : false, content : newMessage });
	displayChat();
	clearSendTextbox();

	//Make it lower case
	newMessage = processInput(newMessage);
	var response = analyze(newMessage);

	displayChat();

	setTimeout(function(){
		chatHistory.push({ isEliza : true, content : response });
		displayChat();
	}, determineResponseTime());

}

function analyze(newMessage){
	var found = false;
	var response = '';
	//Check all
	for (var word in responses) {

		//Check to see if the keyword is in the sentence

		//Ex. input is "Hi" or "This and more" or "Hi doc!"
		if(newMessage.indexOf(word) != -1 && newMessage.length == word.length || newMessage.indexOf(word + " ") != -1 || newMessage.indexOf(" " + word) != -1){
			response = responses[word][Math.floor(Math.random()*responses[word].length)];

			//Check for wild card
			if(response.indexOf("*") != -1){
				var remaining_input = newMessage.substring(newMessage.indexOf(word) + word.length+1, newMessage.length);
				response = response.substring(0, response.indexOf("*")) + remaining_input.substring(0, remaining_input.length-1) + remaining_input.substring(remaining_input.length-1, remaining_input.length).replace("[^A-Za-z]","") + response.substring(response.indexOf("*")+1);
			}

			found = true;
		}
	}

	if(!found){
		response = responses["NOTFOUND"][Math.floor(Math.random()*responses["NOTFOUND"].length)];
	}

	return response;
}

function processInput(message){
	message = message.toLowerCase();
	message = removePunctuation(message);
	return message;
}
function replaceWords(newMessage){
	var wordsForReplacement = [];
	wordsForReplacement["i"] = "you";
	wordsForReplacement["you"] = "i";
	wordsForReplacement["me"] = "you";
	wordsForReplacement["my"] = "your";
	wordsForReplacement["am"] = "are";
	wordsForReplacement["are"] = "am";
	wordsForReplacement["was"] = "were";
	wordsForReplacement["i'd"] = "you would";
	wordsForReplacement["i've"] = "you have";
	wordsForReplacement["i'll"] = "you will";
	wordsForReplacement["you've"] = "i have";
	wordsForReplacement["you'll"] = "i will";
	wordsForReplacement["your"] = "my";
	wordsForReplacement["yours"] = "mine";
	wordsForReplacement["me"] = "you";
	
	for(var word in wordsForReplacement){
		if(newMessage.indexOf(word) != -1 && newMessage.length == word.length){
			newMessage = newMessage.replace(word);
		}else if(newMessage.indexOf(" " + word) != 1){
			newMessage = newMessage.replace(" " + word);
		}else if(newMessage.indexOf(word + " ") != -1){
			newMessage = newMessage.replace(word + " ");
		}
	}

	return newMessage;
}
function removePunctuation(message){
	//',;.?!:'
	message = message.replace(",","");
	message = message.replace(";","");
	message = message.replace(".","");
	message = message.replace("?","");
	message = message.replace("!","");
	message = message.replace(":","");
	
	
	return message;
}
function determineResponseTime(){
	var m = Math.floor(Math.random() * 2000) + 500;
	console.log(m);
	return m;
}
function compareKeywords(a,b) {
	if (parseInt(a.weight) < parseInt(b.weight))
		return -1;
	if (parseInt(a.weight) > parseInt(b.weight))
		return 1;
	return 0;
}


