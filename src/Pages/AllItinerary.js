/** @format */

import React, { useContext } from "react";
import Itenaries from "../Components/Itenaries";
import { ItineraryContext } from "../Contexts/ItineraryContext";

function AllItinerary() {
	const { itenaryAllData, deleteItenary } = useContext(ItineraryContext);

	return (
		<div>
			<div className="w-full p-4">
				<ul>
					{itenaryAllData && (
						<Itenaries
							itenaryData={itenaryAllData}
							deleteItenary={deleteItenary}
						/>
					)}
				</ul>
			</div>
		</div>
	);
}

export default AllItinerary;
