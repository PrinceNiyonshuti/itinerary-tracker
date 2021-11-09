/** @format */

import React, { useContext } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import { ItineraryContext } from "../Contexts/ItineraryContext";

const AddItenary = () => {
	

	// const newItenary = (event) => {
	// 	event.preventDefault();

	// 	const title = itenaryTitle.current.value;
	// 	const date = itenaryDate.current.value;
	// 	const time = itenaryTime.current.value;
	// 	const description = itenaryDescription.current.value;
	// 	const priority = false;

	// 	const itenary = { title, date, time, description, priority };

	// 	fetch("http://localhost:8000/itenaryList", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(itenary),
	// 	}).then(() => {
	// 		console.log("New Itinerary added");
	// 		history("/");
	// 	});

	// 	itenaryForm.current.reset();
	// };

	const {
		newItenary,
		itenaryTitle,
		itenaryDate,
		itenaryTime,
		itenaryDescription,
		itenaryForm,
	} = useContext(ItineraryContext);
	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form onSubmit={newItenary} ref={itenaryForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input
							type={"text"}
							id={"title"}
							refData={itenaryTitle}
							placeholder={"Itinerary Title"}
						/>

						<Input
							type={"date"}
							id={"date"}
							refData={itenaryDate}
							placeholder={""}
						/>

						<Input
							type={"time"}
							id={"time"}
							refData={itenaryTime}
							placeholder={""}
						/>

						<TextArea
							id={"description"}
							rows={"3"}
							refData={itenaryDescription}
							placeholder={"Write something..."}
						/>

						<div className="flex justify-between mx-3">
							<div>
								<Button name="New Itenary" />
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddItenary;
