var responses = {
	"NOTFOUND" : {
				 "weight" : 0,
				 "responses" : [
						"What does that suggest to you?",
						"I see.",
						"I'm not sure I understand you fully.",
						"Can you elaborate?",
						"That is quite interesting.",
						"Please tell me more.",
						"Let's change focus a bit... Tell me about your family.",
						"Can you elaborate on that?",
						"Why do you say that *?"
					]
				},
	"sorry" : {
				 "weight" : 1,
				 "responses" : ["Please don't apologize.", "Apologies are not necessary.", "Apologies are not required."]},
	"always" : {
				 "weight" : 1,
				 "responses" : ["Can you think of a specific example?"]},
	"because" : {
				 "weight" : 6,
				 "responses" : ["Is that the real reason?"]},
	"maybe" : {
				 "weight" : 1,
				 "responses" : ["You  don't seem very certain."]},
	"i think" : {
				 "weight" : 2,
				 "responses" : ["Do you really think so?"]},
	"you" : {
				 "weight" : 1,
				 "responses" : ["We were discussing you, not me.","Why do you say that about me?","Why do you care whether I \"*\"?"]},
	"yes" : {
				 "weight" : 1,
				 "responses" : ["Why do you think so?","You seem quite positive."]
				},
	"no" : {
				 "weight" : 1,
				 "responses" : ["Why not?","Are you sure?"]},
	"i am" : {
				 "weight" : 1,
				 "responses" : ["I am sorry to hear you are *.","How long have you been *?","Do you believe it is normal to be *?","Do you enjoy being *?","Did you come to me because you are *?"]},
	"i feel" : {
				 "weight" : 4,
				 "responses" : ["Tell me more about such feelings.","Do you often feel *?","Do you enjoy feeling *?","Why do you feel that way?"]},
	"family" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"mother" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"father" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"mom" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"sister" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"brother" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"husband" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"wife" : {
				 "weight" : 16,
				 "responses" : ["Tell me more about your family.","How do you get along with your family?","Is your family important to you?"]},
	"child" : {
				 "weight" : 16,
				 "responses" : ["Did you have close friends as a child?","What is your favorite childhood memory?","Do you remember any dreams or nightmares from childhood?","Did the other children sometimes tease you?","How do you think your childhood experiences relate to your feelings today?"]},
	"dreamed" : {
				 "weight" : 4,
				 "responses" : ["What does that dream suggest to you?","Do you dream often?","What people appear in your dreams?","Are you disturbed by your dreams?","Have you ever fantasized * while you were awake?"]},
	"nightmare" : {
				 "weight" : 3,
				 "responses" : ["What does that dream suggest to you?","Do you dream often?","What persons appear in your dreams?","Are you disturbed by your dreams?"]},
	"hello" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"good afternoon" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"good morning" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"hi" : {
				 "weight" : 1,
				 "responses" : ["Hi again! How is going?","How are you today? Any problems?"]},
	"goodbye" : {
				 "weight" : 1,
				 "responses" : ["Goodbye.  Thank you for talking to me."]},
	"i need" : {
				 "weight" : 5,
				 "responses" : ["Why do you need *?","Would it really help you to get *?","Are you sure you need *?"],},
	"why don\'t you" : {
				 "weight" : 3,
				 "responses" : ["Do you really think I don't *?","Perhaps eventually I will *.","Do you really want me to *?"],},
	"why can\'t i" : {
				 "weight" : 3,
				 "responses" : ["Do you think you should be able to *?","If you could *, what would you do?","I don't know -- why can't you *?","Have you really tried?"],},
	"i can\'t" : {
				 "weight" : 4,
				 "responses" : ["How do you know you can't \"*\"?","Perhaps you could * if you tried.","What would it take for you to *?"]},
	"perhaps" : {
				 "weight" : 1,
				 "responses" : ["How do you know you can't \"*\"?","Perhaps you could * if you tried.","What would it take for you to *?"]},
	"remember" : {
				 "weight" : 5,
				 "responses" : ["Do you often think of *?","Does thinking of * bring anything else to mind","What else do you recollect?","Why do you recollect * just now?","What in the present situation reminds you of *?","What is the connection between me and *?"]},
	"do you remember" : {
				 "weight" : 6,
				 "responses" : ["Do you think I would forget?","Yes I do remember *."]},
	"if" : {
				 "weight" : 3,
				 "responses" : ["Do you think it\'s likely that *?","Do you wish that *?","What do you know about *?","Really, if *?"]},
	"name" : {
				 "weight" : 15,
				 "responses" : ["I am not interested in names.","I\'ve told you before, I do not care about names -- please continue."]},
	"another language" : {
				 "weight" : 1,
				 "responses" : ["I told you before, I don't understand languages that are not English."]},
	"computer" : {
				 "weight" : 12,
				 "responses" : ["Do computers worry you?","Why do you mention computers?","Could you expand on how computers and * are related?","What do you think machines have to do with your problem?","Don't you think computers can help people?","What about machines worrys you?","What do you think about machines?"]},
	"are you" : {
				 "weight" : 2,
				 "responses" : ["Why are you interested in whether I am * or not?","Would you prefer if I weren't *?","Perhaps I am * in your fantasies.","Do you sometimes think I am *?"]},
	"are" : {
				 "weight" : 1,
				 "responses" : ["Did you think they might not be *?","Would you like it if they were not *?","What if they were not *?","Possibly they are *."]},
	"your" : {
				 "weight" : 1,
				 "responses" : ["Why are you concerned over my *?","What about your own *?","Are you worried about someone else's *?","Really, my *?"]},
	"was i" : {
				 "weight" : 2,
				 "responses" : ["What if you were *?","Do you think you were *?","Were you *?","What would it mean if you were *?","What does * suggest to you?"]},
	"was you" : {
				 "weight" : 2,
				 "responses" : ["Would you like to believe I was *?","What suggests that I was *?","What do you think?"]},
	"i desire" : {
				 "weight" : 1,
				 "responses" : ["What would it mean to you if you got it?","Why do you want it?","What if you never got it?"]},
	"i desired" : {
				 "weight" : 1,
				 "responses" : ["Did you achieve it or simply moved on?"]},
	"i am sad" : {
				"weight" : 1,
				"responses" : ["Sorry to hear you are. Tell me about it."]
			},
	"i am happy" : {
				"weight" : 1,
				"responses" : ["That's good. What is making you happy?"]
			}

	
};

/*
 * Limits the number of duplicate in the responses that
 * have different keywords.
 */
var synonyms = {
	"sorry" : [
		"apologise"
	],
	"another language" : [
		"deutsch",
		"francais",
		"french",
		"italiano",
		"italian",
		"espanol",
		"spanish",
		"xforeign"
	],
	"dreamed" : [
		"dream",
		"dreams"
	],
	"i am" : [
		"am i",
		"im",
		"i'm"
	],
	"you" : [
		"you're",
		"you are"
	],
	"was i" : [
		"i was"
	]
};

var initialMessages = ["Hello. How are you feeling today?"];
//var initialMessages = ["Hi there, welcome to my office. I'm here to chat about anything. What's on your mind?", "How do you do. Please tell me your problem.","Please tell me what's been bothering you.", "Is something troubling you?", "Hello. How are you doing today?"];
var endChatTerms = ["goodbye","I have to leave","I have to leave.","quit","bye","exit"];
var chatHistory = [];
var keywords = [];
var conversationOver = false;
var usedResponses = [];


/*
 * Initial function to start the coversation with
 * Eliza. This decides the initial message.
 *
 * Adds response keywords and synonyms with weight.
 * Sorts the responses by weight so the more important
 * meaningful is found first.
 */
function startElizaChat(){
	
	//sorts keywords (keywords and similar word) into array based on weight.
	getKeywordsByWeight();


	var initialMessage = initialMessages[Math.floor(Math.random()*initialMessages.length)];
	chatHistory.push({ isEliza : true, content : initialMessage });
	displayChat();

}
/*
 * This function does what it kind of says above.
 * It finds all of the response keywords and their
 * weight. Then finds all of the similar words and
 * their weight (based on response keywords). Then
 * it sorts the whole list.
 * 
 * This function can be more efficient.
 */
function getKeywordsByWeight(){
	var weights = [];
	var tempKeywords = [];
	//Adds responses
	for(var responseKeyword in responses){
		var weight = responses[responseKeyword].weight;
		tempKeywords[responseKeyword] = weight;

		if(!weights.includes(weight)){
			weights.push(weight);
		}
	}

	
	//Add similar words
	for(var wordWithResponse in synonyms){
		if(wordWithResponse in tempKeywords){
			var weight = tempKeywords[wordWithResponse];

			for(var i = 0;i < synonyms[wordWithResponse].length;i++){
				var similarWord = synonyms[wordWithResponse][i];
				tempKeywords[similarWord] = weight;
			}
		}//otherwise ignores it
	}

	//Sorts them based on weight going from highest to lowest
	weights = weights.sort(sortNumber);
	
	//Populates keywords for final result to be used throughout
	for(var i = 0;i < weights.length;i++){
		var weight = weights[i];
		for(var word in tempKeywords){
			//NOT FOUND is the fallback word. So if it loops through all
			//and none match it will be this word.
			if(tempKeywords[word] === weight && word != "NOTFOUND"){
				var obj = {};
				obj.word = word;
				obj.weight = weight;

				keywords.push(obj);
			}
		}
	}
}
/*
 * SendElizaNewMessage is a function used for a one input, and one response
 * output. The idea is; here is where it gets the output from analyze but
 * this function manipulates the UI.
 */
function sendElizaNewMessage(newMessage){
	
	//Add to UI
	chatHistory.push({ isEliza : false, content : newMessage });
	displayChat();
	clearSendTextbox();

	if(!conversationOver){
		//Makes it lower case
		newMessage = processInput(newMessage);
		//Find the response based on the input. Check the analyze docs
		var response = analyze(newMessage);
	}else{
		var response = "Our conversation has ended. Refresh the page to start again.";
	}

	//Shows the reply from Eliza. To make it seem more real, takes a
	//random short time to response. Reloads the chat.
	setTimeout(function(){
		usedResponses.push(response);
		chatHistory.push({ isEliza : true, content : response });
		displayChat();
	}, determineResponseTime());

}
/*
 * Analyze is Eliza's main function get a response based on
 * user's current input. It also takes in consideration the
 * past messages, and a responses user/client engagement.
 */
function analyze(newMessage){
	var found = false;
	var response = '';

	//Check all
	for (var i = 0;i < keywords.length;i++) {
		var word = keywords[i].word;
		
		if(endChatTerms.contains(newMessage)){
			conversationOver = true;
			newMessage = "goodbye";
		}

		//Check to see if the keyword is in the sentence
		//Ex. input is "Hi" or "This and more" or "Hi doc!"
		if(newMessage.indexOf(word) != -1 && newMessage.length == word.length || newMessage.indexOf(word + " ") != -1 || newMessage.indexOf(" " + word) != -1){
				
			//This picks a response
			response = selectResponse(word);
			
			//Check for wild card
			if(response.indexOf("*") !== -1){
				//Wild card exists so sub in the phrase
				//Ex. I had a dream about my dog.
				//Dream is the keyword
				

				//Right of the keyword in the incoming message
				var remainingInput = newMessage.substring(newMessage.indexOf(word) + word.length+1, newMessage.length);
				//RemainingInput: [about my dog]
				
				//Right of the wildcard in the response
				var rightOfWildcardInResponse = response.substring(response.indexOf("*")+1);
				//Right of Wildcard In Response: [ while you were awake?]

				//Start of the response to the wildcard
				var startOfResponseToWildcard = response.substring(0, response.indexOf("*"));
				//Start of response to wildcard: [Have you ever fantasized]

				//The start of the remainingInput to the end minus the one character
				var startOfInputMinusOneCharacter = remainingInput.substring(0, remainingInput.length-1);
				//Start of input minus one character: [about my do]

				//This is remaining of the remaining input.
				//Regular expression replaces things that are not either A-Z or a-z
				var remainingOfInputOnRight = remainingInput.substring(remainingInput.length-1, remainingInput.length).replace("[^A-Za-z]","");
				//Remaining of Input on Right: [g]


				response =  startOfResponseToWildcard + replaceWords(startOfInputMinusOneCharacter + remainingOfInputOnRight) + rightOfWildcardInResponse;
				//Response: Have you ever fantasized about my dog while you were awake?

				//Changes the words and fixes the tenses.
				//Ex. I had a dream about my dog. --> Have you ever fantasized about your dog while you were awake?
				//But it only should work on the input not the response so you apply it to the inner parts.

				
			}


			found = true;
		}
		

	}

	if(!found){
		response = responses["NOTFOUND"].responses[Math.floor(Math.random()*responses["NOTFOUND"].responses.length)];
	}

	return response;
}
/*
 * Selects one of the responses based on a few things:
 * - Random (so responses aren't consistant)
 * - if contains wild card
 * - The responses passed in hold the highest value
 * - Checks if the response has been used already
 * 
 * I decided to add an additional(duplicate) response
 * instead of removing because I dont know how long the
 * conversation will go on for.
 *
 * Reason for creating a second array instead of manipulating
 * the existing one was because of a bug where it would
 * duplicate the duplicate.
 */
function selectResponse(word){
	var potentialResponses = [];
	if(word in responses){
		//Easily find responses by using key value pairing
		potentialResponses = responses[word];
	}else{
		//Need to find the related responses
		potentialResponses = findResponsesForSimilarWord(word);
	}

	
	var newResponses = [];
	var originalResponsesSize = potentialResponses.responses.length;


	for(var i = 0;i < originalResponsesSize;i++){
		newResponses.push(potentialResponses.responses[i]);

		//If has wild card, adds another
		if(potentialResponses.responses[i].indexOf("*") !== -1){
			newResponses.push(potentialResponses.responses[i]);
		}

		//If the response hasnt been used
		if(!usedResponses.contains(potentialResponses.responses[i])){
			newResponses.push(potentialResponses.responses[i]);
		}
	}
	
	return newResponses[Math.floor(Math.random()*newResponses.length)];
}
/*
 * Process input by making input lower case
 * and remove unnessary punctuation. 
 */
function processInput(message){
	message = message.toLowerCase();
	message = removePunctuation(message);
	return message;
}
/*
 * Replaces the context of words, flipping
 * the voice from the user to eliza.
 * 
 * It's split into an array so it doesn't
 * replace back and forth. Ex. me->i i->me
 */
function replaceWords(input){
	
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
	//Added in after testing
	wordsForReplacement["always had"] = "always have";
	
	
	var inputSplit = input.split(" ");

	//Was having an overrite issue
	var newSplit = [];
	for(var i = 0;i < inputSplit.length;i++){
		var currentInputWord = inputSplit[i];
		if(currentInputWord in wordsForReplacement){
			var replacementWord = wordsForReplacement[currentInputWord];
			newSplit[i] = replacementWord;

			//I had a dream about my dog.
		}else{
			newSplit[i] = currentInputWord;
		}
	}

	var updatedMessage = "";
	for(var i = 0;i < newSplit.length;i++){
		var word = newSplit[i];
		if(updatedMessage != ""){
			updatedMessage += " ";
		}
		updatedMessage += word;
	}

	return updatedMessage;
}
/*
 * Removes basic punctuation from the
 * user input message.
 */
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
/*
 * Randomly generate a response time
 */
function determineResponseTime(){
	var m = Math.floor(Math.random() * 2000) + 500;
	return m;
}
/*
 * Taken from: http://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
 * modified by Keith Weaver
 */
function sortNumber(a,b) {
    return b - a;
}
/*
 * Used to find the responses for similar words.
 * Looks up the key of the similar word. Then
 * fetches the responses.
 */
function findResponsesForSimilarWord(word){
	var foundKey = "";
	for(var key in synonyms){
		var similarWords = synonyms[key];
		for(var i = 0;i < similarWords.length;i++){
			if(similarWords[i] == word){
				foundKey = key;
				break;
			}
		}
		if(foundKey != ""){
			break;
		}
	}

	//Find responses for that key
	return responses[foundKey];
}
/*
 * Taken from: http://stackoverflow.com/questions/12623272/how-to-check-if-a-string-array-contains-one-string-in-javascript
 */
Array.prototype.contains = function ( needle ) {
   for (i in this) {
      if (this[i] == needle) return true;
   }
   return false;
}
