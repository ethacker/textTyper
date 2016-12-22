'use strict';
var textTyper = {
	typeWord: function(word,element,speed,callback){
		var i =0;
		var baseText = element.firstChild.nodeValue;
		var cursor = textTyper.generateCursor(element);
		cursor.style.opacity=1;
		var addLetter = function(i){
			if(word.length<=i++) {
				element.removeChild(cursor);
				if(callback){
					callback();
				}
				return;
			}
			element.firstChild.nodeValue= baseText+word.substr(0,i);
			element.appendChild(cursor);
			var rand = (Math.random()+0.5)*speed;
			setTimeout(function () {addLetter(i)},rand);
		};
		addLetter(i);
	},
	deleteWords: function(characterCount,element,speed){
		var i=element.firstChild.nodeValue.length;
		var cursor = textTyper.generateCursor(element);
		cursor.style.opacity=1;
		var removeLetter =function(i){
			if(i--<=characterCount){
				element.removeChild(cursor);
				return;
			}
			element.firstChild.nodeValue=element.firstChild.nodeValue.substr(0,i);
			element.appendChild(cursor);
			var rand = (Math.random()+0.2)*speed;
			setTimeout(function(){removeLetter(i)},rand);
			return;
		};
		removeLetter(i);
	},
	generateCursor: function (element) {
		var cursorLine = document.createElement('div');
		cursorLine.style.height= window.getComputedStyle(element).getPropertyValue('height');
		cursorLine.style.display='inline-block';
		cursorLine.style.backgroundColor='white';
		cursorLine.style.width='2px';
		cursorLine.style.position='absolute';
		cursorLine.style.transition = 'opacity 0.1s';
		return cursorLine;
	},
	addWord:function(id,word,speed){
		textTyper.typeWord(word,document.getElementById(id),speed);
	},
	removeWord:function(id,count,speed){
		textTyper.deleteWords(count,document.getElementById(id),speed);
	},
	wordsArray:function(id,words,speed,delay){
		var element = document.getElementById(id);
		var i=0;
		var secondarySpeed=0;
		words.forEach(function(text){
			secondarySpeed+=text.length;
		});
		secondarySpeed=secondarySpeed/(words.length);
		console.log(secondarySpeed);
		var nextWord = function(){
			if(i<words.length) {
				var word = words[i];
				setTimeout(function(){
					textTyper.addAndDeleteWord(id,word,speed,1000);
					i++;
					nextWord();
				},secondarySpeed*(delay));
			}
		}
		textTyper.addAndDeleteWord(id,words[i],speed,600);
		i++;
		nextWord();
	},
	addAndDeleteWord:function(id,word,speed,delay) {
		var element = document.getElementById(id);
		var length = element.firstChild.nodeValue.length;
		var deleteWait = function(i,l,s){
			setTimeout(function(){textTyper.removeWord(i,l,s)},delay);
		};
		textTyper.typeWord(word,element,speed,function(){deleteWait(id,length,speed)});
	}
};
