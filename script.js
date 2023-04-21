const form = document.querySelector('#quiz-form');
const questions = form.querySelectorAll('.question');
const nextBtns = form.querySelectorAll('.next-btn');
const correctAnswers = ['a', 'c', 'b', 'c'];
let currentQuestion = 0;

nextBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		questions[currentQuestion].classList.remove('active');
		currentQuestion += 1;
		if (currentQuestion === questions.length - 1) {
			btn.textContent = 'Submit Quiz';
		}
		if (currentQuestion === questions.length) {
			form.submit();
			return;
		}
		questions[currentQuestion].classList.add('active');
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	let score = 0;
	const userAnswers = [];
	
	questions.forEach((question, index) => {
		const selected = question.querySelector('input[type="radio"]:checked');
		if (selected) {
			const answer = selected.value;
			userAnswers.push(answer);
			const labels = question.querySelectorAll('label');
			labels.forEach((label) => {
			  const input = label.querySelector('input');
			  if (input.value === answer) {
				if (answer === correctAnswers[index]) {
				  label.classList.add('correct');
				} else {
				  label.classList.add('wrong');
				}
			  } else if (input.value === correctAnswers[index]) {
				label.classList.add('correct');
			  }
			});
			if (answer === correctAnswers[index]) {
			  score += 1;
			} else {
			userAnswers.push(undefined);
			}
		}
	});
	
	alert(`You scored ${score} out of ${questions.length}!`);
	console.log(userAnswers);
});
