/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Itenaries from "../Components/Itenaries";

function AllItinerary() {
	const [itenaryData, setItenaryData] = useState(null);

	// Retrieve all Itenerary
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
	}, []);

	// Remove Itenerary
	const deleteItenary = (ItenaryId) => {

		const deleteItenerary = fetch(
			`http://localhost:8000/itenaryList/` + ItenaryId,
			{
				method: "DELETE",
			}
		).then(() => {
			console.log("Itenary Deleted");
			window.location.reload();
		});
		setItenaryData(...itenaryData, deleteItenerary);
	};
	return (
		<div>
			<div className="w-full p-4">
				<ul>
					{itenaryData && (
						<Itenaries
							itenaryData={itenaryData}
							deleteItenary={deleteItenary}
						/>
					)}
				</ul>
			</div>
		</div>
	);
}

export default AllItinerary;
