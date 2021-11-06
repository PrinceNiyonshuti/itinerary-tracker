/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Itenaries({ itenaryData, deleteItenary }) {
	return (
		<div>
			{itenaryData.map((itenary) => (
				<li
					key={itenary.id}
					className="flex justify-between items-center bg-gray-200 mt-2 p-2 cursor-pointer transition">
					<div className="flex ml-2">
						<div className="flex flex-col ml-2">
							<Link to={`/itenary/${itenary.id}`}>
								<h1 className="font-semibold text-xl">{itenary.title}</h1>
							</Link>
							<p className="font-normal text-gray-600">
								{itenary.date} at {itenary.time}
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
