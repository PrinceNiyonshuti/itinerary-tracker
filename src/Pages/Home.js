/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Itenaries from "../Components/Itenaries";
const Home = () => {
	const [itenaryData, setItenaryData] = useState(null);
	const navigate = useNavigate();

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

	// Delete Itenerary
	const deleteItenary = (ItenaryId) => {
		const deleteItenerary = fetch(
			`http://localhost:8000/itenaryList/` + ItenaryId,
			{
				method: "DELETE",
			}
		).then(() => {
			console.log("Itenary Deleted");
			navigate("/");
		});
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
