# textTyper
Javascript library to simulate the visual effect of words being typed.

###*For word arrays the delay is calculated based on average length so it may be necessary*
###*to adjust the timing in the code to improve look*


#Usage
##Add a single string
###textTyper.addWord(Element ID, Text to be added,Bool Cursor, Speed in ms,Optional Callback)
   ex: textTyper.addWord('my-div-id','Add this text',true, 500,myFunction());

##Remove a number of characters from the end
###textTyper.removeWord(Element ID, Characters to remain, Bool Cursor, Speed in ms, Optional Callback)
   ex: textTyper.removeWord('my-div-id',12,true,300,myFunction());

##Add a string and then remove it after pausing for a moment
###textTyper.addAndDeleteWord(Element ID, Text to be added removed, Bool Cursor, Speed in ms,Delay in ms)
   ex: textTyper.addAndDeleteWord('my-div-id',"Add and remove this text",true,400,600);

##Add and remove an array of strings
###textTyper.wordsArray(Element ID, String Array, Bool Cursor, Speed in ms)
   ex: textTyper.wordsArray('my-div-id',['first','second','third'],true,500);
