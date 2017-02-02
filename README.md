# eliza

![Example of Eliza](./assets/imgs/example_shot.png)


### About

This is an implementation of Eliza built in pure Javascript. I wanted to build it on a MERN stack but my starting point is in just JS. You can find a more indepth description below.

### Running

You have two options:

**Option #1:**
It's hosted on Github Pages at http://kweaver00.github.io/eliza/.


**Option #2:**
Just open the index HTML file on your local machine, so [this one](./index.html).



### Why Javascript?

I decided to build out my implementation of Eliza in Javascript because it can be run on most computers, using most browsers. There's no installation time and I include the dependencies in the index.html. I can also create a Github Pages demo forever.


### File Structure

```
- index.html
- README.md
assets    css
		  imgs

js  	- actions.js 		// All UI related functions and actions
		- notifications.js  // Allows me to create dynamic notifications for informing user
		- demo.js 			// Runs a few example inputs
		- eliza.js 			// The actual eliza implementation
```


### Explanation

The program has been built with two major steps; start and send new message. The start function runs once the page is loaded. It begins by creating a list of keywords based on a pre-determined list of responses and a pre-determined list of similar words. An example of a response:

```
var responses = {
"sorry" : {
				 "weight" : 1,
				 "responses" : ["Please don't apologize.", "Apologies are not necessary.", "Apologies are not required."]},
...
```

An example of a similar word:
```
var synonyms = {
	"sorry" : [
		"apologise"
	],
...
```

The idea is instead of repeating exact responses for multipe words like `sorry` and `apologise` or `youre` and `you're`. It uses the list of synonyms object to find responses in advance of any messages. After all potential keywords are added with their weight, the keyword list is sorted from on highest weighed to lowest. The weight better determines relevance towards particular subjects like family or computer. It next adds the first message to begin the conversation. *"Hello. How are you feeling today?"*


The program using jQuery to determine when the window loads and when there is a new input. A user simply has to type a new message into the textbox and presses enter. This eliminates the need for continuous looping. When a user sends a new message to Eliza, the program verifies the textbox is not blank and adds to the UI before beginnig to analyze the string for a response.


```
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
```

The purpose of the analyze function is to find an appropriate response based on the input string, the weight of the keywords, the past chat messages, a degree of randomness and the engagement from the response. The program first looks for a keyword starting with the most heavily weighted and working down. If a term is found, and that term does not represent goodbye, it continues to find a response.


The `selectResponse` uses all attributes mentioned before to determine the optimal and most realistic response. It first gathers a list of possible responses for that keyword. The program then looks for a response containing a wild card subject or a response that has not been used before. If it matches either it adds a duplicate to the list of responses to increase the odds of them occurring. The use of a wild card makes it a more engaging conversation being able to reply with the context and content from the known information. In the example below it takes the response `Have you ever fantasized about * while you were awake?` and the program knows to replace the `*` with the incoming content.


Example of a wild card: (Dream is the keyword)

```
User> I had a dream last night about my dog eating my homework
Eliza> Have you ever fantasized about your dog eating your homework while you were awake?
```


Another way `selectResponse` increase the realness to Eliza is by storing past responses and minimizing the amount of repeated content. A therapist may repeat their questions but commonly they ask a variety of questions. The last step for `selectResponse` is a degree of randomness to continuously change the questions coming from Eliza.


```
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
```


Looking back at the `analyze` function, the program now has a response. This response could potentially have a wild card. If no wild card is found, the function simply just returns the response from Eliza. If no response is found, there are a list of responses that encourage the user to continue provide more information. However if a wild card is found it begins to insert the contents into the response. The first step is to take the content to the right of the keyword in the incoming message. The second step is to split the response in two around the * (and excludes it). The third step is to paste the pieces together in the proper order. There is an example included in the comments of the code. During the pasting portion, we modified the contents of the user input with the `replaceWords` function. In the `replaceWords` function, we change the perspective of the content to Eliza's point of view as compared to the users. As you can see below we change "my" to be "your", "I" to be "you", etc. This is so the reply does not seem like Eliza is simply returning the input.

```
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
```


After the program updates the chat with the new response. It waits for the next input.

