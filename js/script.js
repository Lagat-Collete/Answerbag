

function myButton(){
var score = 0;
var currentAnswer1 = document.answerbag.question1.value;
var currentAnswer2 = document.answerbag.question2.value;
var currentAnswer3 = document.answerbag.question3.value;
var currentAnswer4 = document.answerbag.question4.value;
var currentAnswer5 = document.answerbag.question5.value;
var currentAnswer6 = document.answerbag.question6.value;
var currentAnswer7 = document.answerbag.question7.value;
var currentAnswer8 = document.answerbag.question8.value;
var currentAnswer9 = document.answerbag.question9.value;
var currentAnswer10 = document.answerbag.question10.value;

if (currentAnswer1=="substr()"){score+=10};
if (currentAnswer2=="document.myform.elements.length"){score+=10};
if (currentAnswer3=="whether there is javascript or not"){score+=10};
if (currentAnswer4=="display the content of the tags <noscript>"){score+=10};
if (currentAnswer5=="/* var x = 0; */ var y = 0;"){score+=10};
if (currentAnswer6=="onmouseout"){score+=10};
if (currentAnswer7=="onmousescroller"){score+=10};
if (currentAnswer8=="Both A and B are true."){score+=10};
if (currentAnswer9=="charAt()"){score+=10};
if (currentAnswer10=="sum()"){score+=10};

if (score>80)) {
   score.textContent= "You have excellently passed."
   else if
} else {
  
}
 document.write(score);

}
































