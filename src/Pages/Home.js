/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Itenaries from "../Components/Itenaries";
const Home = () => {
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

	// Remove Itenerary
    const deleteItenary = (ItenaryId) => {
        
		// const newItenaries = itenaryData.filter(
		// 	(itenary) => itenary.id !== ItenaryId
		// );
		// setItenaryData(newItenaries);

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
				<Link to="/all">
					<p className="font-normal text-blue-700 text-center mt-2">
						More Itineraries
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Home;
