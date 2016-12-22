# textTyper
Javascript library to simulate the visual effect of words being typed.

###*For word arrays the delay is calculated based on average length so it may be necessary*
###*to adjust the timing in the code to improve look*


#Usage
##Add a single string
textTyper.addWord(Element ID, Text to be added, Speed in ms)
   ex: textTyper.addWord('my-div-id','Add this text', 500);

##Remove a number of characters from the end
textTyper.removeWord(Element ID, Characters to remain, Speed in ms)
   ex: textTyper.removeWord('my-div-id',12,300);
   
##Add a string and then remove it after pausing for a moment
textTyper.addAndDeleteWord(Element ID, Text to be added and removed, Speed in ms,Delay in ms)
   ex: textTyper.addAndDeleteWord('my-div-id',"Add and remove this text",400,600);
   *Will add a word at speed 400, wait 600, and then delete at speed 400*
   
##Add and remove an array of strings
textTyper.wordsArray(Element ID, String Array, Speed in ms)
   ex: textTyper.wordsArray('my-div-id',['first','second','third'],500)
