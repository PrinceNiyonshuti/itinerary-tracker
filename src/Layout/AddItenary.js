/** @format */

import React, { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../Components/Button";

const AddItenary = () => {
	const history = useHistory();
	// Form variables
	const itenaryTitle = useRef();
	const itenaryDate = useRef();
	const itenaryTime = useRef();
	const itenaryDescription = useRef();
	const itenaryForm = useRef();

	const newItenary = (event) => {
		event.preventDefault();

		const title = itenaryTitle.current.value;
		const date = itenaryDate.current.value;
		const time = itenaryTime.current.value;
		const description = itenaryDescription.current.value;

		const itenary = { title, date, time, description };

		fetch("http://localhost:8000/itenaryList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(itenary),
		}).then(() => {
			console.log("New Data added");
			history.push("/");
		});
	};
	return (
		<div>
			<h3 className="font-bold text-lg mb-1 mx-5">New Itenary</h3>
			<form onSubmit={newItenary} ref={itenaryForm}>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<div className=" p-3 w-full">
							<input
								type="text"
								id="title"
								required
								ref={itenaryTitle}
								className="border p-2 rounded w-full"
								placeholder="Itenary Title"
							/>
						</div>
						<div className=" p-3 w-full">
							<input
								type="date"
								id="date"
								required
								ref={itenaryDate}
								className="border p-2 rounded w-full"
								placeholder="Itenary Date"
							/>
						</div>
						<div className=" p-3 w-full">
							<input
								type="time"
								id="time"
								required
								ref={itenaryTime}
								className="border p-2 rounded w-full"
								placeholder="Itenary Time"
							/>
						</div>
						<div className=" p-3 w-full">
							<textarea
								rows="3"
								id="description"
								required
								ref={itenaryDescription}
								className="border p-2 rounded w-full"
								placeholder="Write something..."
							/>
						</div>

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
