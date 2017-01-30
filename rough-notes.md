

The primary concerns are:
- the identification of keywords
- the discovery of minimal context
- the choice of approriate transformations
- generation of responses in key words
- the provision of an editing capability for eliza scripts


The simple procedure of the program: 
- The text is read and inspected for the presence of a keyword
	- If such a word is found, the sentence is transformed according to a rule associated with the keyword
	- if not a content free remark or under certain conditions, an earlier transformation is retreived. The text so computed or retrieved is then printed out.

Keywords, for example, may have a RANK or precedence number.

The procedure is sensitive to such numbers in that it will abandon a keyword already found in the left-to-right scan of the text in favor of one having a higer rank.
The procedure recognizes a comma or period as a delimiter. Whenever either one is encountered and a keyword has already been found, all subsequent text is deleted from the input message.
If no key had yet been found the phrase or sentence to the left of the delimiter is deleted.
