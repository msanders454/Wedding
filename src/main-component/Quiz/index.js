import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './style.css'

export default function App() {
	const questions = [
		{
			questionText: 'Which Dining Commons did Jessi and Mike meet?',
			answerOptions: [
				{ answerText: 'East', isCorrect: false },
				{ answerText: 'Pollock', isCorrect: true },
				{ answerText: 'West', isCorrect: false },
				{ answerText: 'Hub', isCorrect: false },
			],
		},
		{
			questionText: `What is Jessi's favorite plant?`,
			answerOptions: [
				{ answerText: 'Cactus', isCorrect: true },
				{ answerText: 'Daisys', isCorrect: false },
				{ answerText: 'Roses', isCorrect: false },
				{ answerText: 'Dandy Lions', isCorrect: false },
			],
		},
		{
			questionText: `What is Mike's favorite football team?`,
			answerOptions: [
				{ answerText: 'Rams', isCorrect: false },
				{ answerText: 'Steelers', isCorrect: false },
				{ answerText: 'Eagles', isCorrect: true },
				{ answerText: 'Bills', isCorrect: false },
			],
		},
		{
			questionText: 'How many Goosebumps books did Jessi read?',
			answerOptions: [
				{ answerText: '15', isCorrect: false },
				{ answerText: '30', isCorrect: false },
				{ answerText: '60', isCorrect: false },
				{ answerText: '0', isCorrect: true },
			],
		},
        {
			questionText: `Who were Mike's roommates in his final year of college?`,
			answerOptions: [
				{ answerText: 'Bilal and Tony', isCorrect: false },
				{ answerText: 'Matt and Tony', isCorrect: false },
				{ answerText: 'Jake and Julian', isCorrect: false },
				{ answerText: 'Bilal and Jake', isCorrect: true },
			],
		},
        {
			questionText: `What is the Mike and Jessi's cat's name?`,
			answerOptions: [
				{ answerText: 'Thor Rudoloph Hammond', isCorrect: false },
				{ answerText: 'Sprigatito Shawn Sanders', isCorrect: false },
				{ answerText: 'Boog Gey Sanders', isCorrect: true },
				{ answerText: 'Borg George Sammond', isCorrect: false },
			],
		},
        {
			questionText: `How many siblings does Jessi have?`,
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
        {
			questionText: `What Sport did Jessi play in High School?`,
			answerOptions: [
				{ answerText: 'Lacrosse', isCorrect: true },
				{ answerText: 'Soccer', isCorrect: false },
				{ answerText: 'Softball', isCorrect: false },
				{ answerText: 'Tennis', isCorrect: false },
			],
		},
        {
			questionText: `What is Mike's favorite Pokemon?`,
			answerOptions: [
				{ answerText: 'Pikachu', isCorrect: false },
				{ answerText: 'Bulbasaur', isCorrect: true },
				{ answerText: 'Machamp', isCorrect: false },
				{ answerText: 'Garchomp', isCorrect: false },
			],
		},
        {
			questionText: `What was Jessi's favorite TV show, growing up?`,
			answerOptions: [
				{ answerText: 'Fruit Basket', isCorrect: false },
				{ answerText: 'Psych', isCorrect: false },
				{ answerText: 'Full House', isCorrect: false },
				{ answerText: 'Dr. Who', isCorrect: true },
			],
		},
        {
			questionText: `What year did Mike learn about the US Presidents`,
			answerOptions: [
				{ answerText: '2002', isCorrect: false },
				{ answerText: '2000', isCorrect: false },
				{ answerText: '2004', isCorrect: true },
				{ answerText: '2008', isCorrect: false },
			],
		},
        {
			questionText: `What is Jessi's favorite pastime?`,
			answerOptions: [
				{ answerText: 'Knitting', isCorrect: false },
				{ answerText: 'Crocheting', isCorrect: true },
				{ answerText: 'Sewing', isCorrect: false },
				{ answerText: 'Cross-Stitching', isCorrect: false },
			],
		},
        {
			questionText: `What s Mike's favorite dessert?`,
			answerOptions: [
				{ answerText: 'Choclate Cake & Vanilla Ice Cream', isCorrect: false },
				{ answerText: 'Cheese Cake & Chocolate Ice Cream', isCorrect: false },
				{ answerText: 'Marble Cake & Cookies and Cream Ice Cream', isCorrect: false },
				{ answerText: 'Pound Cake & Vanilla Ice Cream', isCorrect: true },
			],
		},
        {
			questionText: `Which State was Jessi born in?`,
			answerOptions: [
				{ answerText: 'Pennsylvania', isCorrect: true },
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Alabama', isCorrect: false },
				{ answerText: 'Maryland', isCorrect: false },
			],
		},
        {
			questionText: `Which Subway did Mike have to take to visit Matt in High School?`,
			answerOptions: [
				{ answerText: 'Market Frankford Line', isCorrect: false },
				{ answerText: 'R7 Line', isCorrect: false },
				{ answerText: 'Broad St. Line', isCorrect: true },
				{ answerText: 'Patco Speedway', isCorrect: false },
			],
		},
        {
			questionText: `Which club was Jessi the tresurer for in Undergrad?`,
			answerOptions: [
				{ answerText: 'Swing Dance', isCorrect: true },
				{ answerText: 'TARDIS', isCorrect: false },
				{ answerText: 'AMSA', isCorrect: false },
				{ answerText: 'Crocheting Club', isCorrect: false},
			],
		},
        {
			questionText: `Which 2 sports did Mike grow up pplaying mostly?`,
			answerOptions: [
				{ answerText: 'Soccer, Baseball', isCorrect: true },
				{ answerText: 'Soccer, Swimming', isCorrect: false },
				{ answerText: 'Football, Baseball', isCorrect: false },
				{ answerText: 'Football, Swimmings', isCorrect: false},
			],
		},
        {
			questionText: `Which Non-TV  did Michael grow up watching the most?`,
			answerOptions: [
				{ answerText: 'Roseanne', isCorrect: false },
				{ answerText: 'Fresh Prince', isCorrect: false },
				{ answerText: 'How I Met Your Mother', isCorrect: false },
				{ answerText: 'Full House', isCorrect: true},
			],
		},
        {
			questionText: `Which medical field is Jessi pursuing residency for?`,
			answerOptions: [
				{ answerText: 'Orthopedics', isCorrect: false },
				{ answerText: 'PMNR', isCorrect: true },
				{ answerText: 'Internal Medicine', isCorrect: false },
				{ answerText: 'Neuro', isCorrect: false},
			],
		},
        {
			questionText: `What is the name for a frozen or semi-frozen sweetened treat served at Ritas?`,
			answerOptions: [
				{ answerText: 'Water Ice', isCorrect: true },
				{ answerText: 'Intalian Ice', isCorrect: false },
				{ answerText: `I know what you're thinking. Everyone outside of Philly is wrong.`, isCorrect: true },
				{ answerText: `If you don't choose water ice, you are wrong.`, isCorrect: false},
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
           <Link to='/' aria-label="Next">
                 <i className="back-quiz">Back</i>
           </Link>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}