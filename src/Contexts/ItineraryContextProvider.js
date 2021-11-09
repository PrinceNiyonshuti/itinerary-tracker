/** @format */

import React, { useState, useEffect, useRef } from "react";
import { ItineraryContext } from "./ItineraryContext";

const ItineraryContextProvider = (props) => {
	const [itenaryData, setItenaryData] = useState(null);

	// Retrieve all Itenerary
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/?_limit=2`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
	}, []);

	// Delete Itenerary
	const deleteItenary = (ItenaryId) => {
		fetch(`http://localhost:8000/itenaryList/` + ItenaryId, {
			method: "DELETE",
		}).then(() => {
			console.log("Itinerary Deleted");
			window.location.reload();
		});
	};

	// Adding new itinerary Section
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
		const priority = false;

		const itinerary = { title, date, time, description, priority };

		fetch("http://localhost:8000/itenaryList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(itinerary),
		}).then(() => {
			console.log("New Itinerary added");
			// history("/");
		});

		itenaryForm.current.reset();
	};

	const value = {
		itenaryData,
		newItenary,
		itenaryTitle,
		itenaryDate,
		itenaryTime,
		itenaryDescription,
		itenaryForm,
		deleteItenary,
	};
	return (
		<ItineraryContext.Provider value={value}>
			{props.children}
		</ItineraryContext.Provider>
	);
};

export default ItineraryContextProvider;
