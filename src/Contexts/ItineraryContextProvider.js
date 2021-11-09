/** @format */

import React, { useState, useEffect } from "react";
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
		});
	};

	const value = { itenaryData, deleteItenary };
	return (
		<ItineraryContext.Provider value={value}>
			{props.children}
		</ItineraryContext.Provider>
	);
};

export default ItineraryContextProvider;
