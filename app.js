
var state ={
	quiz: [
				{
					question: "What is Magneto's real name?",
					answer:[ "Max Eisenhardt","Erik Lensherrer","Kurt Wagonner", "Henrich Von Heim"],
					corPos: 0,
				},
				{
					question: "Where was Storm born?",
					answer: ["Cairo","Wakanda", "Manhattan","Tanzania"],
					corPos:2,
				},
				{
					question: "Who is Kurt Wagoner/Nightcrawler's mother?",
					answer: ["Jean Grey","Azazel","Mystique","Jubilee"],
					corPos:2,
				},
				{
					question: "What is Wolverine's real name?",
					answer: ["James Howlett","Logan","Victor Creed","Sebastian Stan"],
					corPos: 0,
				},
				{
					question: "What superhero did Rogue kill to gain the ability to fly?",
					answer: ["Angel","Jean Grey","Ms Marvel","Northstar"],
					corPos: 2,
				},
				{
					question: "Which alternate timeline gay mutant was thrown into hell for kissing a demigod?",
					answer: ["Colussus","Wolverine","Iceman","Midnighter"],
					corPos: 1,
				},
				{
					question: "Which is the first openly gay mutant in the marvel universe?",
					answer: ["Bobby Drake","Wiccan","Hulkling","Northstar"],
					corPos: 3,
				},
				{
					question: "The Weapon X program was based on which mutant's Nazi experiments?",
					answer: ["Nathan Essex/ Mr. Sinister ","Redskull","Dr Octopus","Moira McTaggert"],
					corPos: 0,
				},
				{
					question: "Which character has not been an X-men, Avenger and villain?",
					answer:["Deadpool","Hank Pym","Wanda Maximoff","Quicksilver"],
					corPos: 0,
				}],
	correctScore: 0,
	currentPosition: 0
};


var guess = state.currentScore;

$(document).ready(function(){
	$('#js-quiz-start').submit(function(e){
		e.preventDefault();
		displayQuestions();
		$('.question-list').removeClass('hidden');
		$('.submit-answer').removeClass('hidden');
		$('#js-quiz-start').addClass('hidden');
		checkAnswer();
	});

});


// randomly choose 3 questions and push them to chosenQuestions;
// generate a random number, push that question, then splice that question from quizItems
// generate random number based on quizItems.length not hard code in 10


function displayQuestions(){
	console.log(state.currentPosition);
	var ques = state.quiz[state.currentPosition];
	if(state.currentPosition == state.quiz.length){
		displayResults();
	}
	else
		$('.question-item').html(" ");
		$('.question-item').html('<p>'+ques.question+'</p>');
		console.log(state.quiz[state.currentPosition]);

		$('ul.answers').html('');

		for( var i = 0; i < ques.answer.length; i++){
			if (i != ques.corPos){
				$('.question-item').append('<label><input type="radio" name="ans1" value="0" />'+ques.answer[i]+'</label></br>');
			}
			else{
				$('.question-item').append('<label><input type="radio" name="ans1" value="1" />'+ques.answer[i]+'</label></br>');
			}
			

		}
}
 function checkAnswer(){
 	$('.submit-answer').on('click', this, function(e){
 		e.preventDefault();
 		var result= $('input:radio[name="ans1"]:checked');
 		console.log(result.val());
 		if( result.val() == 1){
 			state.correctScore++
 		};
 		state.currentPosition++ ; 
 		console.log(state.correctScore);
 		console.log(state.currentPosition)
 	
 		displayQuestions();
 	});
 	
}


function displayResults(){
	if( state.currentPosition == state.quiz.length){
		$('.js-score').removeClass('hidden');
		$('.submit-answer').addClass('hidden');
		$('.js-score').text('You Scored '+state.correctScore+' out of '+ state.quiz.length);
		$('.js-end').removeClass('hidden');
		endGame();
	}
	
}

function endGame(){
	
	$('.js-end').on('click', this, function(e){
 		e.preventDefault();
 		state.currentPosition =0;
 		state.correctScore =0;
 		$('.js-end').addClass('hidden');
 		$('.js-score').addClass('hidden');
 		$('.submit-answer').removeClass('hidden');
 		displayQuestions();
	});
}




