/** @format */

import React from "react";

const TextArea = ({ id, rows,refData, placeholder }) => {
	return (
		<div className=" p-3 w-full">
            <textarea
                id={id}
				rows={rows}
				required
				ref={refData}
				className="border p-2 rounded w-full"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default TextArea;
