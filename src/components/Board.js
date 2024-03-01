import React from "react";
import Questions from "./Questions";

// component for the jeopardy board
const Board = () => {

	let questions = [
		["Book of Mark is part of the Old Testament", "This Hebrew word was spoken as Jesus triumphantly rode on a colt. Means 'Save us'", "Jesus fed this many people with 5 loaves of bread and 2 fish", "'Follow me and I will make you fish for people'", "Walking on water", "Number of baskets left over after feeding the 4000"],
		["More people were fed with 7 loaves of bread than 5", "One of the last words spoken by Jesus on the cross. Means 'My God'", "Number of Jesus's disciples", "'I want you to give me John the Baptist's head on a platter immediately'", "(Gold)fisherman Part 1/2", "'I don't know this man you're talking about!"],
		["Name of the disciple who betrayed Jesus is Judah",  "First part of the phrase spoken by Jesus to bring Jairus's daughter back to life. Aramaic for 'little girl'", "Number of chapters in Mark", "'Who will roll away the stone from the entrance to the tomb for us? (any one of three possible answers will work)'", "From sinner to one who is forgiven", "(Gold)fisherman Part 1/2"],
		["1st miracle performed by Jesus in the book of Mark is turning water into wine", "Place where Jesus was brought to for crucifixion. Means Place of the Skull", "Number of coins that the poor window gave us an offering at the temple", "'Are you the King of Jews?'", "The triumphant entry", "Means offering devoted to God in Hebrew"],
		["Mark is the shortest book among the gospels by the number of chapters", "Spoken by Jesus to heal a deaf man. Means 'Be opened'", "Imagine a right triangle. Find the hypotenuse when one leg is number of loaves of bread used to feed 5000, and the other is the number of Jesus's disciples", "'Lord, even the dogs under the table eat the children's crumbs'", "Hearing God's voice while blind", "In the parable of the sower, seed fell on the good ground produced fruit that increased 25, 50, and 100 times" ]
	];

	return (
		<table id="jeopardyBoard">
			<thead>
				<tr>
					<th className="titles">BOOLEAN MARK</th>
					<th className="titles">HE BREWS ARAMAIC</th>
					<th className="titles">NUMBERS & MARK</th>
					<th className="titles">BOYS & GIRLS</th>
					<th className="titles">MOVE IT MOVE IT</th>
					<th className="titles">ANYTHING GOES</th>
				</tr>
			</thead>
			<tbody>
				<Questions listOfQuestions={questions}/>
			</tbody>
		</table>
	)
}

export default Board;