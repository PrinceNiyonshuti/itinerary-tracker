/** @format */

import React from "react";

const Input = ({ type, id, refData, placeholder }) => {
	return (
		<div className=" p-3 w-full">
			<input
				type={type}
				id={id}
				required
				ref={refData}
				className="border p-2 rounded w-full"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
