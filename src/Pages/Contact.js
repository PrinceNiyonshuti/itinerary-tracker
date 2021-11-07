/** @format */

import React, { useRef } from "react";
import Input from "../Components/Input";

function Contact() {
	const authorNames = useRef();
	return (
		<div className="mx-5">
			<h3 className="font-bold text-center text-lg mb-1 ">Contact Us</h3>
			<p className="font-normal text-center">
				For more details , don't hesitate to reach to us
			</p>
			<form>
				<div className="flex">
					<div className="w-full bg-white p-2 rounded">
						<Input type={"text"} id={"username"} refData={authorNames} placeHolder={"Your Names"} />
					</div>
				</div>
			</form>
		</div>
	);
}

export default Contact;
