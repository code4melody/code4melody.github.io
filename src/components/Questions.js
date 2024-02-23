import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Questions = (listOfQuestions) => {

	const [open, setOpen] = React.useState(false);
	const [question, setQuestion] = React.useState('');

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const showQuestion = (question) => {
		setQuestion(question);
		handleOpen()
	}

	const style = {
		
	  };

	return (
		<>
			{listOfQuestions.listOfQuestions.map((row, id) => {
				return <tr key={id}>{row.map((question, i) => {
					return <td 
						key={i}  
						onClick={() => showQuestion(question)}
						>{100 * (id + 1)}</td>
				})}</tr>
			})}
			<Modal 
				className="modalBox"
				open={open}
				onClose={handleClose}
			>
				<Box className="modal">
					<Typography variant="h6">{question}</Typography>
				</Box>
			</Modal>
		</>
	)
}

export default Questions;