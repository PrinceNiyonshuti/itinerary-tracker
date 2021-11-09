/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Itenaries from "../Components/Itenaries";
import { ItineraryContext } from "../Contexts/ItineraryContext";

const Home = () => {
	const { itenaryData, deleteItenary } = useContext(ItineraryContext);
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
