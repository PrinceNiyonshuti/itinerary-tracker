/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="p-2 pl-6 text-center">
				<h2 className="font-normal">Copyright &copy; 2021</h2>
				<Link to="/about">
					<p className="font-normal text-blue-700">About</p>
				</Link>
			</div>
		</div>
	);
};
export default Footer;
