/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
const Title = () => {
	return (
		<div>
			<div className="flex justify-between w-full flex-wrap overflow-hidden">
				<div className="w-1/2 overflow-hidden">
					<h2 className="font-bold text-3xl mb-2">Itenerary Tracker</h2>
				</div>
				<div className="w-1/2 flex justify-end overflow-hidden">
					<Link to="/">
						<p className="text-blue-700 font-normal mx-5">Home</p>
					</Link>
					<Link to="/add">
						<Button name="Add" />
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Title;
