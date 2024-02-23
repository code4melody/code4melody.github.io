import React from "react";

const Questions = (listOfQuestions) => {

	const showQuestion = (question) => {
		alert(question);
	}

	return (
		<>
			{listOfQuestions.listOfQuestions.map((row, id) => {
				return <tr key={id}>{row.map((question, i) => {
					return <td 
						key={i} 
						className='questionBox' 
						id='question' 
						onClick={() => showQuestion(question)}
						>{100 * (id + 1)}</td>
				})}</tr>
			})}
		</>
	)
}

export default Questions;