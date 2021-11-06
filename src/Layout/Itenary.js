/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Itenary = () => {
	const { id } = useParams();
	const [details, setDetails] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/` + id)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setDetails(data);
			});
		// eslint-disable-next-line
	}, []);
	return (
		<div className="mx-5">
			{details ? (
				<div>
					<h3 className="font-bold text-2xl my-2">{details.title}</h3>
					<hr />
					<p className="font-normal my-2">
						<b>Day</b> : {details.date}
						<br />
						<b>Time</b> : {details.time}
					</p>
					<p className="font-normal"></p>
					<p className="font-normal text-justify my-2">{details.description}</p>
				</div>
			) : (
				<p>No data available</p>
			)}
		</div>
	);
};

export default Itenary;
