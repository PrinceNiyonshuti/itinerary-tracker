/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ItineraryContext } from "../Contexts/ItineraryContext";
function Itenaries({ itenaryData, deleteItenary }) {
	
	const { handlePriority } = useContext(ItineraryContext);

	return (
		<div>
			{itenaryData.map((itenary) => (
				<li
					key={itenary.id}
					className="flex justify-between items-center bg-gray-200 mt-2 p-2 cursor-pointer transition"
					onClick={() => handlePriority(itenary.id)}>
					<div className="flex ml-2">
						<div className="flex flex-col ml-2">
							<Link to={`/itinerary/${itenary.id}`}>
								<h1 className="font-semibold text-xl">{itenary.title}</h1>
							</Link>
							<p className="font-normal text-gray-600">
								{new Date(itenary.date).toLocaleDateString("en-US", {
									weekday: "short",
								})}
								&nbsp; at &nbsp;
								{new Date(itenary.date + " " + itenary.time).toLocaleString(
									"en-US",
									{
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									}
								)}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<button
							onClick={() => deleteItenary(itenary.id)}
							className="text-red-600 font-bold mr-2">
							X
						</button>
					</div>
				</li>
			))}
		</div>
	);
}

export default Itenaries;
