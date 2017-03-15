
var quizItems =[
{
	question: "What is Magneto's real name?",
	cAns1: "Max Eisenhardt",
	fAns1: "Erik Lensherrer",
	fAns2: "Kurt Wagonner",
},
{
	question: "Where was Storm born?",
	cAns1: "Manhattan",
	fAns1: "Cairo",
	fAns2: "Wakanda",
},
{
	question: "Who is Kurt Wagoner/Nightcrawler's mother?",
	cAns1: "Mystique",
	fAns1: "Jean Grey",
	fAns2: "Azazel",
},
{
	question: "What is Wolverine's real name?",
	cAns1: "James Howlett",
	fAns1: "Logan",
	fAns2: "Victor Creed",
},
{
	question: "What superhero did Rogue kill to gain the ability to fly?",
	cAns1: "Ms Marvel",
	fAns1: "Angel",
	fAns2: "Jean Grey",
},
{
	question: "Which alternate timeline gay mutant was thrown into hell for kissing a demigod?",
	cAns1: "Wolverine",
	fAns1: "Colussus",
	fAns2: "Iceman",
},
{
	question: "Which is the first openly gay mutant in the marvel universe?",
	cAns1: "Northstar",
	fAns1: "Bobby Drake",
	fAns2: "Wiccan",
},
{
	question: "The Weapon X program was based on which mutant's Nazi experiments?",
	cAns1: "Nathan Essex/ Mr. Sinister ",
	fAns1: "Redskull",
	fAns2: "Dr Octopus",
},
{
	question: "Which character has not been an X-men, Avenger and villain?",
	cAns1: "Hank Pym",
	fAns1: "Deadpool",
	fAns2: "Wanda Maximoff",
}];

console.log(quizItems[1].question);




function quizapp(){
	var correctScore =0; 
	var incorrectScore =0;

	for(var clickCount =0; clickCount <3; clickCount++){
//Function to generate list of questions and place them in an html field
		for(var i=0; i<3; i++){
			var ranNum = Math.floor(Math.random()*10);
			var htmlQues= '<span class="question-item"><p>'+quizItems[ranNum].question+'</p>';
			var htmlcAns= '<label><input type="radio" name="ans1" value="true" />'+quizItems[ranNum].cAns1+'</label></br>';
			var htmlfAns1='<label><input type="radio" name="ans1" value="false" />'+quizItems[ranNum].fAns1+'</label></br>';
			var htmlfAns2='<label><input type="radio" name="ans1" value="false" />'+quizItems[ranNum].fAns2+'</label></br></span>';
			if(i%2 === 0){
				$('.question-list').html(htmlQues+htmlcAns+htmlfAns1+htmlfAns2);
			}
			else{
				$('.question-list').html(htmlQues+htmlfAns2+htmlfAns1+htmlcAns);
			};
		}

//function to count correct and incorrect answers and place them in bottom html 
		clickCount = $('.submit-answer').on('click', this, function(e){
			e.preventDefault();
			var choice = document.getElementById("js-quiz").value; 
			if(choice == 'true'){
				correctScore++;
				$('.js-correct-score-counter').text(correctScore);
			}
			else{
				incorrectScore++;
				$('.js-incorrect-score-counter').text(inccorrectScore);

			}
			
		});
	}
};






$(document).ready(function(){
	$('#js-quiz-start').submit(function(e){
		e.preventDefault();
		$('.question-list').removeClass('hidden');
		$('.submit-answer').removeClass('hidden');
		$('#js-quiz-start').addClass('hidden');
		quizapp()
	});
});
